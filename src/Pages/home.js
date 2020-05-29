import React , { Component} from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon

  } from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



class home extends Component {

  state ={
    isOpen:false
  }

  toggleCollapse = ()=>{
    this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    return(

      <div>

        {/* Nav Bar */}

      <Router>

      <MDBNavbar color="rgba-black-light "   dark expand="md"  scrolling fixed="top" >

        <MDBNavbarBrand href="/" className="font-weight-bold">
        <MDBIcon icon="globe-africa"  />  Space Blink
        
        {/* <img
              className="d-block w-50"
              src={require('../img/logo.png')}
              alt=""
              /> */}
              
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>


          <MDBNavbarNav left>

                <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <strong className=" font-weight-bold font-italic h5-responsive"> Destinations
                  </strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem  href="#!">Beach Party Places</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Beach Love Stories</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Map</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <span className="mr-2 font-weight-bold font-italic h5-responsive"> Resources & Tips
                  </span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem  href="#!">Visa Guides</MDBDropdownItem>
                  <MDBDropdownItem  href="#!">Travel Guides</MDBDropdownItem>
                  <MDBDropdownItem  href="#!">Food</MDBDropdownItem>
                  <MDBDropdownItem   href="#!">Hotel Reviews</MDBDropdownItem>
                  <MDBDropdownItem  href="#!">Start a Travel Blog</MDBDropdownItem>
                  <MDBDropdownItem  href="#!">Sustainable Travel</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <span className="mr-2 font-weight-bold font-italic h5-responsive"> Story Teller
                  </span>
                </MDBDropdownToggle>
                <MDBDropdownMenu transparent> 
                  <MDBDropdownItem href="#!"  >About Nature</MDBDropdownItem>
                  <MDBDropdownItem href="#!">About Culture</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Inspirations</MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdownToggle nav >
                  <span className="mr-2 font-weight-bold font-italic h5-responsive"> Blog
                  </span>
                </MDBDropdownToggle>

            <MDBDropdown>
              
                <MDBDropdownToggle nav caret>
                  <span className="mr-2 font-weight-bold font-italic h5-responsive"> About
                  </span>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">My Story</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Work With Me</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <span className="mr-2 font-weight-bold font-italic h5-responsive"> Shop 
                  </span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Travel Gear</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Ebooks</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>

                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>



    {/* Image Section */}

    
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" alt= "Responsive" src={require('../img/cover 3.jpg')}/>
    </div>
  </div>
</div>

        

        {/* Footer */}
<br/><br/>



<footer class="page-footer font-small brown lighten-1  pt-4">


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

export default home;