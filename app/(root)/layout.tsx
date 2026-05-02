import Navbar from "@/components/navbar/Navbar";
import React, { ReactNode } from "react";

const ShareLayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-370 mx-auto px-6 py-4 lg:px-10 lg:py-8">
      <Navbar />
      {children}
    </div>
  );
};

export default ShareLayoutRoot;
