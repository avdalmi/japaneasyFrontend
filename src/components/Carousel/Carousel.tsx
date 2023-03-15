import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComp: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.voicemap.me/public/routes/images/000/003/910/original/Fushimi_Inari.jpg"
          alt="first slide"
          style={{ maxHeight: "340px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Welcome</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            exercitationem doloribus aliquid ipsum expedita quasi iure accusamus
            itaque perspiciatis ipsam, error, facere dolor ex fugiat asperiores
            deserunt molestiae excepturi culpa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gotthewanderingeye.com/wp-content/uploads/2022/03/chureito-pagoda-panorama_wm.jpg"
          alt="tokyo streets"
          style={{ maxHeight: "340px", objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
