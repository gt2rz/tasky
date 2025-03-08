import { TaskCommentType } from "@/types/tasks";

export default function TaskCardComments({ comments }: { comments: TaskCommentType[] }) {
    return (
        <>
            {comments?.length > 0 && (
                <div className="flex items-center my-4 space-x-3">
                    <div className="flex items-center -space-x-2">
                        {comments.length > 0 && comments.slice(0, 3).map((comment) => (
                                <img key={`comment-${comment.id}`} src={comment.avatar} alt="avatar" className="inline-block size-8 rounded-full ring-1 ring-gray-300 bg-white" />
                        ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-1 font-semibold">
                        {comments.length} {comments.length > 1 ? 'comments' : 'comment'}
                    </span>
                </div>
            )}
        </>
    );
}