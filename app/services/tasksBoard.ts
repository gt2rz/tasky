import { taskBoardMock } from "@/app/mocks/taskBoard";

/**
 * Retrieves the task board for a given project.
 * 
 * This function fetches the tasks from the local storage. If no tasks are found,
 * it loads test tasks into the local storage.
 * 
 * @param {number} projectId - The ID of the project for which the task board is being retrieved.
 * @returns {Promise<any[]>} A promise that resolves to an array of tasks.
 */
export const getTaskBoard = async (projectId: string) => {
    console.log('Get task board', projectId);
    
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    // console.log('Tasks', tasks);
    
    if(!tasks || tasks.length === 0) {
        console.log('Test tasks have been loaded');
        localStorage.setItem('tasks', JSON.stringify(taskBoardMock));
    }

    const tasksByProject = tasks.filter((pool: Pool) => {
        // console.log('Pool', pool);
        // console.log('Project ID', projectId);
        
        
        return pool.projectId == projectId
    });

    return tasksByProject;
}



export const saveMoveTask = async (projectId: string, taskId: number, poolIdFrom: number, poolIdTo: number) => {
    console.log('Move task', taskId, poolIdFrom, poolIdTo);
    const data = JSON.parse(localStorage.getItem('tasks') || '[]');

    const tasksByProject = data.find((pool: Pool) => pool.projectId == projectId);
    
    if(!tasksByProject.tasks) {
        return;
    }

    // Get the task to move
    const task = tasksByProject.tasks.find((task: Task) => task.id === taskId);
    

    // Remove the task from the source pool
    const tasks = tasksByProject.tasks.filter((task: Task) => task.id !== taskId);

    // const poolTo = data.find((pool: Pool) => pool.id === poolIdTo);
    // poolTo.tasks.push(task);

    // console.log('Tasks', tasks);
    

    // Update the tasks




    
    // // const task = taskByProject.tasks.find((task: Task) => task.id === taskId);

    // tasksByProject.tasks = tasksByProject.tasks.map((task: Task) => {
    //     console.log('Task', task);
    //     return task;
    // });


    
    // const task = tasks.find((task: any) => task.id === taskId);
    // console.log('Task', task);
    
}