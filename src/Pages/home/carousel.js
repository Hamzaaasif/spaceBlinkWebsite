import React from 'react'

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView,  MDBContainer } from
"mdbreact";
import  './home.css'

const carousel = () => {
  return (
    <div>

    {/* <MDBContainer size="fluid" className="d-block"> */}

      <MDBCarousel
      mobileGesture ={true}
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
      interval = {8000}
    >
      
      <MDBCarouselInner>
        <MDBCarouselItem  itemId="1">
          <MDBView  >

            <img
              className="d-block w-100"
              src={require('../img/cover 3.jpg')}
              alt="First slide"
            />

          {/* <MDBMask overlay="black-light" /> */}

          </MDBView>

          <MDBCarouselCaption>
            <h2 className="h2-responsive "><strong>DISCOVER THE WORLD</strong></h2>
            <p>Discover hidden wonders on trips by SpaceBlink Tours Experts</p>
          </MDBCarouselCaption>

        </MDBCarouselItem>

        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 "
              src={require('../img/cover 1.jpg')}
              alt="Second slide"
            />
          {/* <MDBMask overlay="black-strong" /> */}
          </MDBView>
          <MDBCarouselCaption>
            <h2 className="h2-responsive"><strong>DISCOVER NATURE</strong></h2>
            <p>Discover hidden wonders on trips by SpaceBlink Tours Experts</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={require('../img/cover 2.jpg')}
              alt="Third slide"
            />
          {/* <MDBMask overlay="black-slight" /> */}
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"><strong>LOVE PARIS</strong></h3>
            <p>Discover hidden wonders on trips by SpaceBlink Tours Experts</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    {/* </MDBContainer> */}

    </div>    
  );
}

export default carousel;