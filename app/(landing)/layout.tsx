import React, { ReactNode } from "react";
import Navbar from "../components/landing/nav-bar";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return <main className="w-full min-h-screen flex flex-col">
    <Navbar />
    {children}
  </main>;
};

export default LandingLayout;
