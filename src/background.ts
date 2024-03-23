import type { Task } from "../types";
import { TaskPriority } from "../types";

const defaultTasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    done: true,
    priority: TaskPriority.HIGH,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    dueDate: new Date("2024-03-25").toISOString(),
  },
  {
    id: 2,
    title: "Task 2",
    done: false,
    priority: TaskPriority.MEDIUM,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    dueDate: new Date("2024-05-01").toISOString(),
  },
];

chrome.storage.sync.set({
  tasks: defaultTasks,
});
