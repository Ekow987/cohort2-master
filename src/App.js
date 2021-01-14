import React from 'react';
import { Switch, Route } from 'react-router-dom';
 import Home from './component/home/Home';
import Signup from './component/signup/Signup';
import './bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
function App() {

return(
    <div className='app'>
      
      <BrowserRouter>
      
      {/* <Link to='/Signup'> Signup </Link> */}
      
      <Switch>
         <Route exact path='/'>
          <Home/>
        </Route> 

        <Route exact path='/signup'>
        <Signup/>
        </Route>

      </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App