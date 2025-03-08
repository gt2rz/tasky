import TaskCardComments from "./TaskCardComments";
import TaskCardEstimations from "./TaskCardEstimations";
import TaskCardHeader from "./TaskCardHeader";
import TaskCardProgress from "./TaskCardProgress";
import TaskCardTags from "./TaskCardTags";
import { TaskType } from "@/types/tasks";

export default function TaskCard({ task }: { task: TaskType }) {
    return (
        <div id={`task-${task.id}`} className="bg-white p-4 rounded-lg mt-2">
            <TaskCardHeader title={task.title} />

            <p className="text-gray-500">
                {task.description.length > 200 ? `${task.description.slice(0, 200)}...` : task.description}
            </p>

            <TaskCardTags tags={task.tags} />

            <TaskCardComments comments={task.comments} />

            <div className="flex justify-between items-center mt-2">
                <TaskCardProgress progress={task.progress} />
                <TaskCardEstimations estimations={task.estimations} />
            </div>
        </div>
    );
}