import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Technology } from "./types";
import { generateDOM } from "./utils";
import TechnologyCard from "./components/technologicalCard";
import { TechnologyForm } from "./components/technologicalForm";
import { TechnologyList } from "./components/technologicalList";
// Remove the import statement for TechnologyCard

chrome.storage.sync.get("technologies", (data) => {
  customElements.define("technology-card", TechnologyCard);
  customElements.define("technology-form", TechnologyForm);
  customElements.define("technology-list", TechnologyList);
  const technologies: Technology[] = data.technologies || [];
  generateDOM(technologies);
});

setTimeout(() => location.reload(), 15000);
