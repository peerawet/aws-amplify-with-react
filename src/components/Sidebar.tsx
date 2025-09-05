const Sidebar = () => {
  const techStack = {
    languages: ["JS", "TS", "PHP"],
    frameworks: ["NextJS", "React", "Express", "Laravel", "CI"],
    versionControl: ["Git", "GitHub"],
    databases: ["MySQL", "MongoDB", "Postgres", "MSSQL"],
    cloud: ["AWS", "Supabase"],
    apis: ["LINE", "Facebook", "Google"],
    serverSetup: ["Docker", "CI/CD", "AWS", "VMware", "Ubuntu", "Nutanix"],
    ai: ["Cursor", "Ollama"],
  };

  const TechSection = ({
    title,
    icon,
    items,
    iconColor,
  }: {
    title: string;
    icon: string;
    items: string[];
    iconColor: string;
  }) => (
    <div>
      <div className={`font-semibold mb-1 text-xs flex items-center gap-1`}>
        <span className={iconColor}>{icon}</span> {title}:
      </div>
      <ul className="list-disc list-inside text-xs grid grid-cols-2 gap-1 text-slate-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <aside className="w-1/3 flex flex-col gap-4 min-w-[240px]">
      {/* Tech Stack */}
      <section className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 h-fit border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <h2 className="font-bold text-slate-700 mb-4 flex items-center gap-2 text-lg">
          <span className="text-blue-600">🛠️</span> Tech Stack
        </h2>
        <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-5 flex flex-col gap-4">
          <TechSection
            title="Languages"
            icon="💻"
            items={techStack.languages}
            iconColor="text-amber-600"
          />
          <div className="border-t border-slate-200 my-1"></div>
          <TechSection
            title="Frameworks"
            icon="🧩"
            items={techStack.frameworks}
            iconColor="text-emerald-600"
          />
          <div className="border-t border-slate-200 my-1"></div>
          <TechSection
            title="Version Control"
            icon="🔗"
            items={techStack.versionControl}
            iconColor="text-orange-600"
          />
          <div className="border-t border-slate-200 my-1"></div>
          <TechSection
            title="Databases"
            icon="🗄️"
            items={techStack.databases}
            iconColor="text-blue-600"
          />
          <div className="border-t border-slate-200 my-1"></div>
          <TechSection
            title="Cloud"
            icon="☁️"
            items={techStack.cloud}
            iconColor="text-sky-600"
          />
          <div className="border-t border-slate-200 my-1"></div>
          <TechSection
            title="APIs"
            icon="🔌"
            items={techStack.apis}
            iconColor="text-purple-600"
          />
          <div className="border-t border-slate-200 my-1"></div>
          <TechSection
            title="Server Setup"
            icon="🐳"
            items={techStack.serverSetup}
            iconColor="text-blue-600"
          />
          <div className="border-t border-slate-200 my-1"></div>
          <TechSection
            title="AI"
            icon="🤖"
            items={techStack.ai}
            iconColor="text-green-600"
          />
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
