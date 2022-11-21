import React from 'react'
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"

function CarouselComp() {
  return (
      <Carousel>
          <Carousel.Item>
              <img className="d-block w-100"
                  src="https://d3vonci41uckcv.cloudfront.net/old-images/original/46effa99-198d-4973-969b-dd438c18a6d1.jpg"
                  alt="first slide"
              />
              <Carousel.Caption>
                  <h3>Welcome</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem doloribus aliquid ipsum expedita quasi iure accusamus itaque perspiciatis ipsam, error, facere dolor ex fugiat asperiores deserunt molestiae excepturi culpa.</p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img className="d-block w-100"
                  src="https://d1e00ek4ebabms.cloudfront.net/production/e246b673-64b4-4cc3-be4b-061b1345a7ad.jpg"
                  alt="tokyo streets" />
              <Carousel.Caption>
                  <Button>Take a tour of the website</Button>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
          
  )
}

export default CarouselComp