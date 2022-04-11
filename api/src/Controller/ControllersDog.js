const {Temperament, Dog} = require('../db')
const axios = require('axios')
const e = require('express')



const getApiInfo = async () => {
    const apiUrl = await axios('https://api.thedogapi.com/v1/breeds')
    const apiInfo = await apiUrl.data.map(element => {
       const weightSplited = element.weight.metric.split("-")
       const heightSplited = element.height.metric.split("-")
        return {
            id: element.id,
            name: element.name, 
            bred_for: element.bred_for,
            breed_group: element.breed_group,
            life_span: element.life_span,
            temperament: element.temperament,
            weight_min: parseInt(weightSplited[0]),
            weight_max: parseInt(weightSplited[1]),
            height_min: parseInt(heightSplited[0]),
            height_max:parseInt(heightSplited[1]),
            image: element.image.url
                }
    }) 
    return apiInfo;
}


const getDbInfo = async () => {
    return await Dog.findAll({
       include: {
           model: Temperament,
           attributes: ['name'],
           through: {
               attributes: [],
           }

       } 
    })
}

const getAllInfo = async () => {
    const infoAp = await getApiInfo();
    const infoDb =  await getDbInfo();
    const todaLaInfo = infoAp.concat(infoDb);
    return todaLaInfo;
} 

const getApiInfoById = async (id) => {
try {
    const resultApi =  await axios.get('https://api.thedogapi.com/v1/breeds')
    const respuesta = await resultApi.data.filter(e => {
        if(parseInt(e.id) === parseInt(id)) return e
    })

     const ordenarDatos = await respuesta.map(element => {
        const weightSplited = element.weight.metric.split("-")
        const heightSplited = element.height.metric.split("-")
        return {
            id: element.id,
            name: element.name, 
            bred_for: element.bred_for,
            breed_group: element.breed_group,
            life_span: element.life_span,
            temperament: element.temperament,
            weight_min: parseInt(weightSplited[0]),
            weight_max: parseInt(weightSplited[1]),
            height_min: parseInt(heightSplited[0]),
            height_max:parseInt(heightSplited[1]),
            image: element.image.url
                }
    }) 
    return ordenarDatos;
} catch (error) {
    console.log(error)
}
}

const getTemperament = (temperament) => {
     getAllInfo.filter(e => {
    e.temperament === temperament
    
}) 
 
}

module.exports = {getAllInfo, getApiInfoById, getTemperament}