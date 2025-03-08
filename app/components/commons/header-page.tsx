interface HeaderPageProps {
  title: string;
  children?: React.ReactNode;
}

export default function HeaderPage({
  title,
  children,
  ...props
}: HeaderPageProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="w-full h-24  flex items-center justify-between"
    >
      <h1 className="text-2xl font-bold">
        {title}
      </h1>
      <div className="flex items-center justify-end">
        {children}
      </div>
    </div>
  );
}
