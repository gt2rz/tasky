import React, { ReactNode } from "react";
import Logo from "@/app/components/commons/logo";
import NavMenuHeader from "../components/layout/nav-header-menu";
import NavOptionsHeader from "../components/layout/nav-header-options";
import Footer from "../components/layout/footer";
import MenuUser from "../components/layout/menu-user";
import { auth } from "@/auth";

const ProtectedLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="fixed top-0 bg-background-900 w-full p-4 z-50">
        <div className="gap-12 items-center hidden sm:flex sm:flex-1">
          <Logo />
          <div className="flex flex-1 justify-between items-center">
            <NavMenuHeader />
            <NavOptionsHeader />
          </div>

          <MenuUser user={session?.user} />
        </div>
      </header>
      <div className="flex flex-1 sm:flex-row w-full min-h-screen pt-18">
        <main className="flex flex-1 bg-black px-12">{children}</main>
        {/* <nav className="order-first sm:w-32 bg-background-800">Sidebar</nav> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProtectedLayout;
