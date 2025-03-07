import Logo from "@/components/Logo";
import React, { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AddCircleIcon,
  DragDropIcon,
  Folder01Icon,
  Notification03Icon,
  OptionIcon,
  Search01Icon,
  Setting06Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="fixed top-0 bg-black w-full p-4">
        <div className="flex flex-1 gap-4 items-center">
          <Logo />
          <nav className="flex flex-1 justify-between">
            <ul className="flex gap-4 items-center">
              <li>
                <Link href="/dashboard">Start</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/planning">Planning</Link>
              </li>
              <li>
                <Link href="/calendar">Calendar</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
            </ul>
            <ul className="flex gap-4 items-center">
              <li>
                <HugeiconsIcon icon={Search01Icon} />
              </li>
              <li>
                <HugeiconsIcon icon={DragDropIcon} />
              </li>
              <li>
                <HugeiconsIcon icon={AddCircleIcon} />
              </li>
              <li>
                <HugeiconsIcon icon={Folder01Icon} />
              </li>
              <li>
                <HugeiconsIcon icon={Notification03Icon} />
              </li>
              <li className="relative flex items-center">
                <img
                  className="rounded-full ring ring-white w-8 h-8"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-1 flex-col sm:flex-row">
        <main className="flex-1 bg-background-900">{children}</main>
        <nav className="order-first sm:w-32 bg-background-800">Sidebar</nav>
      </div>
      <footer className="w-full h-8 fixed bottom-0 bg-background-700">
        Footer
      </footer>
    </div>
  );
};

export default PrivateLayout;
