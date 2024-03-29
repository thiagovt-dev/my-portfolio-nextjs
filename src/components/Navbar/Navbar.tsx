"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

export interface NavLinkItem {
  title: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  {
    title: "Inicio",
    path: "#home",
  },
  {
    title: "Sobre",
    path: "#about",
  },
  {
    title: "Projetos",
    path: "#projects",
  },
  {
    title: "Contato",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100 md:px-8">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div>
          <Link href={"/"} className="text-2xl md:text-5xl font-semibold">
            <Image
              src="/reshot-icon-browser-DEAK34BLPC.svg"
              alt=""
              width={40}
              height={40}
              priority
              className="w-7 h-7 md:w-10 md:h-10"
            />
          </Link>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className=" flex items-center px-3 py-2   text-slate-200 hover:text-white hover:border rounded-2xl border-white">
              <Bars3Icon className="h-8 w-8 text-blue-500" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=" flex items-center px-3 py-2  text-slate-200 hover:text-white hover:border rounded-2xl border-white">
              <XMarkIcon className="h-8 w-8 text-blue-500" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
