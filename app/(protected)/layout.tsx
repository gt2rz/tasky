import React, { ReactNode } from "react";
import Logo from "@/app/components/Logo";
import NavMenuHeader from "../components/layout/nav-header-menu";
import NavOptionsHeader from "../components/layout/nav-header-options";
import Footer from "../components/layout/footer";
import MenuUser from "../components/layout/menu-user";
import { auth } from "@/auth";

const ProtectedLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="fixed top-0 bg-background-900 w-full p-4">
        <div className="gap-12 items-center hidden sm:flex sm:flex-1">
          <Logo />
          <div className="flex flex-1 justify-between items-center">
            <NavMenuHeader />
            <NavOptionsHeader />
          </div>
          <MenuUser user={session?.user} />
        </div>
      </header>
      <div className="flex flex-1 flex-col sm:flex-row">
        <main className="flex-1 bg-black">{children}</main>
        {/* <nav className="order-first sm:w-32 bg-background-800">Sidebar</nav> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProtectedLayout;
