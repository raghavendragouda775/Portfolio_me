import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import logo from "../images/logo.jpg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <h1>
          <a href="/" className="logo">
            <img
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </a>
        </h1>

        {/* Menu Button */}
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          {/* Mobile Navbar */}
          <MobileNavbar navOpen={navOpen} />
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
