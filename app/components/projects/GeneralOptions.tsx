import { Comme } from "next/font/google";

export default function GeneralOptions() {
    
    const tabs = [
        "Overview",
        "Tasks",
        "Milestones",
        "Messages",
        "Files",
        "Comments",
        "People",
        "Settings",
    ];

    const activeTab = "Tasks";

    return (
        <section className="w-full h-12 text-gray-500 flex items-center mb-4 border-0 border-b-[1px] border-gray-200 justify-between">
            <ol>
                {tabs.map((tab, index) => (
                    <li key={index} className={`inline-block px-4 py-2 cursor-pointer ${tab === activeTab ? "text-black font-bold border-0 border-b-4 border-blue-700" : ""}`}>
                        {tab}
                    </li>
                ))}
            </ol>
            <div className="flex items-center space-x-4 mb-2">
                <button className="px-4 py-2 bg-gray-50 text-gray-500 rounded-md border">Full screen</button>
                <button className="px-4 py-2 bg-gray-50 text-gray-500 rounded-md border">Filters</button>
            </div>
        </section>
    );
}