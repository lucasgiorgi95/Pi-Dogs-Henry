const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Temperament, Dog} = require('../db')
const axios = require('axios')
const {getAllInfo, getApiInfoById} =require('../Controller/ControllersDog')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', async (req, res)=>  {
    const {name} = req.query;
        const everyDog = await getAllInfo()
        try {   
         if (name) { 
          let specificDog = everyDog.filter(e => e.name.toLowerCase().includes(name))    
            if (specificDog.length > 0) {
                res.status(200).send(specificDog)
            } 
        } else {res.status(200).send(everyDog)} 
     }
        catch(err){res.send({msg: err})}
})

router.get('/dogs/:id', async (req, res)=>{
    const {id} = req.params
    try { 
         const respuesta = await getApiInfoById(id)
            if(respuesta) {
                res.status(200).send(respuesta);
            } else {res.status(404).send("No hay perri, perri")}
    } catch (error) {res.status(500).send({msg: error})}
}) 

router.get('/temperament', async (req,res)=>{
    const apiTemperament = await getAllInfo();
    const newTemperaments = await apiTemperament.map((e)=> e.temperament)//.filter((e)=>e)
    //console.log(newTemperaments)
    newTemp = newTemperaments.join().split(',')
    console.log(newTemp)
    newTemp = [... new Set(newTemp)].sort()
    
    newTemp.forEach((e) => {
        Temperament.findOrCreate({
            where: {name: e}
        })
    });
    
    const totalTemperament = await Temperament.findAll()
    res.status(200).send(totalTemperament)

});

router.post('/dog', async (req, res) => {
    let {id, name, weight_min, weight_max, height_min, height_max, life_span, image, temperament } = req.body
    try { 
    const createDog  =  await Dog.create({id, name, weight_min, weight_max, height_min, height_max, life_span, image})
    const dbTemperament = await Temperament.findAll({
        where: {name: temperament} 
    })
    createDog.addTemperament(dbTemperament)
    res.send('Perro creado')

    
} catch (error) {
    res.status(400).send(error)
}
})  


module.exports = router;
