export enum TaskPriority {
  VERY_HIGH = "VERY_HIGH",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
  VERY_LOW = "VERY_LOW",
}

export interface Task {
  id: number;
  title: string;
  done: boolean;
  description?: string;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  priority: TaskPriority;
}
