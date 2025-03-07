import Logo from "@/app/components/Logo";
import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="w-full h-full flex flex-col">
        <header className="sticky ps-4 left-0 z-10 w-full h-16 flex justify-start items-center">
          <Logo />
        </header>
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </section>
      <section className="relative w-full h-full items-center justify-center hidden md:flex bg-black">
        <div className="relative w-full h-full opacity-70">
          <Image
            src="/images/auth-bg.jpg"
            fill
            alt="Auth Background aside"
            className="object-cover object-right"
          />
        </div>
        <p className="absolute text-2xl text-white font-bold p-4 text-center">
          Organiza tu día, conquista tus metas.
        </p>
      </section>
    </main>
  );
};

export default AuthLayout;
