interface PageTwoProps {
  onOpenModal: (src: string, alt: string) => void;
}

const PageTwo = ({ onOpenModal: _onOpenModal }: PageTwoProps) => {
  const projects = [
    {
      id: 1,
      title: "Dormy",
      status: "Completed",
      statusColor: "text-green-800",
      icon: "🏠",
      iconColor: "text-orange-600",
      description:
        "A comprehensive full-stack SaaS application for dormitory management with billing system, contract management, and financial analytics including PDF generation capabilities.",
      tech: "Built with Next.js, TypeScript, PostgreSQL, Redux, Prisma ORM, and NextAuth. Features responsive UI with Tailwind CSS and interactive dashboards using Recharts.",
      deployment:
        "Deployed on AWS ECS with RDS and Load Balancer for scalable production environment.",
      links: [
        {
          label: "Visit Website",
          url: "https://dormy.forifi.xyz/",
          icon: "🔗",
        },
        {
          label: "Source Code",
          url: "https://github.com/peerawet/dormy",
          icon: "📁",
        },
      ],
    },
    {
      id: 2,
      title: "EasyWeb",
      status: "In Progress",
      statusColor: "text-red-800",
      icon: "🧑‍💻",
      iconColor: "text-blue-600",
      description:
        "EasyWeb is a lean and lightweight SaaS platform that I developed using only the GitHub API, with no database required. It allows non-tech users to create and deploy static websites directly from GitHub Pages.",
      tech: "",
      deployment:
        "Deployed on AWS ECS with EC2, Application Load Balancer (ALB), and AWS ACM for secure HTTPS connections.",
      links: [
        { label: "Visit Website", url: "https://www.forifi.xyz/", icon: "🔗" },
      ],
    },
    {
      id: 3,
      title: "Document Management System",
      status: "",
      statusColor: "",
      icon: "🗂️",
      iconColor: "text-purple-600",
      description:
        "A comprehensive Document Management System built with Supabase as a complete Backend-as-a-Service (BaaS) solution, handling Authentication (JWT), File Management, and Cloud Database operations.",
      tech: "",
      deployment: "",
      links: [
        {
          label: "Visit Website",
          url: "https://dms-frontend-q93o.onrender.com",
          icon: "🔗",
        },
        {
          label: "Source Code",
          url: "https://github.com/peerawet/TPS",
          icon: "📁",
        },
      ],
    },
  ];

  return (
    <div className="a4 text-slate-900 overflow-hidden flex flex-col relative rounded-2xl shadow-2xl border border-slate-200">
      {/* Header - Same as Page 1 */}
      <header className="flex items-center flex-row items-end justify-between border-b pb-6 px-10 pt-8 bg-gradient-to-r from-slate-50 via-blue-50 to-purple-50">
        <div className="flex items-center gap-6">
          <img
            src="/fame-nobg.png"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg bg-gray-400"
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight leading-tight text-slate-800 flex items-center gap-3">
              <span className="text-blue-600">💻</span> Peerawet Chursuk
            </h1>
            <div className="text-lg text-slate-600 mt-2 flex items-center gap-2 font-semibold">
              <span className="text-emerald-600">💼</span> Full Stack Developer
            </div>
            {/* Slogan */}
            <div className="text-sm text-blue-600 mt-3 italic font-medium tracking-wide">
              "Think deep. Build fast. Stay curious."
            </div>
            {/* Resume Link */}
            <div className="text-xs text-slate-500 mt-2">
              <a
                href="https://resume.forifi.xyz"
                className="hover:text-blue-600 flex items-center gap-1 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-blue-500">🔗</span> resume.forifi.xyz
              </a>
            </div>
          </div>
        </div>
        <div className="mt-0 text-sm text-right space-y-1">
          <div className="text-gray-700 font-semibold flex items-center gap-1">
            📍 Nonthaburi, Thailand
          </div>
          <div className="flex items-center gap-1">
            📞
            <a href="tel:065-502-6360" className="text-blue-600 underline">
              065-502-6360
            </a>
          </div>
          <div className="flex items-center gap-1">
            📧
            <a
              href="mailto:peerawet1996@gmail.com"
              className="text-blue-600 underline"
            >
              peerawet1996@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            GitHub:
            <a
              href="https://github.com/peerawet"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              peerawet
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-row gap-6 px-6 py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Left Column */}
        <aside className="w-1/3 flex flex-col gap-4 min-w-[240px]">
          {/* Education */}
          <section className="bg-gradient-to-br from-white to-emerald-50 rounded-xl shadow-lg p-6 h-fit border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h2 className="font-bold text-slate-700 mb-4 flex items-center gap-2 text-lg">
              <span className="text-emerald-600">🎓</span> Education &
              Certificates
            </h2>
            <div className="mb-4 rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-blue-50 p-5 flex flex-col gap-3">
              <div className="font-bold flex items-center gap-2 text-sm text-slate-700">
                🏫 King Mongkut's University Of Technology North Bangkok
              </div>
              <div className="text-sm text-slate-600">
                Bachelor's degree, Faculty of Industrial Engineer
                <br />
                <span className="font-semibold text-emerald-600">
                  Second Class Honors 3.36 GPA
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                <span className="text-slate-400">📅</span> 2014 - 2018
              </div>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-blue-50 p-5 flex flex-col gap-3">
              <div className="font-bold flex items-center gap-2 text-sm text-slate-700">
                🏆 TechUp, Full-Time Full-Stack Software Developer Bootcamp
              </div>
              <div className="text-sm text-slate-600">
                Group leader and mentor for classmates
              </div>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                <span className="text-slate-400">📅</span> 2023 (4 months)
              </div>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-blue-50 p-5 flex flex-col gap-3">
              <div className="font-bold flex items-center gap-2 text-sm text-slate-700">
                ☁️ AWS Certified Developer – Associate ✅
              </div>
              <div className="text-sm text-slate-600">
                <span className="font-semibold text-emerald-600">
                  Score: 783
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                <a
                  href="https://www.credly.com/badges/ebd07b99-ea7c-42eb-b518-daf21e2aafd4/public_url?fbclid=IwY2xjawMnnnJleHRuA2FlbQIxMABicmlkETFRbTVwbUxNYldJQ0hNUmlDAR4eKvLyqLYxbGTJPoJ-TAAS-zNFubKAic3xMJ_U6JtbNYkz4nFohInlkldgAQ_aem_apr_0xr86vhfu8ZedmVbYg"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 View Certificate
                </a>
              </div>
            </div>
          </section>
        </aside>

        {/* Right Column */}
        <main className="w-2/3 flex flex-col gap-4 min-w-0">
          {/* Project Highlights */}
          <section className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg p-6 h-fit border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h2 className="font-bold text-slate-700 mb-2 flex items-center gap-2 text-lg">
              <span className="text-green-600">💻</span> Project Highlights
            </h2>
            <div className="flex flex-col gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-blue-50 p-5 flex flex-col gap-3"
                >
                  <div className="font-bold text-base flex items-center gap-2 text-slate-700">
                    <span className={project.iconColor}>{project.icon}</span>{" "}
                    {project.title}
                    {project.status && (
                      <span className={`text-xs ${project.statusColor}`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-700 leading-tight">
                    <span className="text-green-600">📝</span>{" "}
                    {project.description}
                  </div>
                  {project.tech && (
                    <div className="text-xs text-slate-700 leading-tight">
                      <span className="text-sky-600">⚡</span> {project.tech}
                    </div>
                  )}
                  {project.deployment && (
                    <div className="text-xs text-slate-700 leading-tight">
                      <span className="text-orange-600">☁️</span>{" "}
                      {project.deployment}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-3 mt-2">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="px-4 py-2 text-blue-700 rounded-lg text-sm font-medium flex items-center gap-2 bg-transparent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{link.icon}</span> {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PageTwo;
