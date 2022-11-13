import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={2000}
      stopOnHover={false}
      transitionTime={1000}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      {images.map((image) => (
        <div>
          <img src={image.img} alt="service" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
