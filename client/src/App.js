import {Route} from 'react-router-dom'
import Home from './components/Home';
import  LandingPage  from './components/LandingPage'
import DogsCreate from './components/DogsCreate'
import Details from './components/Details'
function App() {
  return (
   
   <>
      <div className="App">
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route path='/dog'>
          <DogsCreate/>
        </Route>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route exact path='/dogs/:id'>
          <Details/>
        </Route>
      </div>
    </>
    
  );
}

export default App;
