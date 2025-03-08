export type TaskTagType = {
    id: number;
    title: string;
    color: string;
    borderColor?: string;
    textColor?: string;
}

export type TaskCommentType = {
    id: number;
    author: string;
    avatar: string;
    content: string;
}

export type TaskEstimationsType = {
    days?: number;
    hours?: number;
    minutes?: number;
}

export type TaskType = {
    id: number;
    title: string;
    description: string;
    tags: TaskTagType[];
    comments: TaskCommentType[];
    progress: number;
    estimations: TaskEstimationsType;
}

export type TaskPoolType = {
    id: number;
    title: string;
    projectId: string;
    sort: number;
    tasks: TaskType[];
}