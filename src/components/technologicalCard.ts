import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Technology } from "../types";
import { generateDOM } from "../utils";
import { styleMap } from "lit/directives/style-map.js";

const eventOptions = { bubbles: true, composed: true };

export class TechnologyCard extends LitElement {
  @property({ type: Object }) technology!: Technology;

  @property({ type: Boolean }) isOpen = false;

  @property({ type: Object })
  styles = {
    height: !this.isOpen ? "fit-content" : "100px",
    overflow: !this.isOpen ? "visible" : "hidden",
  };

  private __dispatchToggleEvent() {
    this.isOpen = !this.isOpen;

    this.dispatchEvent(
      new CustomEvent("toggle", {
        detail: {
          technology: this.technology,
          isOpen: this.isOpen,
        },
        ...eventOptions,
      }),
    );
  }

  constructor(technology: Technology) {
    super();
    this.technology = technology;
    this.addEventListener("click", this.__dispatchToggleEvent);
  }

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
      const updatedTechnologies = technologies.filter(
        (tech) => tech.id !== this.technology.id,
      );
      chrome.storage.sync.set({ technologies: updatedTechnologies });
      generateDOM(updatedTechnologies);

      chrome.storage.sync.get("technologies", (data) => {
        const technologies: Technology[] = data.technologies || [];
        generateDOM(technologies);
      });
    });
  }

  render() {
    return this.isOpen
      ? html`<div style=${styleMap(this.styles)}>
          <h2>${this.technology.name}</h2>
          <p>${this.technology.description}</p>
          <ul>
            <li><strong>Category:</strong> ${this.technology.category}</li>
            <li>
              <strong>Release Date:</strong> ${this.technology.releaseDate}
            </li>
            <li>
              <strong>Latest Version:</strong> ${this.technology.latestVersion}
            </li>
            <li>
              <strong>Developers:</strong>
              <ul>
                ${this.technology.developers.map(
                  (developer) => html`<li>${developer}</li>`,
                )}
              </ul>
            </li>
            <li><strong>License:</strong> ${this.technology.license}</li>
            <li>
              <strong>Platforms:</strong>
              <ul>
                ${this.technology.platforms.map(
                  (platform) => html`<li>${platform}</li>`,
                )}
              </ul>
            </li>
            <li>
              <strong>Features:</strong>
              <ul>
                ${this.technology.features.map(
                  (feature) => html`<li>${feature}</li>`,
                )}
              </ul>
            </li>
            <li><strong>Popularity:</strong> ${this.technology.popularity}</li>
            <li>
              <strong>Documentation:</strong>
              <a href=${this.technology.documentation} target="_blank"
                >${this.technology.documentation}</a
              >
            </li>
          </ul>
          <button @click=${this.removeTechnology}>Remove</button>
        </div>`
      : html`<div>
          <h2>${this.technology.name}</h2>
        </div> `;
  }
}

export default TechnologyCard;
