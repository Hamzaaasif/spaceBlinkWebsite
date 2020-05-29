import React from 'react'
import {Route , Switch} from 'react-router-dom'
import home from '../Pages/home'



const Router = ()=>(
  <Switch>
    <Route  path="/" component = {home}></Route>
  </Switch>
)

export default Router;