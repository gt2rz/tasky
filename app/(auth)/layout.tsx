import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="w-full h-full flex items-center justify-center">
        {children}
      </section>
      <section className="w-full h-full flex items-center justify-center bg-zinc-900">
        {/* Here image */}
      </section>
    </main>
  );
};

export default AuthLayout;
