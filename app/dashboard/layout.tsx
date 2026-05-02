import Link from "next/link";
import React, { ReactNode } from "react";

const ShareLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="flex gap-7 font-semibold capitalize">
        <Link href="/dashboard/user">go to UserPage</Link>
        <Link href="/dashboard/anasi">go to as</Link>
        <Link href="/dashboard">go to dashboard page</Link>
      </div>
      {children}
    </div>
  );
};

export default ShareLayout;
