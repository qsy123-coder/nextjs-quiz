import LeftSidebar from "@/components/navbar/LeftSidebar";
import Navbar from "@/components/navbar/navigation/Navbar";
import RightSidebar from "@/components/navbar/RightSidebar";
import React, { ReactNode } from "react";

const ShareLayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" realtive ">
      <Navbar />

      <div className="flex">
        <LeftSidebar />

        <section className="flex flex-1 flex-col min-h-screen px-6 pb-4 pt-36 max-md:pb-14  sm:px-14 border-r border-sm  lg:w-[266px]">
          <div className="mx-auto w-full  max-w-6xl">{children}</div>
        </section>

        <RightSidebar />
      </div>
    </main>
  );
};

export default ShareLayoutRoot;
