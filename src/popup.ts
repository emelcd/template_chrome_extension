import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
interface Technology {
  id: string; // Unique identifier for the technology
  name: string; // Name of the technology
  description: string; // Brief description of the technology
  url: string; // URL for more information or official site
  category: string; // Category or type of technology (e.g., programming language, framework, tool)
  releaseDate: string; // The release date of the technology
  latestVersion: string; // The latest version number of the technology
  developers: string[]; // List of key developers or organizations behind the technology
  license: string; // License type (e.g., MIT, Apache 2.0)
  platforms: string[]; // Platforms or environments where the technology can be used (e.g., Web, iOS, Android)
  features: string[]; // Key features or capabilities of the technology
  popularity: number; // Popularity score or ranking (could be a number or an enum)
  documentation: string; // URL to the official documentation
}

@customElement("technology-card")
export class TechnologyCard extends LitElement {
  @property({ type: Object }) technology!: Technology;

  static styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 16px;
      padding: 16px;
      max-width: 400px;
      box-shadow: 0 22px 22px rgba(0, 0, 0, 0.1);
    }

    h2 {
      margin-top: 0;
    }

    a {
      color: #0077cc;
    }

    ul {
      padding-left: 20px;
    }

    li {
      margin-bottom: 4px;
    }
  `;

  removeTechnology() {
    chrome.storage.sync.get("technologies", (data) => {
      const technologies: Technology[] = data.technologies || [];
      const index = technologies.findIndex(
        (tech) => tech.id === this.technology.id
      );
      technologies.splice(index, 1);
      chrome.storage.sync.set({ technologies });
    });
      
      this.remove 

      generateDOM()
  }

    

  render() {
    return html`
      <h2>${this.technology.name}</h2>
      <p>${this.technology.description}</p>
      <ul>
        <li>
          <strong>Category:</strong> ${this.technology.category}
        </li>
        <li>
          <strong>Release Date:</strong> ${this.technology.releaseDate}
        </li>
        <li>
          <strong>Latest Version:</strong> ${this.technology.latestVersion}
        </li>
        <li>
          <strong>Developers:</strong> ${this.technology.developers.join(", ")}
        </li>
        <li>
          <strong>License:</strong> ${this.technology.license}
        </li>
        <li>
          <strong>Platforms:</strong> ${this.technology.platforms.join(", ")}
        </li>
        <li>
          <strong>Features:</strong> ${this.technology.features.join(", ")}
        </li>
        <li>
          <strong>Popularity:</strong> ${this.technology.popularity}
        </li>
        <li>
          <strong>Documentation:</strong>
          <a href=${this.technology.documentation} target="_blank"
            >${this.technology.documentation}</a
          >
        </li>
      </ul>
      <button @click=${this.removeTechnology}>Remove</button>
    `;
  }
}

@customElement("technology-form")
export class TechnologyForm extends LitElement {
  @property({ type: String }) name = "";
  @property({ type: String }) description = "";
  @property({ type: String }) url = "";
  @property({ type: String }) category = "";
  @property({ type: String }) releaseDate = "";
  @property({ type: String }) latestVersion = "";
  @property({ type: String }) developers = "";
  @property({ type: String }) license = "";
  @property({ type: String }) platforms = "";
  @property({ type: String }) features = "";
  @property({ type: Number }) popularity = 0;
  @property({ type: String }) documentation = "";

  @property({ type: Boolean }) isOpen = false;

  @property({ type: String }) cssHost = ``;

  static styles = css`
    :host {
      display: block;
      margin: 16px;
    }

    .form-container {
      background-color: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: -22px 22px 44px rgba(0, 0, 0, 0.1);
      border: 1px solid #ccc;
    }

    .input-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .input-item {
      display: flex;
      flex-direction: column;
    }

    .actions {
      display: flex;
      justify-content: right;
      gap: 8px;
    }

    label {
      display: block;
      margin-top: 8px;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
      margin-bottom: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    button {
      padding: 8px 16px;
      background-color: #0077cc;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .cancel-button {
      background-color: #e0e0e0;
      color: #333;
    }

    button:hover {
      background-color: #005fa3;
    }
  `;

  handleSubmit(event: Event) {
    console.log(event)
    event.preventDefault();
    const technology: Technology = {
      id: Math.random().toString(36).substr(2, 9),
      name: this.name,
      description: this.description,
      url: this.url,
      category: this.category,
      releaseDate: this.releaseDate,
      latestVersion: this.latestVersion,
      developers: this.developers.split(","),
      license: this.license,
      platforms: this.platforms.split(","),
      features: this.features.split(","),
      popularity: this.popularity,
      documentation: this.documentation,
    };

    chrome.storage.sync.get("technologies", (data) => {
      const technologies: Technology[] = data.technologies || [];
      technologies.push(technology);
      chrome.storage.sync.set({ technologies });
    });

    this.isOpen = false;

    generateDOM()
  }

  render() {
    return this.isOpen
      ? html`
      <div class="form-container">
      <h2>Add Technology</h2>
      <form @submit=${this.handleSubmit} >
      <div class="input-container">
      <div class="input-item">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          .value=${this.name}
          @input=${(e: InputEvent) =>
            (this.name = (e.target as HTMLInputElement).value)}
        />
      
        </div>
        <div class="input-item">

        <label for="description">Description</label>
        <textarea
          id="description"
          .value=${this.description}
          @input=${(e: InputEvent) =>
            (this.description = (e.target as HTMLTextAreaElement).value)}
        ></textarea>
        </div>
        <div class="input-item">
        <label for="url">URL</label>
        <input
          id="url"
          type="text"
          .value=${this.url}
          @input=${(e: InputEvent) =>
            (this.url = (e.target as HTMLInputElement).value)}
        />
        </div>
        <div class="input-item">

        <label for="category">Category</label>
        <input
          id="category"
          type="text"
          .value=${this.category}
          @input=${(e: InputEvent) =>
            (this.category = (e.target as HTMLInputElement).value)}
        />
        
        </div>

        <div class="input-item">
        <label for="releaseDate">Release Date</label>
        <input
          id="releaseDate"
          type="text"
          .value=${this.releaseDate}
          @input=${(e: InputEvent) =>
            (this.releaseDate = (e.target as HTMLInputElement).value)}
        />
        </div>
        <div class="input-item">

        <label for="latestVersion">Latest Version</label>
        <input
          id="latestVersion"
          type="text"
          .value=${this.latestVersion}
          @input=${(e: InputEvent) =>
            (this.latestVersion = (e.target as HTMLInputElement).value)}
        />
        </div>
        <div class="input-item">

        <label for="developers">Developers</label>
        <input
          id="developers"
          type="text"
          .value=${this.developers}
          @input=${(e: InputEvent) =>
            (this.developers = (e.target as HTMLInputElement).value)}
        />

        </div>
        <div class="input-item">

        <label for="license">License</label>
        <input
          id="license"
          type="text"
          .value=${this.license}
          @input=${(e: InputEvent) =>
            (this.license = (e.target as HTMLInputElement).value)}
        />

        </div>
        
        <div class="input-item">
        <label for="platforms">Platforms</label>
        <input
          id="platforms"
          type="text"
          .value=${this.platforms}
          @input=${(e: InputEvent) =>
            (this.platforms = (e.target as HTMLInputElement).value)}
        />

        </div>


        <div class="input-item">
        <label for="features">Features</label>

        <input
          id="features"
          type="text"
          .value=${this.features}
          @input=${(e: InputEvent) =>
            (this.features = (e.target as HTMLInputElement).value)}
        />

        </div>
        <div class="input-item">

        <label for="popularity">Popularity</label>
        <input
          id="popularity"
          type="number"
          .value=${this.popularity as unknown as string}
          @input=${(e: InputEvent) =>
            (this.popularity = Number((e.target as HTMLInputElement).value))}

        />
        </div>
            
        <div class="input-item">

        <label for="documentation">Documentation</label>

        <input
          id="documentation"
          type="text"
          .value=${this.documentation}
          @input=${(e: InputEvent) =>
            (this.documentation = (e.target as HTMLInputElement).value)}
        />

        </div>

      </div>
      <div class="actions">

        <button
            class="submit-button"
        type="submit">Add Technology</button>

        <button 
        type="button"
        class="cancel-button"
        @click=${() => (this.isOpen = false)}>Cancel</button>

      </div>

      </form>
    </div>
    `
      : html`
          <button @click=${() => (this.isOpen = true)}>Add Technology</button>
        `;
  }
}

@customElement("technology-list")
export class TechnologyList extends LitElement {
  @property({ type: Array }) technologies: Technology[] = [];

  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
      padding: 16px;
    }
  `;

  render() {
    return html`
      ${this.technologies.map(
        (technology) => html`
          <technology-card .technology=${technology}></technology-card>
        `
      )}
    `;
  }
}

const generateDOM = () => {
  document.body.innerHTML = "";
  const form = document.createElement("technology-form") as TechnologyForm;
  document.body.appendChild(form);
  chrome.storage.sync.get("technologies", (data) => {
    const technologies: Technology[] = data.technologies || [];
    const list = document.createElement("technology-list") as TechnologyList;
    list.technologies = technologies;
    document.body.appendChild(list);
  }
  );
};

chrome.storage.sync.get("technologies", (data) => {
  const technologies: Technology[] = data.technologies || [];
  generateDOM(  );
});

// setTimeout(() => location.reload(), 5000);
