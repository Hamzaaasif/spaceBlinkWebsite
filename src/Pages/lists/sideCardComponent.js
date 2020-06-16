import React from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer , MDBIcon } from "mdbreact";

const SidePanelham = () => {
return (

<MDBContainer>

  <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
  
    <MDBListGroup>
  
      <MDBListGroupItem><MDBIcon icon="compass" /> <strong> All Tours</strong>    <MDBIcon icon="chevron-right"  className="float-right"/> </MDBListGroupItem>

      <MDBListGroupItem> <MDBIcon icon="city" /> <strong> City Sightseeing</strong> <MDBIcon icon="chevron-right"  className="float-right"/></MDBListGroupItem>

      <MDBListGroupItem><MDBIcon icon="tree" /><strong> Museum Tour</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>

      <MDBListGroupItem><MDBIcon icon="landmark" /><strong> Historic Buildings</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>

      <MDBListGroupItem><MDBIcon icon="hiking" /><strong> Walking Tour</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>

      <MDBListGroupItem><MDBIcon icon="fa fa-utensils" /><strong> Eat And Drink</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>

      <MDBListGroupItem><i className="fa fa-church"></i><strong> Churches</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>

      <MDBListGroupItem> <i className="fab fa-skyatlas"></i> <strong> Skyline Tour</strong> <MDBIcon icon="chevron-right"  className="float-right"/> 
      </MDBListGroupItem>
  
    </MDBListGroup>
  
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