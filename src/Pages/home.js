import React , { Component} from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
MDBView,
MDBContainer,
MDBCarousel,
MDBCarouselInner,
MDBCarouselItem

  } from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



class home extends Component {

  state ={
    isOpen:false
  }

  toggleCollaspe = ()=>{
    this.setState({isOpen:!this.state.isOpen})
  }

  render(){
    return(

      <div>

        {/* Nav Bar */}

      <Router>

      <MDBNavbar color="rgba-black-light "   dark expand="md"  scrolling fixed="top" >
        <MDBNavbarBrand href="/">
        <img
              className="d-block w-50"
              src={require('../img/logo.png')}
              alt=""
              />

        </MDBNavbarBrand>

        <MDBNavbarToggler  onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav left>

                <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <strong className=" font-weight-bold font-italic h5-responsive"> Destinations
                  </strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Beach Party Places</MDBDropdownItem>
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
                  <MDBDropdownItem href="#!">Visa Guides</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Travel Guides</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Food</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Hotem Reviews</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Start a Travel Blog</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Sustainable Travel</MDBDropdownItem>
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
      <img class="d-block w-100" src={require('../img/cover 3.jpg')}/>
    </div>
  </div>
</div>

    </div>
    )
  }
}

export default home;