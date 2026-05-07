"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import hamburger from "@/public/icons/hamburger.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Button } from "../../ui/button";
import NavLinks from "./NavLinks";

const MoblieNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <GiHamburgerMenu className="h-7 w-7 sm:hidden" /> */}
        <Image
          src="/icons/hamburger1.svg"
          alt="hamburger1"
          width={35}
          height={35}
          className="sm:hidden dark-icon"
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none">
        <SheetHeader>
          <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src="/images/site-logo.svg"
              alt="logo"
              width={26}
              height={26}
            />
            <p className="font-semibold text-3xl font-display">
              Dev<span className="text-amber-600">Flow</span>
            </p>
          </Link>
          <div className="no-scrollbar  flex flex-col justify-between h-[calc(100vh-80px)] overflow-y-auto">
            <SheetClose asChild>
              <section className="flex flex-col pt-16 gap-8 h-full ">
                <NavLinks isMobile />
              </section>
            </SheetClose>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Button>
                  <Link href="/signin">Sign in</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button>
                  <Link href="/signup">
                    <span className="">Sign up</span>
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MoblieNavbar;
