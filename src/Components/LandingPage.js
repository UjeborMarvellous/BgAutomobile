import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Selection from "./Selection";

function LandingPage() {
  const imageDirectory = "./Images/";
  const images = ["Lambo.png", "Blue.jpg", "Lamboside.png", "LamboBack.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);
  return (
    <div className="div">

        <div className="landing">
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:px-16 sm:px-16 px-8">
            <div className="Land pt-36">
            <h1 className="text-white lg:text-6xl sm:text-6xl text-5xl h1font">
                Car Dealing Experience. Redefined!
            </h1>
            <p className="text-white mt-8 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi id
                esse fugiat deleniti. Beatae in nostrum ut at qui, labore, vel rerum
                quas velit dicta accusamus, dolorum cupiditate distinctio nobis!
            </p>
            <div className="btns my-8 lg:flex">
                <button className="bg-blue-500 py-3 sm:-pt-10 mr-4 lg:py-3 rounded-sm px-10 text-white font-san text-sm w-4/5 uppercase hover:bg-transparent hover:border-2 hover:border-blue-500">
                View Products
                </button>
                <button className="border-2 border-white text-white py-3 px-10 uppercase text-sm w-4/5 md:ml-4 ml-0 md:mt-0 mt-6 hover:bg-blue-500 hover:border-none ">
                Contact Us
                </button>
            </div>
            </div>
            <div className="Land">
            <img
                src={imageDirectory + images[currentImageIndex]}
                alt="Logo"
                className="w-full CarImage"
            />
            </div>
        </div>
        </div>
        <Categories />
        <Selection />
    </div>
  );
}

export default LandingPage;
