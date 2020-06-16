import React from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer , MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"; 

const SidePanelham = () => {
return (

<MDBContainer>

  <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
  
    <MDBListGroup>
  
      <MDBListGroupItem className="example hoverable style-pointer"><MDBIcon icon="compass" /> <strong> All Tours</strong>    <MDBIcon icon="chevron-right"  className="float-right"/> </MDBListGroupItem>

      <MDBListGroupItem> <MDBIcon icon="city" /> <strong> City Sightseeing</strong> <MDBIcon icon="chevron-right"  className="float-right"/></MDBListGroupItem>

      <MDBListGroupItem><MDBIcon icon="tree" /><strong> Museum Tour</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>

      <MDBListGroupItem><MDBIcon icon="landmark" /><strong> Historic Buildings</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>

      <MDBListGroupItem><MDBIcon icon="hiking" /><strong> Walking Tour</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>

      <MDBListGroupItem><MDBIcon icon="utensils" /><strong> Eat And Drink</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>

      <MDBListGroupItem><i className="church"></i><strong> Churches</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>

      <MDBListGroupItem> <i className="fab fa-skyatlas"></i> <strong> Skyline Tour</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>
  
    </MDBListGroup>
  
  </MDBCard>

  

  <MDBCard style={{ width: "22rem", marginTop: "1rem" }} >

  <h6 className="h6-responsive mx-3 my-3">
           Rating
  </h6><br/>

  <div class="custom-control custom-checkbox mx-2 my-1">
  <input type="checkbox" class="custom-control-input" id="chkbox1" />
  <label class="custom-control-label" for="chkbox1">
            <i className="fas fa-star blue-text"> </i>
            <i className="fas fa-star blue-text"> </i>
            <i className="fas fa-star blue-text"> </i>
            <i className="fas fa-star blue-text"> </i>
            <i className="fas fa-star blue-text"> </i>
    </label>
</div>

<div class="custom-control custom-checkbox mx-2 my-1">
  <input type="checkbox" class="custom-control-input" id="chkbox2" />
  <label class="custom-control-label" for="chkbox2">
            <i class="fas fa-star blue-text"> </i>
            <i class="fas fa-star blue-text"> </i>
            <i class="fas fa-star blue-text"> </i>
            <i class="fas fa-star blue-text"> </i>
            <i class="far fa-star blue-text"> </i>
    </label>
</div>

<div class="custom-control custom-checkbox mx-2 my-1">
  <input type="checkbox" class="custom-control-input" id="chkbox3" />
  <label class="custom-control-label" for="chkbox3">
            <i class="fas fa-star blue-text"> </i>
            <i class="fas fa-star blue-text"> </i>
            <i class="fas fa-star blue-text"> </i>
            <i class="far fa-star blue-text"> </i>
            <i class="far fa-star blue-text"> </i>
    </label>
</div>

<div class="custom-control custom-checkbox mx-2 my-1">
  <input type="checkbox" class="custom-control-input" id="chkbox4" />
  <label class="custom-control-label" for="chkbox4">
            <i class="fas fa-star blue-text"> </i>
            <i class="fas fa-star blue-text"> </i>
            <i class="far fa-star blue-text"> </i>
            <i class="far fa-star blue-text"> </i>
            <i class="far fa-star blue-text"> </i>
    </label>
</div>

<div class="custom-control custom-checkbox mx-2 my-1">
  <input type="checkbox" class="custom-control-input" id="chkbox5" />
  <label class="custom-control-label" for="chkbox5">
            <i class="fas fa-star blue-text"> </i>
            <i class="far fa-star blue-text"> </i>
            <i class="far fa-star blue-text"> </i>
            <i class="far fa-star blue-text"> </i>
            <i class="far fa-star blue-text"> </i>
    </label>
</div>
<hr/>

<h6 className="h6-responsive mx-3 my-1 ">
           District/Area
  </h6><br/>

  <div class="custom-control custom-checkbox mx-2 my-1">
  <input type="checkbox" class="custom-control-input" id="chkbox6" />
  <label class="custom-control-label" for="chkbox6">
             Paris Center
    </label>
</div>

<div class="custom-control custom-checkbox mx-2 my-1">
  <input type="checkbox" class="custom-control-input" id="chkbox7" />
  <label class="custom-control-label" for="chkbox7">
            La Defance
    </label>
</div>

<div class="custom-control custom-checkbox mx-2 my-1">
  <input type="checkbox" class="custom-control-input" id="chkbox8" />
  <label class="custom-control-label" for="chkbox8">
            Latin Quarter
    </label>
</div><br/>

  </MDBCard>


  <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="flex-center">
      <MDBIcon icon="hands-helping fa-3x" />
      <h5 className="h5-responsive  text-center ">
           Need Help?
         </h5>
         <h5 className="h5-responsive font-weight-bold  text-center ">
           +45 423 445 99
         </h5><br/>

         <h5 className="  text-center small ">
           Mondat To Friday 9:00am-7:30pm
         </h5>

  </MDBCard>

</MDBContainer>
);
};

export default SidePanelham;