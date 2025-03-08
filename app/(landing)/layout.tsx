import React, { ReactNode } from "react";
import Navbar from "../components/landing/nav-bar";
import { auth } from "@/auth";

const LandingLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar  session={session} />
      {children}
    </main>
  );
};

export default LandingLayout;
