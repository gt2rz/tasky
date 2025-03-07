import { AddCircleIcon, DragDropIcon, Folder01Icon, Notification03Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const NavOptionsHeader = () => {
  return (
    <nav>
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
  );
};

export default NavOptionsHeader;
