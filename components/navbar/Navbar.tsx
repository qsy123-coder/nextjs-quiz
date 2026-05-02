import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "@/public/images/site-logo.svg";
import { ModeToggle } from "../button/ModeToggle";
import { buttonVariants } from "../ui/button";
const Navbar = () => {
  return (
    <nav className="flex justify-between mb-10">
      <Link href={"/"} className="flex gap-2 items-center">
        <Image src={img} alt="logo" width={26} height={26} />
        <p className="font-semibold text-3xl font-display">
          Dev<span className="text-amber-600">Flow</span>
        </p>
      </Link>
      <h2>Global Search</h2>
      <div className="flex gap-4 items-center">
        <Link
          href="/"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          DashBoard
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
