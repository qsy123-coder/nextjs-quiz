import React from "react";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex justify-center items-center auth-bg dark:auth-bg">
      {/* <div className="absolute inset-0 bg-black/40 dark:bg-black/60" /> */}
      {children}
    </main>
  );
};

export default AuthLayout;
