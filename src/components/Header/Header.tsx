import React from "react";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header>
      <div className="bg-transparent max-w-7xl z-50 mx-auto flex justify-between">
        <div>MIDNITE</div>
        <nav className="hidden md:flex gap-8">
          <NavMenu />
        </nav>
        <div className="hidden md:flex items-center">Contact Us</div>
      </div>
    </header>
  );
};

export default Header;
