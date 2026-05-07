import React from "react";
import NavLinks from "./navigation/NavLinks";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="dark:bg-gray-900 left-0 top-0 sticky border-r h-screen flex flex-col justify-between overflow-y-hidden p-6 pt-36 max-sm:hidden">
      <div
        className="flex flex-1 flex-col gap-6
      "
      >
        <NavLinks isMobile={false} />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="min-h-[42px] w-full rounder-lg border px-4 py-3 font-semibold text-sm"
          variant={"outline"}
        >
          <Image
            src="/icons/account.svg"
            alt="account"
            width={25}
            height={25}
            className="lg:hidden"
          />
          <Link href="/signin" className="max-lg:hidden">
            Sign in
          </Link>
        </Button>
        <Button
          className="min-h-[42px] w-full rounder-lg border px-4 py-3 font-semibold text-sm"
          variant={"outline"}
        >
          <Image
            src="/icons/sign-up.svg"
            alt="account"
            width={25}
            height={25}
            className="lg:hidden "
          />
          <Link href="/signup" className="max-lg:hidden">
            <span>Sign up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
