import React from 'react'
import Carousel from "react-bootstrap/Carousel"

function CarouselComp() {
  return (
      <Carousel fade>
          <Carousel.Item>
              <img className="d-block w-100"
                  src=""
                  alt="first slide"
              />
          </Carousel.Item>
      </Carousel>
          
  )
}

export default CarouselComp