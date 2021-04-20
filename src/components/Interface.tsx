export interface TaskInterface {
    id?: string
    title?: string
    state?: string
    updatedAt?: Date
}

export interface TasksProps {
    task: TaskInterface
  
}