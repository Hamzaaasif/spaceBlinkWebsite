import React, { Component } from "react";
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer, MDBIcon } from "mdbreact";
// import SidePanel from './SidePanel';
import RatingCards from './RatingCard/RatingCards';
import HelpCard from './HelpCard';

class SidePanels extends Component {
    state = {
        sidePanels : [],
        error: false,
    }

    componentWillMount(){
        
        this.setState({sidePanels :this.props.sidepanel})
    }
    

     render () {
             
        let sidePanels = <p >something went wrong!</p>
        if(!this.state.error){
            sidePanels = this.state.sidePanels.map(sidePanel => { 
                return (

                            <MDBListGroupItem key={sidePanel.id} className="example hoverable ">
                                 <i className={sidePanel.icon} ></i> 
                                     {sidePanel.name} 
                                 <MDBIcon icon={sidePanel.icon1+" blue-text"} className="float-right"/> 
                            </MDBListGroupItem>
                            )
                            // "chevron-right" 
            });
        }
         return(
            
            <MDBContainer style={{ margin: " 50px auto"}}>

            <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
            
                <MDBListGroup>
                    
                    {sidePanels}
            
                </MDBListGroup> 
            
            </MDBCard>

            <RatingCards districtNames={this.props.districtName}
                        titleName={this.props.titleName}/>

            
            <HelpCard/> 

            </MDBContainer>
            
         );
     }
}


export default SidePanels;