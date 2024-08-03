import TechnologyForm from "../components/technologicalForm";
import { TechnologyList } from "../components/technologicalList";
import { Technology } from "../types";

const generateDOM = (technologies: Technology[]) => {
  document.body.innerHTML = "";
  const form = document.createElement("technology-form") as TechnologyForm;
  document.body.appendChild(form);
  const list = document.createElement("technology-list") as TechnologyList;
  list.technologies = technologies.sort((a, b) => b.updatedAt - a.updatedAt);
  document.body.appendChild(list);
};

export { generateDOM };
