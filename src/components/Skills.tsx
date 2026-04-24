"use client";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiRedis,
  SiJavascript,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiReactquery,
  SiRedux,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layout,
  RefreshCcw,
  Server,
  Terminal,
  Wifi,
} from "lucide-react";
import { FaAws } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5" />,
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
    ],
  },

  {
    title: "State Management & Data Fetching",
    icon: <RefreshCcw className="w-5 h-5" />,
    skills: [
      { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> },
      {
        name: "TanStack Query",
        icon: <SiReactquery className="text-[#FF4154]" />,
      },
    ],
  },

  {
    title: "Backend & Systems",
    icon: <Terminal className="w-5 h-5" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST API", icon: <Globe className="w-4 h-4" /> },
      { name: "WebSocket", icon: <Wifi className="w-4 h-4" /> },
      { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
      {
        name: "JWT Auth",
        icon: <SiJsonwebtokens className="text-black dark:text-white" />,
      },
    ],
  },

  {
    title: "Databases & ORMs",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-[#4169E1]" />,
      },
      { name: "Prisma ORM", icon: <SiPrisma /> },
    ],
  },

  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "VPS Hosting", icon: <Server className="w-4 h-4" /> },
      { name: "CI/CD", icon: <GitBranch className="w-4 h-4" /> },
    ],
  },

  {
    title: "Version Control & Tools",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
  },
];

export default function Skills() {
  return (
    <div id="skills" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-4">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-center md:text-left text-lg max-w-2xl">
          The tools and technologies I use to bring ideas to life. Always
          learning, always evolving.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="skill-card stagger-item group p-8 glass-dark rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 glass rounded-2xl text-primary">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/5 hover:border-primary/30 transition-all cursor-default"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
