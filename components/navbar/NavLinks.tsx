"use client";
import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SheetClose } from "../ui/sheet";

const NavLinks = ({ isMobile = false }: { isMobile: boolean }) => {
  const path = usePathname();

  return navLinks.map((item, index) => {
    const isActive = path.includes(item.route) && path === item.route;
    const components = (
      <Link
        href={item.route}
        key={item.label}
        className={`${isActive && "bg-amber-500 rounded-sm"} flex text-sm gap-4 items-center p-4 justify-start `}
      >
        <Image src={item.imgUrl} alt={item.label} width={25} height={25} />
        <p className={`${isMobile && "font-bold "} font-semibold `}>
          {isMobile && item.label}
        </p>
      </Link>
    );
    return isMobile ? (
      <SheetClose key={item.label} asChild>
        {components}
      </SheetClose>
    ) : (
      <React.Fragment>{components}</React.Fragment>
    );
  });
};

export default NavLinks;
