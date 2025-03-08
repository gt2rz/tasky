"use client";
import { useSearchParams } from "next/navigation";
import GeneralOptions from "./GeneralOptions";
import TaskBoard from "./TaskBoard";

export default function ProjectContent({ projectId }: { projectId: string }) {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");

  return (
    <section className="w-full h-full flex flex-col">
      <GeneralOptions />

      {(activeTab === "overview" || !activeTab) && <div>Overview</div>}
      {activeTab === "tasks" && <TaskBoard projectId={projectId} />}
      {activeTab === "milestones" && <div>Milestones</div>}
      {activeTab === "messages" && <div>Messages</div>}
      {activeTab === "files" && <div>Files</div>}
      {activeTab === "comments" && <div>Comments</div>}
      {activeTab === "people" && <div>People</div>}
      {activeTab === "settings" && <div>Settings</div>}
    </section>
  );
}
