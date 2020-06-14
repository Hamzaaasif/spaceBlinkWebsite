import React , {Component} from 'react'

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const carousel = () => {
  return (
    <div>

    <MDBContainer>

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
        <MDBCarouselItem itemId="1">
          <MDBView>

            <img
              className="d-block w-100"
              src={require('../img/cover 3.jpg')}
              alt="First slide"
            />

          <MDBMask overlay="black-light" />

          </MDBView>

          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>

        </MDBCarouselItem>

        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={require('../img/cover 1.jpg')}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={require('../img/cover 2.jpg')}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>

    </div>    
  );
}

export default carousel;