import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle, faCarSide, faTruckMoving, faTruckMonster} from "@fortawesome/free-solid-svg-icons";
import { FaTractor } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';

function Categories() {
    useEffect(() => {
        AOS.init({duration: 2000})
    })
  return (
    <div>
      <div className="Categeory" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 lg:px-12 sm:px-12 px-5 py-16">
          <div className="Text lg:py-28 pt-16">
            <p className="text-lg p font-medium italic ">Shop by</p>
            <h1 className="lg:text-6xl sm:text-4xl h1font uppercase">Categories</h1>
            <p className="lg:text-lg text-sm font-medium w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              numquam dolorum voluptas. Itaque, nulla? Corporis ducimus
              explicabo dolores labore tempora!
            </p>
            <div className="icons lg:grid lg:grid-cols-3 grid grid-cols-2 gap-4 mr text-black py-6">
              <div className="icon bg-gray-300 hover:bg-blue-600 hover:text-white py-6 px-0 grid place-content-center">
                <FontAwesomeIcon icon={faCarSide} flip="horizontal" className="text-3xl py-1 mx-16" />
                <p className="text-center font-semibold text-lg">Cars and Buses </p>
              </div>
              <div className="icon bg-gray-300 hover:bg-blue-600 hover:text-white py-6 px-10 grid place-content-center">
                <FontAwesomeIcon icon={faMotorcycle} flip="horizontal" className="text-3xl py-1 mx-16" />
                <p className="text-center font-semibold text-lg">Motorcycle </p>
              </div>
              <div className="icon bg-gray-300 py-6 hover:bg-blue-600 hover:text-white px-10 grid place-content-center">
                <FontAwesomeIcon icon={faTruckMoving} flip="horizontal" className="text-3xl py-1 mx-16" />
                <p className="text-center font-semibold text-lg">Trucks </p>
              </div>
              <div className="icon bg-gray-300 hover:bg-blue-600 hover:text-white py-6 px-10 grid place-content-center">
                <FontAwesomeIcon icon={faTruckMonster} flip="horizontal" className="text-3xl py-1 mx-16" />
                <p className="text-center font-semibold text-lg">Truck Monster </p>
              </div>
              <div className="icon bg-gray-300 hover:bg-blue-600 hover:text-white py-6 px-10 grid place-content-center">
                <FaTractor className="text-4xl py-1 mx-16" />
                <p className="text-center font-semibold text-lg"> Tracktor </p>
              </div>
              <div className="icon bg-gray-300 hover:bg-blue-600 hover:text-white py-6 px-10 grid place-content-center">
                <AiFillCar className="text-4xl py-1 mx-16" />
                <p className="text-center font-semibold text-lg">Sport Car </p>
              </div>
            </div>
          </div>
          <div className="Image">
            <img src="/images/Hight.png" alt="category" className="w-full lg:block hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
