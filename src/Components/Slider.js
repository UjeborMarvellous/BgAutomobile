import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
    //   cssEase: "linear",
    };
    return (
      <div className="lg:mx-20 sm:mx-14 mx-7 my-10">
        <Slider {...settings} className="Weight">
          <img src={"./Images/Brand01.jpg"} alt="Logo" className="w" />
          <img src={"./Images/Brand02.jpg"} alt="Logo" className="w" />
          <img src={"./Images/Brand03.jpg"} alt="Logo" className="w" />
          <img src={"./Images/Brand04.jpg"} alt="Logo" className="w" />
          <img src={"./Images/Brand05.jpg"} alt="Logo" className="w" />
          <img src={"./Images/Brand06.jpg"} alt="Logo" className="w" />
          <img src={"./Images/Brand07.jpg"} alt="Logo" className="w" />
          <img src={"./Images/Brand08.jpg"} alt="Logo" className="w" />
        </Slider>
      </div>
    );
  }
}
