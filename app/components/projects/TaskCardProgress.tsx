export default function TaskCardProgress({ progress }: { progress: number }) {
  return (
    <div className="flex items-center text-gray-800 text-xs p-1 rounded-md">
      <div className="w-24 h-2 bg-background-900 rounded-lg relative">
        <div
          className="rounded-lg bg-green-500 h-full absolute"
          style={{ width: `${progress * 100}%` }}
        ></div>
      </div>
      <span className="ml-1">{Math.round(progress * 100)}%</span>
    </div>
  );
}
