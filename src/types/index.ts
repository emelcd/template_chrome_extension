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
  updatedAt: number; // Date when the technology information was last updated
}

export { Technology };
