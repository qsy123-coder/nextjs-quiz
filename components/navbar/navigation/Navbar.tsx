import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "@/public/images/site-logo.svg";
import img1 from "@/public/icons/hamburger.svg";
import { ModeToggle } from "../../button/ModeToggle";
import { buttonVariants } from "../../ui/button";
import MoblieNavbar from "./MoblieNavbar";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-10 p-6 fixed z-50 w-full  background-light800_darkgradient border-b    sm:px-12">
      <Link href={"/"} className="flex gap-2 items-center">
        <Image src={img} alt="logo" width={26} height={26} />
        <p className="font-semibold text-3xl font-display">
          Dev<span className="text-amber-600">Flow</span>
        </p>
      </Link>
      <h2>Global Search</h2>

      <div className="flex gap-4 items-center">
        <ModeToggle />

        <MoblieNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
