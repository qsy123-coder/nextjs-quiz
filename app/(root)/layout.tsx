import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const ShareLayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default ShareLayoutRoot;
