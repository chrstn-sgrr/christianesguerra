export type Project = {
  title: string;
  description: string;
  stack: string[];
  category: "academic" | "personal";
  date?: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "AttendEase",
    description: "Attendance via Computer Vision in Classrooms",
    stack: ["Python", "React", "Node.js", "Flask", "OpenCV", "NumPy"],
    category: "academic",
    date: "April 2025 – February 2026",
    repo: "https://github.com/APC-SoCIT/APC_2025_2026_T1_SS231_G05-APC-AttendEase",
  },
  {
    title: "Capitol Booking System",
    description: "Simple Modernized Booking System for Capitol Restaurant",
    stack: ["React", "Flask", "Supabase", "Azure"],
    category: "academic",
    date: "April 2026 – Currently in Progress",
    repo: "https://github.com/APC-SoCIT/APC_2026_2027_T1_SS231_G03-CapitolBookingSystem",
  },
  {
    title: "NoteTakrr",
    description:
      "A web app that processes student notes (text, images, PDFs) and generates structured study materials using AI.",
    stack: ["React", "FastAPI", "OpenAI SDK", "Supabase"],
    category: "academic",
    date: "March 2026 – June 2026",
    repo: "https://github.com/apcciesguerra/NoteTakrr",
  },
  {
    title: "webshooter",
    description:
      'CLI tool that grabs any file from anywhere into current directory via "thwip"',
    stack: ["Go"],
    category: "personal",
    repo: "https://github.com/chrstn-sgrr/webshooter",
  },
  {
    title: "d-friggin-weather",
    description:
      "Your regular old weather forecast app because I got tired checking Google every time",
    stack: ["React", "Tailwind"],
    category: "personal",
    repo: "https://github.com/chrstn-sgrr/d-friggin-weather",
  },
];