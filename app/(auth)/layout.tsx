import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="w-full h-full flex items-center justify-center">
        {children}
      </section>
      <section className="w-full h-full items-center justify-center hidden md:flex bg-black">
        <div className="relative w-full h-full opacity-70">
          <Image
            src="/images/auth-bg.jpg"
            fill
            alt="Auth Background aside"
            className="object-cover object-right"
          />
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
