import React , { Component} from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon,MDBContainer

  } from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



class footer extends Component {


  render(){
    return(

      <div className="fixed-bottom">

<footer class="page-footer font-small grey darken-3  pt-4">


<div class="container">

<div class="row">


  <div class="col-md-12 py-5">
    <div class="mb-5 flex-center">

      
      <a class="fb-ic">
        <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
    
      <a class="tw-ic">
        <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
      <a class="gplus-ic">
        <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
     
      <a class="ins-ic">
        <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
      <a class="pin-ic">
        <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
      </a>
    </div>
  </div>
  

</div>


</div>

  <div class="container">

    <div class="row">

    
   
      <div class="col-lg-2 col-md-12 mb-4">
        


        <div class="view overlay z-depth-1-half">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" class="img-fluid"
            alt=""/>
          {/* <a href="">
            <div class="mask rgba-white-light"></div>
          </a> */}
        </div>

      </div>
 


      <div class="col-lg-2 col-md-6 mb-4">

  
        <div class="view overlay z-depth-1-half">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg" class="img-fluid"
            alt=""/>
          {/* <a href="">
            <div class="mask rgba-white-light"></div>
          </a> */}
        </div>

      </div>
    
      <div class="col-lg-2 col-md-6 mb-4">

        
        <div class="view overlay z-depth-1-half">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg" class="img-fluid"
            alt=""/>
          {/* <a href="">
            <div class="mask rgba-white-light"></div>
          </a> */}
        </div>

      </div>
 

    
      <div class="col-lg-2 col-md-12 mb-4">

     
        <div class="view overlay z-depth-1-half">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg" class="img-fluid"
            alt=""/>

          {/* <a href="">
            <div class="mask rgba-white-light"></div>
          </a> */}
        </div>

      </div>
     
     
      <div class="col-lg-2 col-md-6 mb-4">

     
        <div class="view overlay z-depth-1-half">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).jpg" class="img-fluid"
            alt=""/>

          {/* <a href="">
            <div class="mask rgba-white-light"></div>
          </a> */}

        </div>

      </div>
     

      
      <div class="col-lg-2 col-md-6 mb-4">

        <div class="view overlay z-depth-1-half">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(84).jpg" class="img-fluid"
            alt=""/>

         

        </div>
      </div>
    </div>

  </div>
  

 
  <div className="footer-copyright text-center py-3">© 2020 Copyright: All rights reserved
  </div>
 

</footer>
</div>


    )
  }
}

export default footer;