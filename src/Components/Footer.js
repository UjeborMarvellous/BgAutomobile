import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

function Footer() {
  return (
    <section className="footerSection  rounded-b-3xl py-20 px-20">
      <div className="container lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-1 grid grid-cols-1  pt-2" >
        <div className="footerDiv">
          <img src={"./Images/logo.png"} alt="Logo" className="w-40 py-3" />
          <div className="flex">
            <BsFacebook className="text-white border-2 mx-2 text-3xl p-1"/>
            <FiInstagram className="text-white border-2 mx-2 text-3xl p-1"/>
            <AiOutlineTwitter className="text-white border-2 mx-2 text-3xl p-1"/>
            <SiTiktok className="text-white border-2 mx-2 text-3xl p-1"/>
          </div>
        </div>
        <div className="footerDiv">
          <h2 className="text-white font-medium lg:py-2 sm:pt-7 sm:pb-3 py-5 text-3xl">About Us</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Sign In</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg"> Welcome</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg"> Let's Work</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg"> wish List</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg"> Latest</h2>
        </div>
        <div className="footerDiv">
          <h2 className="text-white font-medium lg:py-2 sm:pt-7 sm:pb-3 py-5 text-3xl">Services</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Maintenance Tips</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">FAQ</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Testtimonials</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Latest News</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Financing Option</h2>
        </div>
        <div className="footerDiv">
          <h2 className="text-white font-medium lg:py-2 sm:pt-7 sm:pb-3 py-5 text-3xl">Car Reviews</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Terms and Conditions</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Car Buying Guide</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Privacy Policy</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Find a Car</h2>
          <h2 className="text-white font-thin hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Car Buying Guide</h2>
        </div>
      </div>
      <div className="copyWrite pt-20">
          <p className="text-white lg:text-lg sm:text-lg text-sm ">Copyright 2023 All right reserved Designed by <span className="text-blue-500">BogieCoder</span></p>
      </div>
    </section>
  );
}

export default Footer;
