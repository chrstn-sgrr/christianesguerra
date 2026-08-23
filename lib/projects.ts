export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
};

// Placeholder entries - replace titles, descriptions, stack, and links
// with real project data.
export const projects: Project[] = [
  {
    title: "Project 1",
    description:
      "One or two sentences on what it does and the problem it solves.",
    stack: ["Python", "PostgreSQL", "AWS"],
  },
  {
    title: "Project 2",
    description:
      "One or two sentences on what it does and the problem it solves.",
    stack: ["Go", "Docker", "Azure"],
  },
  {
    title: "Project 3",
    description:
      "One or two sentences on what it does and the problem it solves.",
    stack: ["React", "Supabase"],
  },
  {
    title: "Project 4",
    description:
      "One or two sentences on what it does and the problem it solves.",
    stack: ["Java", "Spring Boot", "MySQL"],
  },
];
