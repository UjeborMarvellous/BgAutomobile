import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

function Footer() {
  return (
    <section className="footerSection  rounded-b-3xl py-10">
      <div className="container lg:grid lg:grid-cols-4  pt-10" >
        <div className="footerDiv">
          <img src={"./Images/logo.png"} alt="Logo" className="w-32" />
          <div className="icons flex">
            <BsFacebook className="text-white border-2 mx-2 text-3xl p-1"/>
            <FiInstagram className="text-white border-2 mx-2 text-3xl p-1"/>
            <AiOutlineTwitter className="text-white border-2 mx-2 text-3xl p-1"/>
            <SiTiktok className="text-white border-2 mx-2 text-3xl p-1"/>
          </div>
        </div>
        <div className="footerDiv">
          <h2 className="text-white font-bold text-lg">About Us</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Sign In</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg"> Welcome</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg"> Let's Work</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg"> wish List</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg"> Latest</h2>
        </div>
        <div className="footerDiv">
          <h2 className="text-white font-bold text-lg">Services</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Maintenance Tips</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">FAQ</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Testtimonials</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Latest News</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Financing Option</h2>
        </div>
        <div className="footerDiv">
          <h2 className="text-white font-bold text-lg">Car Reviews</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Terms and Conditions</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Car Buying Guide</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Privacy Policy</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Find a Car</h2>
          <h2 className="text-white font-normal hover:border-b-2 whitespace-nowrap hover:border-white cursor-pointer w-24 text-lg">Car Buying Guide</h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;
