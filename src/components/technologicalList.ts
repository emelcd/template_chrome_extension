import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { Technology } from "../types";
import TechnologyCard from "./technologicalCard";

export class TechnologyList extends LitElement {
  @property({ type: Array }) technologies: Technology[] = [];

  constructor(technologies: Technology[]) {
    super();
    this.technologies = technologies;
    this.addEventListener("toggle", this.__handleToggle as EventListener);
  }

  @property({ type: Boolean }) isOpen = false;

  @property({ type: Object }) selectedTechnology: Technology = {} as Technology;

  @property({ type: Array }) restTechnologies: Technology[] = [] as Technology[];

  __handleToggle(event: CustomEvent) {
    this.isOpen = event.detail.isOpen;
    this.selectedTechnology = event.detail.technology;
    this.restTechnologies = this.technologies.filter(t => t.id !== this.selectedTechnology.id);
    this.style.gridTemplateColumns = this.isOpen ? "1fr 1fr" : "repeat(auto-fill, minmax(300px, 1fr)";
    this.style.justifyContent = this.isOpen ? "center" : "start";
    this.style.alignItems = this.isOpen ? "center" : "start";
    }



  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
      padding: 16px;
    }

    .container {
        justify-content: center;
        align-items: center;
    }

    .selected {
            justify-content: center;
        align-items: center;
    }



    .rest {
        display:flex;
    }

 
  `;

  render() {
    return !this.isOpen
      ? html`
          ${this.technologies.map(
            (technology) => html`
              <technology-card
                id=${technology.id}
                .technology=${technology}
              ></technology-card>
            `
          )}
        `
      : html`
          <div class="container">
            <div class="selected">
              <technology-card
                id=${this.selectedTechnology.id}
                .technology=${this.selectedTechnology}
                .isOpen=${true}
                style="column-span: all;"
              ></technology-card>
            </div>
            <div id="rest" class="rest">
              ${this.restTechnologies.map(
                (technology) => html`
                  <technology-card
                    id=${technology.id}
                    .technology=${technology}
                    .isOpen=${false}
                  ></technology-card>
                `
                )}
            </div>
            </div>
        `;
    }
}
