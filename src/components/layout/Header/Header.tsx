import React from "react";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="sticky top-0 pt-4 w-full justify-center z-50">
      <div className="bg-transparent flex justify-between container-base">
        <div>MIDNITE</div>
        <nav className="hidden md:flex">
          <NavMenu />
        </nav>
        <div className="hidden md:flex items-center">Contact Us</div>
      </div>
    </header>
  );
};

export default Header;
