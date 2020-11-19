import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './component/home/Home'
import Signup from './component/signup/Signup'
import './component/home/bootstrap.min.css'
function App() {

return(
    <div className='app'>
      
      <Link to='/'> Home </Link>
      <Link to='/Signup'> Signup </Link>
      

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route exact path='/signup'>
          <Signup />
        </Route>

      </Switch>

    </div>
  )
}

export default App