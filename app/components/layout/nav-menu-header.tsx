import Link from "next/link";
import React from "react";

const NavMenuHeader = () => {
  return (
    <nav>
      <ul className="flex gap-4 items-center text-sm ">
        <li>
          <Link href="/dashboard">Home</Link>
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
    </nav>
  );
};

export default NavMenuHeader;
