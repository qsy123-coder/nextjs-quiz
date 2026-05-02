import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-10">
      <Link href="/dashboard">go to dash board</Link>
      <Link href="/">go to homepage</Link>
    </div>
  );
};

export default Navbar;
