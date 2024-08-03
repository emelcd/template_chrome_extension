import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Technology } from "../types";
import { generateDOM } from "../utils";
import { v4 as uuidv4 } from "uuid";

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

  @property({ type: Boolean }) isValid = true;

  static styles = css`
    :host {
      display: block;
      margin: 16px;
      font-family: Arial, sans-serif;
      width: 100%;
    }

    .form-container {
      /* center it at the middle of the screen */
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 16px;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 22px 22px rgba(0, 0, 0, 0.1);
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

  private __validateForm() {
    this.isValid = Boolean(
      this.name &&
        this.description &&
        this.url &&
        this.category &&
        this.releaseDate &&
        this.latestVersion &&
        this.developers &&
        this.license &&
        this.platforms &&
        this.features &&
        this.popularity &&
        this.documentation,
    );
    return this.isValid;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    if (!this.__validateForm()) {
      return;
    }
    console.log(event);
    const technology: Technology = {
      id: uuidv4(),
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
      updatedAt: new Date().getTime(),
    };

    chrome.storage.sync.get("technologies", (data) => {
      const technologies: Technology[] = data.technologies || [];
      technologies.push(technology);
      chrome.storage.sync.set({ technologies });
      generateDOM(technologies);
    });

    // this.isOpen = false;
  }

  render() {
    return this.isOpen
      ? html`
          <div class="form-container">
            <h2>Add Technology</h2>
            ${!this.isValid
              ? html`<p style="color: red;">Please fill in all the fields</p>`
              : ""}
            <form @submit=${this.handleSubmit}>
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
                      (this.description = (
                        e.target as HTMLTextAreaElement
                      ).value)}
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
                    type="date"
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
                      (this.latestVersion = (
                        e.target as HTMLInputElement
                      ).value)}
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
                      (this.popularity = Number(
                        (e.target as HTMLInputElement).value,
                      ))}
                  />
                </div>

                <div class="input-item">
                  <label for="documentation">Documentation</label>

                  <input
                    id="documentation"
                    type="text"
                    .value=${this.documentation}
                    @input=${(e: InputEvent) =>
                      (this.documentation = (
                        e.target as HTMLInputElement
                      ).value)}
                  />
                </div>
              </div>
              <div class="actions">
                <button class="submit-button" @click=${this.handleSubmit}>
                  Add Technology
                </button>

                <button
                  type="button"
                  class="cancel-button"
                  @click=${() => (this.isOpen = false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        `
      : html`
          <button
            @click=${() => (this.isOpen = true)}
            style="position: relative; top: 0%; left: 0%; transform: translate(0%, 0%);"
          >
            Add Technology
          </button>
        `;
  }
}

export default TechnologyForm;
