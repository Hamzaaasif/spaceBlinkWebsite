import React , { Component} from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon, } from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



class header extends Component {

  state ={
    isOpen:false
    
  }

   gallarey=()=> {
    ("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    }

  toggleCollapse = ()=>{
    this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    return(

      <div>

        {/* Nav Bar */}

      <Router>

      <MDBNavbar color="white"  transparent light expand="md"  scrolling fixed="top" >

        <MDBNavbarBrand href="/" className="font-weight-bold">
        <MDBIcon icon="cloud"  />  Space Blink
        
              
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>


          <MDBNavbarNav left className=" my-2 ">


          <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <strong className=" font-weight-bold  h6-responsive"> Home 
                  </strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Owl Carousel Slider</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Home Items with Carousel</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

                <MDBDropdown>
                <MDBDropdownToggle color="" nav caret>

                  <strong  className=" font-weight-bold h6-responsive"> Tours
                  </strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem  href="#!">All Tour List</MDBDropdownItem>
                  <MDBDropdownItem href="#!">All Tour Grid</MDBDropdownItem>
                  <MDBDropdownItem href="#!">All Tour Sort Masonry</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <strong className=" font-weight-bold  h6-responsive">Hotels
                  </strong>

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

                  <strong className=" font-weight-bold h6-responsive"> Resturants
                  </strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu transparent> 
                  <MDBDropdownItem href="#!"  >All Resturants List</MDBDropdownItem>
                  <MDBDropdownItem href="#!">All Resturants Grid</MDBDropdownItem>
                  <MDBDropdownItem href="#!">All Resturants Sort Masonry</MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>

            <MDBDropdown>
              
                <MDBDropdownToggle nav caret>
                  <strong className=" font-weight-bold  h6-responsive"> Pages
                  </strong>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Blog</MDBDropdownItem>
                  <MDBDropdownItem href="#!">FAQs</MDBDropdownItem>
                  <MDBDropdownItem href="#!">About Us</MDBDropdownItem>
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



                     
</div>


    )
  }
}

export default header;