import { ListStorage } from "./background";
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

class TaskManager {
  private storage: ListStorage<Task>;
  private taskList!: HTMLDivElement;
  private taskInput!: HTMLInputElement;
  private prioritySelect!: HTMLSelectElement;

  constructor() {
    this.storage = new ListStorage<Task>("tasks");
    this.initUI();
    this.loadTasks();
  }

  private initUI(): void {
    // Crear elementos de la interfaz
    const container = document.createElement("div");
    container.className = "task-container";

    // Título
    const title = document.createElement("h2");
    title.textContent = "📋 Gestor de Tareas";
    title.className = "task-title";
    container.appendChild(title);

    // Formulario para añadir tareas
    const form = document.createElement("div");
    form.className = "task-form";

    this.taskInput = document.createElement("input");
    this.taskInput.placeholder = "✍️ Nueva tarea...";
    this.taskInput.className = "task-input";

    this.prioritySelect = document.createElement("select");
    this.prioritySelect.className = "priority-select";

    Object.keys(TaskPriority).forEach((key) => {
      const priority = TaskPriority[key as keyof typeof TaskPriority];
      const option = document.createElement("option");
      option.value = priority;
      option.textContent = priority.replace("_", " ");
      this.prioritySelect.appendChild(option);
    });

    const addButton = document.createElement("button");
    addButton.textContent = "➕ Añadir";
    addButton.className = "add-button";
    addButton.onclick = () => this.addTask();

    form.appendChild(this.taskInput);
    form.appendChild(this.prioritySelect);
    form.appendChild(addButton);
    container.appendChild(form);

    // Lista de tareas
    this.taskList = document.createElement("div");
    this.taskList.className = "task-list";

    container.appendChild(this.taskList);

    // Botón para limpiar
    const clearButton = document.createElement("button");
    clearButton.textContent = "🗑️ Limpiar Todo";
    clearButton.className = "clear-button";

    clearButton.addEventListener("mouseenter", () => {
      clearButton.style.transform = "translateY(-2px)";
      clearButton.style.boxShadow = "0 6px 20px rgba(255, 107, 107, 0.6)";
    });

    clearButton.addEventListener("mouseleave", () => {
      clearButton.style.transform = "translateY(0)";
      clearButton.style.boxShadow = "0 4px 12px rgba(255, 107, 107, 0.4)";
    });

    clearButton.onclick = () => this.clearAllTasks();
    container.appendChild(clearButton);

    document.body.appendChild(container);
  }

  private async addTask(): Promise<void> {
    const title = this.taskInput.value.trim();
    const priority = this.prioritySelect.value as TaskPriority;

    if (!title) return;

    const task: Task = {
      id: Date.now(),
      title,
      description: "",
      done: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      dueDate: new Date().toISOString(),
      priority,
    };

    await this.storage.add(task);
    this.taskInput.value = "";
    this.loadTasks();
  }

  private async loadTasks(): Promise<void> {
    const tasks = await this.storage.getAll();
    this.renderTasks(tasks);
  }

  private renderTasks(tasks: Task[]): void {
    this.taskList.innerHTML = "";

    if (tasks.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.textContent = "✨ No hay tareas. ¡Añade una nueva!";
      emptyMessage.style.cssText = `
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
        font-style: italic;
        font-size: 16px;
        padding: 40px 20px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        border: 2px dashed rgba(255, 255, 255, 0.3);
      `;
      this.taskList.appendChild(emptyMessage);
      return;
    }

    tasks.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.style.cssText = `
          padding: 16px;
          margin: 8px 0;
          border: none;
          border-radius: 12px;
          background: ${
            task.done ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.2)"
          };
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        `;

      taskElement.addEventListener("mouseenter", () => {
        taskElement.style.transform = "translateY(-2px)";
        taskElement.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";
      });

      taskElement.addEventListener("mouseleave", () => {
        taskElement.style.transform = "translateY(0)";
        taskElement.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
      });

      const taskInfo = document.createElement("div");
      taskInfo.style.cssText = "flex: 1;";

      const title = document.createElement("div");
      title.textContent = task.title;
      title.style.cssText = `
          font-weight: 600;
          font-size: 16px;
          text-decoration: ${task.done ? "line-through" : "none"};
          color: ${task.done ? "rgba(255, 255, 255, 0.7)" : "white"};
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        `;

      const priority = document.createElement("small");
      priority.textContent = `🎯 Prioridad: ${task.priority.replace("_", " ")}`;
      priority.style.cssText = `
          color: rgba(255, 255, 255, 0.8);
          display: block;
          margin-top: 6px;
          font-size: 12px;
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 8px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        `;

      taskInfo.appendChild(title);
      taskInfo.appendChild(priority);

      const actions = document.createElement("div");
      actions.className = "task-actions";

      const toggleButton = document.createElement("button");
      toggleButton.textContent = task.done ? "↩️" : "✓";
      toggleButton.className = `action-button toggle-button ${
        task.done ? "completed" : ""
      }`;
      toggleButton.onclick = () => this.toggleTask(task);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "🗑️";
      deleteButton.className = "action-button delete-button";
      deleteButton.onclick = () => this.deleteTask(task);

      actions.appendChild(toggleButton);
      actions.appendChild(deleteButton);

      taskElement.appendChild(taskInfo);
      taskElement.appendChild(actions);
      this.taskList.appendChild(taskElement);
    });
  }

  private async toggleTask(task: Task): Promise<void> {
    const updatedTask = {
      ...task,
      done: !task.done,
      updatedAt: new Date().toISOString(),
    };
    await this.storage.remove((t) => t.id === task.id);
    await this.storage.add(updatedTask);
    this.loadTasks();
  }

  private async deleteTask(task: Task): Promise<void> {
    await this.storage.remove((t) => t.id === task.id);
    this.loadTasks();
  }

  private async clearAllTasks(): Promise<void> {
    await this.storage.clear();
    this.loadTasks();
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  new TaskManager();
});
