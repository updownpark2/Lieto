import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";

export default function ArtistView() {
  const imgArr = [image1, image2, image3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {imgArr.map((item, index) => (
          <div key={index}>
            <img src={item} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </>
  );
}
