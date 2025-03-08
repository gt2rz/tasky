"use client";

import { useEffect, useState } from "react";
import TasksPool from "./TasksPool";
import { TaskPoolType } from "@/app/types/tasks";
import { getTaskBoard } from "@/app/services/tasksBoard";

export default function TaskBoard({ projectId }: { projectId: string }) {
  const [pools, setPools] = useState<TaskPoolType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTaskBoard(projectId);
      return data;
    };

    fetchData().then((data) => {
      setPools(data);
    });
  }, []);

  return (
    <section className="w-full h-full flex gap-4 overflow-auto">
      {pools.length > 0 ? (
        pools.map((pool) => (
          <TasksPool
            key={`pool-${pool.id}`}
            pool={pool}
            projectId={projectId}
          />
        ))
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-800">There are no set tasks</p>
        </div>
      )}
    </section>
  );
}
