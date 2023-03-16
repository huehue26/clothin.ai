import Slider from "react-slick";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsChevronCompactLeft
      className={`h-6 w-6 text-black slider-arrow slider-arrow__prev ${className} text-palette-primary hover:text-slate-500`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsChevronCompactRight
      className={`h-6 w-6 text-black slider-arrow slider-arrow__next ${className} text-palette-secondary hover:text-slate-500`}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    />
  );
}

function SlickSlider({ childrens, customSettings }) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    ...customSettings,
  };
  return (
    <div>
      <Slider {...settings}>{childrens.map((child) => child)}</Slider>
    </div>
  );
}

export default SlickSlider;
