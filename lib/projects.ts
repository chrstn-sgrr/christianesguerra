export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "AttendEase",
    description: "Attendance via Computer Vision in Classrooms",
    stack: ["Python", "React", "Node.js", "Flask", "OpenCV", "NumPy"],
  },
  {
    title: "Capitol Booking System",
    description: "Simple Modernized Booking System for Capitol Restaurant",
    stack: ["React", "Flask", "Supabase"],
  },
  {
    title: "NoteTakrr",
    description:
      "A web app that processes student notes (text, images, PDFs) and generates structured study materials using AI.",
    stack: ["React", "FastAPI", "OpenAI SDK", "Supabase"],
  },
  {
    title: "webshooter",
    description:
      'CLI tool that grabs any file from anywhere into current directory via "thwip"',
    stack: ["Go"],
  },
  {
    title: "a-friggin-weather-app",
    description:
      "Your regular old weather forecast app because I got tired checking Google every time",
    stack: ["React", "Tailwind"],
  },
];