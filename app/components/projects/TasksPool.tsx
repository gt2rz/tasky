"use client";

import { useEffect } from "react";
import TaskCard from "./TaskCard";
import Sortable, { SortableEvent } from "sortablejs";
import { TaskPoolType } from "@/app/types/tasks";
import { saveMoveTask } from "@/app/services/tasksBoard";

interface TaskPoolProps {
  pool: TaskPoolType;
  projectId: string;
}

export default function TasksPool({ pool, projectId }: TaskPoolProps) {
  const poolId = "pool-" + pool.id;

  const handleMoveTask = async (event: SortableEvent) => {
    const { to, from } = event;
    const taskId = event.item.id.replace("task-", "");
    const poolIdFrom = from.id.replace("pool-", "");
    const poolIdTo = to.id.replace("pool-", "");

    // Save the move task
    await saveMoveTask(
      projectId,
      Number(taskId),
      Number(poolIdFrom),
      Number(poolIdTo)
    );
  };

  useEffect(() => {
    const element = document.getElementById(poolId);

    if (element) {
      Sortable.create(element, {
        group: `shared`,
        animation: 150,
        onEnd: (event: SortableEvent) => {
          handleMoveTask(event);
        },
      });
    }
  }, []);

  return (
    <section className="w-[400px] h-fit bg-slate-100 p-2">
      <header className="flex justify-between items-center">
        <h6 className="font-bold text-gray-800">{pool.title}</h6>
        <button className="px-4 py-2 bg-gray-50 text-black rounded-lg border">
          +
        </button>
      </header>

      <div id={poolId} className="mt-4">
        {pool.tasks.map((task) => (
          <TaskCard key={`task-${task.id}`} task={task} />
        ))}
      </div>

      <footer>
        <button className="w-full bg-gray-50 text-black text-sm py-2 mt-4 rounded-lg">
          Add Task
        </button>
      </footer>
    </section>
  );
}
