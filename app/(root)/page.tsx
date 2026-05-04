import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";
import { ROUTES } from "@/constant/routes";
const Home = () => {
  
  return (
    <div className="text-2xl font-bold">
      <h1 className="font-display text-4xl font-bold">Space Grotesk 标题</h1>
      <p className="text-lg">正常文字使用 Inter</p>
      
    </div>
  );
};

export default Home;
