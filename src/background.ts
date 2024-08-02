import { v4 as uuidv4 } from "uuid";

interface Technology {
  id: string;           // Unique identifier for the technology
  name: string;         // Name of the technology
  description: string;  // Brief description of the technology
  url: string;          // URL for more information or official site
  category: string;     // Category or type of technology (e.g., programming language, framework, tool)
  releaseDate: string;  // The release date of the technology
  latestVersion: string;// The latest version number of the technology
  developers: string[]; // List of key developers or organizations behind the technology
  license: string;      // License type (e.g., MIT, Apache 2.0)
  platforms: string[];  // Platforms or environments where the technology can be used (e.g., Web, iOS, Android)
  features: string[];   // Key features or capabilities of the technology
  popularity: number;  // Popularity score or ranking (could be a number or an enum)
  documentation: string; // URL to the official documentation
}


const technologies: Technology[] = [
  {
    id: uuidv4(),
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    url: "https://reactjs.org/",
    category: "Library",
    releaseDate: "2013-05-29",
    latestVersion: "18.2.0",
    developers: ["Facebook", "Open Source Community"],
    license: "MIT",
    platforms: ["Web"],
    features: ["Component-based", "Virtual DOM", "Declarative"],
    popularity: 95,
    documentation: "https://reactjs.org/docs/getting-started.html",
  },
  {
    id: uuidv4(),
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    url: "https://nodejs.org/",
    category: "Runtime Environment",
    releaseDate: "2009-05-27",
    latestVersion: "20.6.0",
    developers: ["Node.js Foundation"],
    license: "MIT",
    platforms: ["Server", "Web"],
    features: ["Asynchronous", "Event-driven", "Non-blocking I/O"],
    popularity: 90,
    documentation: "https://nodejs.org/en/docs/",
  },
  {
    id: uuidv4(),
    name: "Docker",
    description:
      "An open platform for developing, shipping, and running applications in containers.",
    url: "https://www.docker.com/",
    category: "Containerization",
    releaseDate: "2013-03-20",
    latestVersion: "24.0.2",
    developers: ["Docker, Inc."],
    license: "Apache 2.0",
    platforms: ["Server", "Cloud"],
    features: ["Containerization", "Isolation", "Portability"],
    popularity: 85,
    documentation: "https://docs.docker.com/",
  },
  {
    id: uuidv4(),
    name: "TensorFlow",
    description: "An end-to-end open source platform for machine learning.",
    url: "https://www.tensorflow.org/",
    category: "Machine Learning Framework",
    releaseDate: "2015-11-09",
    latestVersion: "2.14.0",
    developers: ["Google", "Open Source Community"],
    license: "Apache 2.0",
    platforms: ["Web", "Server", "Cloud"],
    features: ["Deep Learning", "Model Deployment", "Tensor Operations"],
    popularity: 80,
    documentation: "https://www.tensorflow.org/guide",
  },
  {
    id: uuidv4(),
    name: "Kubernetes",
    description:
      "An open-source system for automating the deployment, scaling, and management of containerized applications.",
    url: "https://kubernetes.io/",
    category: "Container Orchestration",
    releaseDate: "2014-07-21",
    latestVersion: "1.26.0",
    developers: ["Kubernetes Community"],
    license: "Apache 2.0",
    platforms: ["Server", "Cloud"],
    features: ["Automatic Scaling", "Service Discovery", "Load Balancing"],
    popularity: 88,
    documentation: "https://kubernetes.io/docs/",
  },
  {
    id: uuidv4(),
    name: "Vue.js",
    description:
      "A progressive JavaScript framework for building user interfaces.",
    url: "https://vuejs.org/",
    category: "Framework",
    releaseDate: "2014-02-01",
    latestVersion: "3.2.37",
    developers: ["Evan You", "Vue.js Community"],
    license: "MIT",
    platforms: ["Web"],
    features: ["Reactive Data Binding", "Component-based", "Vue Router"],
    popularity: 82,
    documentation: "https://vuejs.org/v2/guide/",
  },
  {
    id: uuidv4(),
    name: "PostgreSQL",
    description:
      "An open-source relational database management system emphasizing extensibility and SQL compliance.",
    url: "https://www.postgresql.org/",
    category: "Database",
    releaseDate: "1989-07-08",
    latestVersion: "15.2",
    developers: ["PostgreSQL Global Development Group"],
    license: "PostgreSQL License",
    platforms: ["Server", "Cloud"],
    features: ["ACID Compliance", "Extensible", "Advanced Data Types"],
    popularity: 77,
    documentation: "https://www.postgresql.org/docs/",
  },
  {
    id: uuidv4(),
    name: "GraphQL",
    description:
      "A query language for your API and a server-side runtime for executing those queries.",
    url: "https://graphql.org/",
    category: "API Query Language",
    releaseDate: "2015-07-21",
    latestVersion: "2024-01",
    developers: ["Facebook"],
    license: "MIT",
    platforms: ["Web", "Server"],
    features: [
      "Strongly Typed",
      "Efficient Data Fetching",
      "Real-time Updates",
    ],
    popularity: 80,
    documentation: "https://graphql.org/learn/",
  },
  {
    id: uuidv4(),
    name: "Swift",
    description:
      "A powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.",
    url: "https://swift.org/",
    category: "Programming Language",
    releaseDate: "2014-06-02",
    latestVersion: "5.9",
    developers: ["Apple Inc."],
    license: "Apache 2.0",
    platforms: ["iOS", "macOS", "tvOS", "watchOS"],
    features: ["Safety", "Performance", "Interoperability"],
    popularity: 85,
    documentation: "https://docs.swift.org/swift-book/",
  },
  {
    id: uuidv4(),
    name: "Angular",
    description:
      "A platform and framework for building single-page client applications using HTML and TypeScript.",
    url: "https://angular.io/",
    category: "Framework",
    releaseDate: "2010-09-30",
    latestVersion: "15.0.0",
    developers: ["Google", "Angular Team"],
    license: "MIT",
    platforms: ["Web"],
    features: [
      "Two-way Data Binding",
      "Dependency Injection",
      "Modular Development",
    ],
    popularity: 78,
    documentation: "https://angular.io/docs",
  },
];

chrome.storage.sync.set({
  technologies: technologies,
});
