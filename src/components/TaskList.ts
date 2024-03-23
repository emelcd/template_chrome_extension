import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Task } from "../../types";

@customElement("task-list")
export default class TaskList extends LitElement {
  @property({ type: Array }) tasks: Task[] = [];

  @state()
  private _urgency: string = "";

  private calculateUrgency(task: Task): void {
    const today = new Date();
    const diff = new Date(task.dueDate).getTime() - today.getTime();
    const diffInDays = diff / (1000 * 3600 * 24);
    if (diffInDays <= 2) {
      this._urgency = "HIGH";
    } else if (diffInDays <= 5) {
      this._urgency = "MEDIUM";
    } else {
      this._urgency = "LOW";
    }
  }

  private humanReadableDate(date: string): string {
    return new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(date));
  }

  connectedCallback(): void {
    super.connectedCallback();
    chrome.storage.sync.get("tasks", (data) => {
      this.tasks = data.tasks;
    });
  }

  generateListItem(task: Task) {
    this.calculateUrgency(task);
    return html`
      <li>
        <div class="task">
          <div
            class="task-title
            ${task.done ? "task-done" : "task-not-done"}"
          >
            ${task.title} - ${this.humanReadableDate(task.dueDate)}
          </div>
          <div class="task-urgency">${this._urgency}</div>
        </div>
      </li>
    `;
  }

  static styles = css`
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
    .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .task-title {
      margin-right: 10px;
    }
    .task-done {
      color: green;
    }

    .task-not-done {
      color: red;
    }
  `;

  render() {
    return html`
      <ul>
        ${this.tasks.map((task) => this.generateListItem(task))}
      </ul>
    `;
  }
}
