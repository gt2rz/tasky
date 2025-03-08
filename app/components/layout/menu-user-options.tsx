"use client";
import React, { useState } from "react";
import { MenuUserProps } from "./menu-user";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { logout } from "@/app/actions/auth";

const MenuUserOptions = ({ user }: { user: MenuUserProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  };

  return (
    <div className="hs-dropdown inline-flex relative">
      <span
        className="text-gray-400 hover:text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {user.name && !isOpen ? (
          <HugeiconsIcon icon={ArrowDown01Icon} />
        ) : (
          <HugeiconsIcon icon={ArrowUp01Icon} />
        )}
      </span>

      {isOpen && (
        <div className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-lg dark:bg-neutral-800">
          <div className="p-1 space-y-0.5">
            <button
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              onClick={() => handleLogout()}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuUserOptions;
