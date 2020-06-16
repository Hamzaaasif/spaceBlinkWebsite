import React from 'react'
import {Route , Switch} from 'react-router-dom'
import home from '../Pages/home/home'
import SidePanelham from '../Pages/lists/sideCardComponent'
import SidePanel from '../Pages/lists/TourPage/TourPage'

const Router = ()=>(
  <Switch>
    <Route exact path="/" component ={home} ></Route>
    <Route exact path = "/allhotels" component={SidePanelham}></Route>
    <Route exact path = "/allhotelsAli" component={SidePanel}></Route>
  </Switch>
)

export default Router;