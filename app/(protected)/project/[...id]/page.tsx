import HeaderPage from "@/app/components/commons/header-page";
import ProjectContent from "@/app/components/projects/ProjectContent";

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="w-full h-screen flex flex-col relative">
      <HeaderPage
        title="Tasks Board"
        id="projects--header-page"
        className="w-full h-24 flex items-center justify-between"
      >
        <button className="btn btn-primary">Show Backlog</button>
      </HeaderPage>
      <ProjectContent projectId={id} />
    </div>
  );
};

export default ProjectPage;
