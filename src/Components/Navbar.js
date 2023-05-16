import React, { useState } from "react";

function Navbar() {
  const Links = [
    { name: "Home", link: "/" },
    // { name: "Shop", link: "/" },
    { name: "About", link: "/" },
    // { name: "Accessories", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "Brands", link: "/" },
  ];
  const [open,setOpen] = useState(false);
  return (
    <div>
      <nav className="nav shadow-md w-full fixed top-0 left-0">
        <div className="md:flex  items-center justify-between text-white capitalise py-0 lg:px-20 md:px-10 px-7">
          <a href="/" className="nav">
            <img src={"./Images/logo.png"} alt="Logo" className="w-32" />
          </a>
          <div className="Links">
            <div className="flex">
                <i onClick={() => setOpen(!open)} name={open ? 'x-circle' : 'bx-menu'} class='bx bx-menu-alt-right text-3xl absolute right-8 top-6 cursor-pointer md:hidden'></i>
            </div>
            <ul className={`md:flex md-flex md:items-center md:pb-0 pb-12 absolute md:static bg md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'} `}>
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 md text-xl md:my-0 my-4 lg:my-0">
                  <a
                    href={link.link}
                    className="text-white lg:hover:duration-500 lg:hover:border-b-2 hover:ease-in lg:hover:border-blue-400 "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
