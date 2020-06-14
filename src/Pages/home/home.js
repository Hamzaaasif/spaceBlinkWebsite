import React from 'react';

import Carousel from './carousel';
import CardSection from './cardSection'
import HotelsTours from './Hotel&TourList'

const home =()=>{
  return(
    <div>
      <Carousel/>
      <br/> <br/> <br/> 
      <CardSection/>
      <br/>
      <HotelsTours/>
    </div>
  )
  
}

export default home;