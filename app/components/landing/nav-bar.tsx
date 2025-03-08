"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "../commons/logo";
import HamburguerSVG from "../commons/hamburguer-svg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Blog", link: "#blog" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div>
      <nav className="block w-full max-w-screen px-4 py-4 mx-auto dark:bg-black bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800 dark:text-slate-500">
          <Link href="/" className="mr-4 block cursor-pointer py-1.5">
            <Logo />
          </Link>

          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <HamburguerSVG />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-full bg-slate-100 dark:bg-gray-900/95 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-1 flex-row items-center border-b border-gray-100 dark:border-gray-800 pb-4 justify-between w-full">
              <Link href="/" className="cursor-pointer pt-4 ps-4">
                <Logo />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="text-slate-600 dark:text-white/80 w-8 h-8 mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 "
                >
                  <Link
                    href={item.link}
                    className="flex items-center text-gray-400 font-normal"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <button className="btn-primary w-full">Login</button>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 "
                >
                  <Link
                    href={item.link}
                    className="flex items-center text-gray-400 font-normal"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button className="btn-primary">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
