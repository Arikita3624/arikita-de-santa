import React from "react";
import {
  FaReact,
  FaAngular,
  FaJs,
  FaGithub,
  FaSlack,
  FaDiscord,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiSupabase,
  SiAntdesign,
  SiNextdotjs,
  SiMysql,
  SiNotion,
  SiGooglemeet,
  SiBootstrap,
  SiGithubcopilot,
} from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";

const frameworks = [
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
  { icon: <FaReact className="text-sky-400" />, name: "React" },
  { icon: <FaAngular className="text-red-500" />, name: "Angular" },
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "TailwindCSS" },
  { icon: <SiAntdesign className="text-blue-400" />, name: "Ant Design" },
  { icon: <TbBrandReact className="text-pink-400" />, name: "TanStack Query" },
  { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
];

const tools = [
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiSupabase className="text-emerald-400" />, name: "Supabase" },
  { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
  { icon: <SiGooglemeet className="text-green-500" />, name: "Google Meet" },
  { icon: <FaSlack className="text-pink-500" />, name: "Slack" },
  { icon: <SiNotion className="text-white" />, name: "Notion" },
  { icon: <SiGithubcopilot className="text-indigo-400" />, name: "Copilot" },
  { icon: <FaDiscord className="text-indigo-500" />, name: "Discord" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Frameworks & Languages */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-purple-400 mb-6">
            Languages & Frameworks
          </h3>
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {frameworks.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 hover:scale-110 transition"
              >
                <span className="text-4xl">{s.icon}</span>
                <span className="text-sm text-gray-300">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Databases & Tools */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-purple-400 mb-6">
            Databases & Tools
          </h3>
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {tools.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 hover:scale-110 transition"
              >
                <span className="text-4xl">{s.icon}</span>
                <span className="text-sm text-gray-300">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
