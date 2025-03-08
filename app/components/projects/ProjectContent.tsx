import GeneralOptions from "./GeneralOptions";
import TaskBoard from "./TaskBoard";

export default function ProjectContent({projectId}: {projectId: string}) {
    return (
        <section className="w-full h-full flex flex-col">
            <GeneralOptions />
            <TaskBoard projectId={projectId}/>
        </section>
    );
}