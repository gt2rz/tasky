import {
  AddCircleIcon,
  DragDropIcon,
  Folder01Icon,
  Notification03Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const NavOptionsHeader = () => {
  return (
    <nav id="nav-options-header" className="flex items-center">
      <ul className="flex gap-4 items-center text-gray-400">
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
      </ul>
    </nav>
  );
};

export default NavOptionsHeader;
