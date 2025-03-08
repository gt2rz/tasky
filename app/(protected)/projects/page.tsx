import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h6>Lista de Projects</h6>
      <Link href="/project/1">Project 1</Link>
    </div>
  );
};

export default ProjectsPage;
