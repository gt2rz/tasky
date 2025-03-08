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
    <section className="min-w-[400px] h-fit bg-background-900 p-2">
      <header className="flex flex-1 justify-between items-center">
        <h6 className="font-bold text-foreground-normal">{pool.title}</h6>
        <button className="btn-secondary max-w-[4rem]">+</button>
      </header>

      <div id={poolId} className="mt-4">
        {pool.tasks.map((task) => (
          <TaskCard key={`task-${task.id}`} task={task} />
        ))}
      </div>

      <footer>
        <button className="btn-secondary mt-4">Add Task</button>
      </footer>
    </section>
  );
}
