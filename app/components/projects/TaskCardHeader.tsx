interface TaskCardHeaderProps {
  title: string;
}

export default function TaskCardHeader({ title }: TaskCardHeaderProps) {
  return (
    <header className="flex justify-between items-center mb-4">
      <span className="flex items-center space-x-2">
        <input type="checkbox" name="" id="" className="w-4 h-4" />
        <h6 className="font-bold text-foreground-normal cursor-pointer">
          {title}
        </h6>
      </span>
      <button className="px-2 py-1 bg-transparent text-foreground-normal text-xs rounded-lg border font-extrabold max-w-[3rem] hover:bg-background-700">
        ...
      </button>
    </header>
  );
}
