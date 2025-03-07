import React, { ReactNode } from "react";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="fixed top-0 h-16 bg-black w-full">Header</header>
      <div className="flex flex-1 flex-col sm:flex-row">
        <main className="flex-1 bg-indigo-100">{children}</main>
        <nav className="order-first sm:w-32 bg-purple-200">Sidebar</nav>
      </div>
      <footer className="w-full h-8 fixed bottom-0 bg-gray-100">Footer</footer>
    </div>
  );
};

export default PrivateLayout;
