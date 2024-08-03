import { v4 as uuidv4 } from "uuid";

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
  updatedAt: number; // Timestamp when the technology information was last updated
}

const technologies: Technology[] = [
  {
    id: uuidv4(),
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    url: "https://reactjs.org",
    category: "JavaScript Library",
    releaseDate: "2013-05-29",
    latestVersion: "17.0.2",
    developers: ["Facebook", "Community"],
    license: "MIT",
    platforms: ["Web"],
    features: ["Component-based", "Declarative", "Learn Once, Write Anywhere"],
    popularity: 95,
    documentation: "https://reactjs.org/docs/getting-started.html",
    updatedAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: "Vue.js",
    description: "The Progressive JavaScript Framework.",
    url: "https://vuejs.org",
    category: "JavaScript Framework",
    releaseDate: "2014-02-01",
    latestVersion: "3.2.31",
    developers: ["Evan You", "Community"],
    license: "MIT",
    platforms: ["Web"],
    features: ["Reactive", "Composable", "Progressive"],
    popularity: 85,
    documentation: "https://vuejs.org/v2/guide/",
    updatedAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: "Angular",
    description: "One framework. Mobile & desktop.",
    url: "https://angular.io",
    category: "JavaScript Framework",
    releaseDate: "2016-09-14",
    latestVersion: "12.0.0",
    developers: ["Google", "Community"],
    license: "MIT",
    platforms: ["Web", "Mobile"],
    features: ["TypeScript-based", "Two-way Data Binding", "MVC Architecture"],
    popularity: 80,
    documentation: "https://angular.io/docs",
    updatedAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    url: "https://nodejs.org",
    category: "Runtime Environment",
    releaseDate: "2009-05-27",
    latestVersion: "14.17.0",
    developers: ["OpenJS Foundation"],
    license: "MIT",
    platforms: ["Server"],
    features: ["Event-driven", "Non-blocking I/O", "Single-threaded"],
    popularity: 90,
    documentation: "https://nodejs.org/en/docs/",
    updatedAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: "Django",
    description: "The web framework for perfectionists with deadlines.",
    url: "https://www.djangoproject.com",
    category: "Web Framework",
    releaseDate: "2005-07-21",
    latestVersion: "3.2.3",
    developers: ["Django Software Foundation"],
    license: "BSD",
    platforms: ["Web"],
    features: ["MTV Architecture", "ORM", "Admin Interface"],
    popularity: 75,
    documentation: "https://docs.djangoproject.com/en/stable/",
    updatedAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: "Flutter",
    description:
      "UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    url: "https://flutter.dev",
    category: "UI Toolkit",
    releaseDate: "2017-05-17",
    latestVersion: "2.2.0",
    developers: ["Google"],
    license: "BSD",
    platforms: ["Mobile", "Web", "Desktop"],
    features: [
      "Hot Reload",
      "Expressive and Flexible UI",
      "Native Performance",
    ],
    popularity: 85,
    documentation: "https://flutter.dev/docs",
    updatedAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: "TensorFlow",
    description: "An end-to-end open-source machine learning platform.",
    url: "https://www.tensorflow.org",
    category: "Machine Learning Framework",
    releaseDate: "2015-11-09",
    latestVersion: "2.5.0",
    developers: ["Google Brain Team"],
    license: "Apache 2.0",
    platforms: ["Various"],
    features: [
      "Comprehensive ML",
      "Flexible Ecosystem",
      "Robust ML Production",
    ],
    popularity: 80,
    documentation: "https://www.tensorflow.org/learn",
    updatedAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: "Kubernetes",
    description:
      "An open-source system for automating deployment, scaling, and management of containerized applications.",
    url: "https://kubernetes.io",
    category: "Container Orchestration",
    releaseDate: "2014-06-07",
    latestVersion: "1.21.0",
    developers: ["Google", "Cloud Native Computing Foundation"],
    license: "Apache 2.0",
    platforms: ["Various"],
    features: [
      "Automated Rollouts and Rollbacks",
      "Storage Orchestration",
      "Service Discovery and Load Balancing",
    ],
    popularity: 85,
    documentation: "https://kubernetes.io/docs/home/",
    updatedAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: "Rust",
    description:
      "A language empowering everyone to build reliable and efficient software.",
    url: "https://www.rust-lang.org",
    category: "Programming Language",
    releaseDate: "2010-07-07",
    latestVersion: "1.52.1",
    developers: ["Mozilla", "Community"],
    license: "MIT OR Apache 2.0",
    platforms: ["Various"],
    features: ["Memory Safety", "Concurrency", "Zero-cost Abstractions"],
    popularity: 70,
    documentation: "https://doc.rust-lang.org/book/",
    updatedAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: "GraphQL",
    description: "A query language for your API.",
    url: "https://graphql.org",
    category: "API Query Language",
    releaseDate: "2015-07-07",
    latestVersion: "June 2018",
    developers: ["Facebook", "Community"],
    license: "Open Source",
    platforms: ["Various"],
    features: ["Strongly Typed", "Client-specified Queries", "Introspective"],
    popularity: 75,
    documentation: "https://graphql.org/learn/",
    updatedAt: new Date().getTime(),
  },
];

chrome.storage.sync.set({
  technologies: technologies,
});
