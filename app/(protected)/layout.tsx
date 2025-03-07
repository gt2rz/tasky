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

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="fixed top-0 bg-black w-full p-4">
        <div className="flex flex-1 gap-4 items-center">
          <Logo />
          <nav className="flex flex-1 justify-between">
            <ul className="flex gap-4">
              <li>Start</li>
              <li>Projects</li>
              <li>Planning</li>
              <li>Calendar</li>
              <li>Team</li>
            </ul>
            <ul className="flex gap-4">
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
              <li>Logout</li>
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
