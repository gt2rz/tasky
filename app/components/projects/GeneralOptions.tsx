"use client";

import { projectTabs } from "@/app/constants/project-tabs";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function GeneralOptions() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeTab = searchParams.get("tab");

  const updateTab = useCallback(
    (tab: string) => {
      router.push(`${pathname}?tab=${tab}`);
    },
    [pathname]
  );

  return (
    <section className="w-full h-12 text-gray-500 flex items-center mb-4 border-0 border-b-[1px] border-gray-200 justify-between">
      <ol>
        {projectTabs.map((tab, index) => (
          <li
            key={index}
            className={`inline-block px-4 py-2 cursor-pointer ${tab.tab === activeTab ? "text-white font-bold border-0 border-b-4 border-primary" : ""}`}
            onClick={() => updateTab(tab.tab)}
          >
            {tab.name}
          </li>
        ))}
      </ol>
      {/* <div className="flex items-center space-x-4 mb-2">
        <button className="btn-secondary">Filters</button>
      </div> */}
    </section>
  );
}
