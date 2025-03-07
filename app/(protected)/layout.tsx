import React, { ReactNode } from "react";
import Logo from "@/app/components/Logo";
import NavMenuHeader from "../components/layout/nav-header-menu";
import NavOptionsHeader from "../components/layout/nav-header-options";
import Footer from "../components/layout/footer";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="fixed top-0 bg-background-900 w-full p-4">
        <div className="gap-12 items-center hidden sm:flex sm:flex-1">
          <Logo />
          <div className="flex flex-1 justify-between items-center">
            <NavMenuHeader />
            <NavOptionsHeader />
          </div>

          <div className="flex items-center gap-1">
            <img
              className="rounded-full ring ring-black w-8 h-8"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <span className="text-gray-400 hover:text-white cursor-pointer">
              <HugeiconsIcon icon={ArrowDown01Icon} />
            </span>
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
