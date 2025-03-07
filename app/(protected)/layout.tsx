import React, { ReactNode } from "react";
import Logo from "@/app/components/Logo";
import NavMenuHeader from "../components/layout/nav-menu-header";
import NavOptionsHeader from "../components/layout/nav-options-header";
import Footer from "../components/layout/footer";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="fixed top-0 bg-background-900 w-full p-4">
        <div className="flex flex-1 gap-4 items-center">
          <Logo />
          <div className="flex flex-1 justify-between items-center">
            <NavMenuHeader />
            <NavOptionsHeader />
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col sm:flex-row">
        <main className="flex-1 bg-black">{children}</main>
        {/* <nav className="order-first sm:w-32 bg-background-800">Sidebar</nav> */}
      </div>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
