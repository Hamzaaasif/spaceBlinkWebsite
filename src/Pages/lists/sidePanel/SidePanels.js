import React, { Component } from "react";
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer, MDBIcon } from "mdbreact";
// import SidePanel from './SidePanel';


class SidePanels extends Component {
    state = {
        sidePanels : [

            {'id':1,'name':' All Tours', 'icon':'fa fa-compass'},
            {'id':2,'name':' City Sightseeing' , 'icon':'fa fa-city'},
            {'id':3,'name':' Museum Tours' , 'icon':'fa fa-tree'},
            {'id':4,'name':' Historic Buildings' , 'icon':'fa fa-landmark'},
            {'id':5,'name':' Walking tours', 'icon':'fa fa-hiking'},
            {'id':6,'name':' Eat And Drink', 'icon':'fa fa-utensils'},
            {'id':7,'name':' Churches', 'icon':'fa fa-church'},
            {'id':8,'name':' Skyline Tour', 'icon':'fab fa-skyatlas'}
                
                ]
    }

  

     render () {
        let  sidePanels 
        if(!this.state.error){
             sidePanels = this.state.sidePanels.map(sidePanel => {
                
                return (

                            <MDBListGroupItem key={sidePanel.id}>
                                 <i className={sidePanel.icon} ></i> 
                                     {sidePanel.name} 
                                 <MDBIcon icon="chevron-right"  className="float-right"/>
                            </MDBListGroupItem>
                            )
            });
        }
         return(
            
            <MDBContainer style={{ margin: " 50px auto"}}>

            <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
            
                <MDBListGroup>
                    
                    {/* <MDBListGroupItem>{props.name}</MDBListGroupItem> */}
                    
                    {/* <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem> */}
                    {sidePanels}
            
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
     }
}


export default SidePanels;