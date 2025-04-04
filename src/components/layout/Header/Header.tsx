import React from "react";
import Image from "next/image";
import { NavMenu } from "./NavMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 pt-4 w-full justify-center z-50">
      <div className="bg-transparent flex justify-between container-base">
        <div className="relative h-10 w-32">
          <Link href="/" className="flex items-center">
            <Image
              src="/navLogo.png"
              fill
              className="object-contain"
              priority
              alt="Midnite"
            />
          </Link>
        </div>

        <nav className="hidden md:flex">
          <NavMenu />
        </nav>
        <div className="hidden md:flex items-center">Contact Us</div>
      </div>
    </header>
  );
};

export default Header;
