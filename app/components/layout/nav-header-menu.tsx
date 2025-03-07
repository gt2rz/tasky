"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { routes } from "@/app/constants/routes-header-menu";

const NavMenuHeader = () => {
  const pathname = usePathname();

  return (
    <nav id="nav-menu-header">
      <ul className="flex gap-4 items-center text-sm ">
        {routes.map((r) => (
          <li key={r.name}>
            <Link href={r.link} className={pathname === r.link ? "active" : ""}>
              {r.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenuHeader;
