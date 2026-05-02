import ClientFetchPage from "@/components/ClientFetchPage";
import ServerFetchPage from "@/components/ServerFetchPage";
import Link from "next/link";
import React from "react";

const AnasiPage = () => {
  return (
    <div className="flex text-xl font-bold gap-10">
      <Link href="/clientPage">go to clientPage</Link>
      <Link href="/serverpage">go to serverpage</Link>
    </div>
  );
};

export default AnasiPage;
