"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#260126] z-50 shadow-lg">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-white cursor-pointer flex gap-2 items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/icons/casino-logo.png" alt="logo" className="w-8" />
            <h2 className="glow-text">CASINO</h2>
          </a>
          {/* Desktop Nav */}
          <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex space-x-8 font-bold text-white">
            <li><a href="#top-casinos" className="hover:text-[#FFD600]">Top Casinos</a></li>
            <li><a href="#about-us" className="hover:text-[#FFD600]">About Us</a></li>
            <li><a href="#terms" className="hover:text-[#FFD600]">Terms & Conditions</a></li>
          </ul>

          {/* Burger / X button for mobile */}
          <button className="md:hidden z-50 cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? (
              <img
                src="/icons/close.png"
                alt="close"
                className="w-4 h-4"
              />
            ) : (
              <img
                src="/icons/burger-menu.svg"
                alt="burger-menu"
              />
            )}
          </button>
        </nav>
      </header>

      {/* SIDE MENU */}
      <div
        className={`fixed z-40 top-0 right-0 h-full w-64  bg-[#0B1329] text-white p-6 transform transition-transform duration-300 shadow-lg ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Menu Items */}
        <ul className="mt-12 space-y-4 font-bold">
          <li>
            <a href="#top-casinos" onClick={() => setOpen(false)}>
              Top Casinos
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={() => setOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#terms" onClick={() => setOpen(false)}>
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
