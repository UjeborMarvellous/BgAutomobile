import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';

function Selection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const Output = [
    {
      id: 1,
      Img: "./Images/Lambo01.jpg",
      title: "Lamborghini Aventador",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$20,000",
      Icon: <FaStar />,
    },
    {
      id: 2,
      Img: "./Images/Lambo02.jpg",
      title: "Lamborghini Gallardo",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$98,000",
      Icon: <FaStar />,
    },
    {
      id: 3,
      Img: "./Images/Lambo03.jpg",
      title: "Lamborghini Miura",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$39,000",
      Icon: <FaStar />,
    },
    {
      id: 4,
      Img: "./Images/Lambo04.jpg",
      title: "Lamborghini Veneno",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$15,000",
      Icon: <FaStar />,
    },
    {
      id: 5,
      Img: "./Images/Lambo05.jpg",
      title: "Lamborghini LM002",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$8,000",
      Icon: <FaStar />,
    },
    {
      id: 6,
      Img: "./Images/Lambo06.jpg",
      title: "Lamborghini 400 GT",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$60,000",
      Icon: <FaStar />,
    },
    {
      id: 7,
      Img: "./Images/Lambo07.jpg",
      title: "Lamborghini Reventon",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$48,500",
      Icon: <FaStar />,
    },
    {
      id: 8,
      Img: "./Images/Lambo08.jpg",
      title: "Lamborghini Urus",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$10,000",
      Icon: <FaStar />,
    },
    {
      id: 9,
      Img: "./Images/Lambo09.jpg",
      title: "Lamborghini Aventador",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$50,000",
      Icon: <FaStar />,
    },
    {
      id: 10,
      Img: "./Images/Lambo10.jpg",
      title: "Lamborghini Diablo",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$28,000",
      Icon: <FaStar />,
    },
    {
      id: 5,
      Img: "./Images/Lambo05.jpg",
      title: "Lamborghini Jarama",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$8,000",
      Icon: <FaStar />,
    },
    {
      id: 6,
      Img: "./Images/Lambo06.jpg",
      title: "Lambo 06",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, aperiam.",
      Price: "$60,000",
      Icon: <FaStar />,
    },
  ];

  const [state, setState] = useState(Output);

  const handleBtns = (e) => {
    const value = e.target.value;

    if (value === "LatestSales") {
      setState(Output);
    } else if (value === "HotDeals") {
      const filtered = Output.filter(
        (item) =>
          item.title.includes("02") ||
          item.title.includes("05") ||
          item.title.includes("10")
      );
      setState(filtered);
    } else if (value === "Limited") {
      const filtered = Output.filter(
        (item) =>
          item.title.includes("03") ||
          item.title.includes("06") ||
          item.title.includes("10")
      );
      setState(filtered);
    }
  };
  return (
    <div className="grid pb-16 mx-auto" data-aos="fade-up">
      <div className="button block mx-auto py-6">
        <button
          onClick={handleBtns}
          value="LatestSales"
          className="border-2 focus border-gray-600 lg:py-3 sm:py-3 py-2 rounded-lg shadow-xl lg:px-10 sm:px-10 px-6 text-sm font-sans ml-4"
        >
          Latest Sales
        </button>
        <button
          onClick={handleBtns}
          value="HotDeals"
          className="border-2 focus border-gray-600 lg:py-3 sm:py-3 py-2 rounded-lg shadow-xl lg:px-10 sm:px-10 px-6 text-sm font-sans ml-4"
        >
          Hot Deals
        </button>
        <button
          onClick={handleBtns}
          value="Limited"
          className="border-2 focus border-gray-600 lg:py-3 sm:py-3 py-2 rounded-lg shadow-xl lg:px-10 sm:px-10 px-6 text-sm font-sans ml-4"
        >
          Limited
        </button>
      </div>
      <div className="box">
        <div className="box-item lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 grid grid-cols-1 gap-6 lg:mx-20 sm:mx-20 mx-6">
          {state.map((item) => (
            <div
              className="single-box lg:pb-10 sm:pb-16 pb-16 rounded-xl shadow-2xl"
              key={item.id}
              data-aos="fade-up"
            >
              <img
                src={item.Img}
                alt="Cars"
                className="w-full rounded-t-xl heit"
              />
              <div className="h1 px-4 lg:pt-0 sm:pt-0 pt-3">
                <h1 className="lg:text-xl sm:text-lg py-1 text-sm textBlack font-sans font-bold">
                  {item.title}
                </h1>
                <p className="text-sm font-semibold">{item.desc}</p>
                <div className="flex justify-between">
                    <p className="lg:text-lg sm:text-sm text-sm font-semibold">
                    {item.Price}
                    </p>
                    <div className="flex text-yellow-500">
                        <FaStar /><FaStar /><FaStar /><FaStar /><BsStarHalf />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="speech text-center" data-aos="fade-up" >
        <div className="bg">
            <p className="text-lg font-medium">Excellent Service & Great Range of</p>
            <h1 className="lg:text-7xl sm:text-6xl text-4xl mb-3 font-sans h1font">Leading Brand</h1>
            <button className="bg-blue-500 py-3.5 px-10 flex mx-auto text-white font-medium"><FiPhoneCall className="mt-1 mr-2"/>(+234) 813 346 5785</button>
        </div>
      </div>
    </div>
  );
}

export default Selection;