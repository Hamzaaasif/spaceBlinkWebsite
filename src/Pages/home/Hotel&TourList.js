import React from "react";
import {MDBContainer ,MDBRow , MDBCol } from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"; 

const HotelsTours = () => {
  return ( 

        <div>

           {/* for tours in paris */}

          <MDBContainer>
          <section className="team-section text-center my-5">

         <h2 className="h2-responsive font-weight-bold my-2 text-center ">
           PARIS TOP TOURS
         </h2>
         <p >Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
         
         <br/>

          <MDBRow className="text-center">

    <MDBCol>

  <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/historic.jpg')} alt="Responsive"/>
      </div>
   </div>



    </MDBCol>


    <MDBCol>
    <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/churches.jpg')} alt="Responsive"/>
      </div>
   </div>
    </MDBCol>

    <MDBCol>
    <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/historic1.jpg')} alt="Responsive"/>
      </div>
   </div>
    </MDBCol>
    </MDBRow>
    <br/>
    <button className="btn btn-flat align-content-center"><strong>View all </strong><i class="fas fas fa-angle-right pl-1"></i></button>
     </section>

     <hr/>
     </MDBContainer>


    {/* for hotels in paris */}

  <MDBContainer>
          <section className="team-section text-center my-5">

         <h2 className="h2-responsive font-weight-bold my-2 text-center ">
           PARIS TOP HOTELS
         </h2>
         <p >Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat</p>
         
         <br/>

          <MDBRow className="text-center">

    <MDBCol>

  <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/hotel1.jpg')} alt="Responsive"/>
      </div>
   </div>



    </MDBCol>


    <MDBCol>
    <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/hotel2.jpg')} alt="Responsive"/>
      </div>
   </div>
    </MDBCol>

    <MDBCol>

    <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/hotel3.jpg')} alt="Responsive"/>
      </div>
   </div>
    </MDBCol>

    </MDBRow>
    <br/>
    <button className="btn btn-flat align-content-center"><strong>View all </strong><i class="fas fas fa-angle-right pl-1"></i></button>
     </section>

     <hr/>
     </MDBContainer>

     {/* For bottom image section  + info */}


     <MDBContainer fluid>
          <section className="team-section text-center my-6 mx-3 ">

         <h2 className="h2-responsive font-weight-bold my-2 text-center ">
           PLAN YOUR TOURS EASLY
         </h2>
         <p >Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p><br/>

         <MDBRow className="text-center">
         <MDBCol>

         <i class="fas fa-suitcase fa-3x"></i><br/><br/>
         <h5  className="h5-responsive  text-center mx-4 "> Itineraries studied in detail </h5>
         <p  > Suscipit invenire petentium per in. Ne magna assueverit vel. Vix movet perfecto facilisis in, ius ad maiorum corrumpit, his esse docendi in.</p>
         </MDBCol>


         <MDBCol>
         <i class="fas fa-campground fa-3x"></i><br/><br/>
         <h5 className="h5-responsive text-center mx-4"> Room and food included </h5>
         <p  alt="Responsive"> Cum accusam voluptatibus at, et eum fuisset sententiae. Postulant tractatos ius an, in vis fabulas percipitur, est audiam phaedrum electram ex</p>

         </MDBCol>

         <MDBCol>
         <i class="fas fa-couch fa-3x"></i><br/><br/>
         <h5 className="h5-responsive  text-center  mx-4"> Everything organized </h5>
         <p alt="Responsive"> Integre vivendo percipitur eam in, graece suavitate cu vel. Per inani persius accumsan no. An case duis option est, pro ad fastidii contentiones.</p>
         </MDBCol>

         </MDBRow>
         <br/>
     </section>
     </MDBContainer>



     {/* <div class="row mx-1">
      
        <div class="col-md-12 mb-4">
          
            <div class="card card-image" style={{"background-image:url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg);"}} >
                <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">

                    <div>

                        <h6 class="purple-text"><i class="fas fa-plane"></i><strong> Travel</strong></h6>
                        <h3 class="card-title py-3 font-weight-bold"><strong>This is the card title</strong></h3>
                        <p class="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                            Odit sed qui, dolorum!</p>
                        <a class="btn btn-secondary btn-rounded"><i class="far fa-clone left"></i> View project</a>
                    </div>

                </div>
            </div>
         </div>
        </div> */}

    </div>
     
                
  );
}

export default HotelsTours;