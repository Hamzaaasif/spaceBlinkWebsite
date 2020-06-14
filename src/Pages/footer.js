import React , { Component} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter , MDBIcon } from "mdbreact";


class footer extends Component {


  render(){
    return(

      <div >

    <MDBFooter color="grey darken-2" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <br/>
        <MDBRow >

          <MDBCol >
            <h4 className="title "> <strong>Need Help ? </strong></h4> <br/>
            <MDBIcon icon="phone-volume fa-2x " /> <strong> 004542344599 </strong> <br/><br/>
            <MDBIcon far icon="envelope fa-2x" /> <strong>  help@spaceBlink.com </strong>
          </MDBCol>

          <MDBCol >
            <h5 className="title"> <strong> ABOUT</strong></h5>
            
              <li className="list-unstyled">
                <a href="#!"> <strong>About us </strong></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"> <strong> FAQ </strong></a>
              </li>

            
          </MDBCol>

          <MDBCol >
            <h5 className="title"><strong>Discover</strong></h5>
            
              <li className="list-unstyled">
                <a href="#!"> <strong> Tour List </strong></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"> <strong> Hotels List </strong></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><strong> Transfer list </strong></a>
              </li>
            
          </MDBCol>

          <MDBCol>

          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    

<footer class="page-footer font-small grey darken-2  pt-1">


<div class="container">

<div class="row">


  <div class="col-md-12 py-5">
    <div class="mb-5 flex-center">

      
      <a class="fb-ic">
        <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3"> </i>
      </a>
    
      <a class="tw-ic">
        <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 "> </i>
      </a>
      
      <a class="gplus-ic">
        <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 "> </i>
      </a>
      
     
      <a class="ins-ic">
        <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 "> </i>
      </a>
      
      <a class="pin-ic">
        <i class="fab fa-pinterest fa-lg white-text "> </i>
      </a>
      
      

    </div>
  </div>
</div>
</div>
  <div className="footer-copyright text-center py-2">© 2020 Copyright: All rights reserved
  </div>
 

</footer>
</div>


    )
  }
}

export default footer;