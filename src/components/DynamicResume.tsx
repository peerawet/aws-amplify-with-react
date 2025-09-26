import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "./DynamicHeader";
import Modal from "./Modal";

// Define content sections
const resumeData = {
  personalInfo: {
    name: "Peerawet Chursuk",
    title: "Full Stack Developer",
    slogan: "Think deep. Build fast. Stay curious.",
    location: "Nonthaburi, Thailand",
    phone: "065-502-6360",
    email: "peerawet1996@gmail.com",
    github: "peerawet",
    linkedin: "www.linkedin.com/in/peerawet-chursuk",
    website: "https://resume.forifi.xyz",
    profileImage: "/fame-nobg.png",
  },

  techStack: {
    languages: [
      { name: "JS", level: 9 },
      { name: "TS", level: 8 },
      { name: "PHP", level: 9 },
    ],
    frameworks: [
      { name: "React", level: 9 },
      { name: "Next.js", level: 7 },
      { name: "Express", level: 9 },
      { name: "Laravel", level: 8 },
      { name: "CI", level: 8 },
    ],
    databases: [
      { name: "MySQL", level: 8 },
      { name: "Postgret", level: 8 },
      { name: "MSSQL", level: 9 },
      { name: "Mongo", level: 6 },
      { name: "Dynamo", level: 6 },
    ],
    cloud: [
      { name: "AWS", level: 8 },
      { name: "Supabase", level: 7 },
      { name: "Docker", level: 9 },
    ],
    tools: [
      { name: "Git", level: 9 },
      { name: "Cursor", level: 9 },
    ],
  },

  education: [
    {
      id: 1,
      institution: "AWS Certified Developer – Associate",
      degree: "Score: 783",
      grade: "",
      period: "Sep 2025 - Sep 2028",
      icon: "☁️",
      link: "https://www.credly.com/badges/ebd07b99-ea7c-42eb-b518-daf21e2aafd4/public_url?fbclid=IwY2xjawMnnnJleHRuA2FlbQIxMABicmlkETFRbTVwbUxNYldJQ0hNUmlDAR4eKvLyqLYxbGTJPoJ-TAAS-zNFubKAic3xMJ_U6JtbNYkz4nFohInlkldgAQ_aem_apr_0xr86vhfu8ZedmVbYg",
    },
    {
      id: 2,
      institution: "TechUp, Full-Time Full-Stack Software Developer Bootcamp",
      degree: "Group leader and mentor for classmates",
      grade: "",
      period: "2023 (4 months)",
      icon: "🏆",
    },
    {
      id: 3,
      institution: "King Mongkut's University Of Technology North Bangkok",
      degree: "Bachelor's degree, Faculty of Industrial Engineer",
      grade: "Second Class Honors 3.36 GPA",
      period: "2014 - 2018",
      icon: "🏫",
    },
  ],

  experience: [
    {
      id: 1,
      position: "Developer",
      company: "Phillip Asset Management Co., Ltd.",
      period: "Jan 2025 - Jul 2025",
      responsibilities: [
        "🗂️ Infrastructure & Project Setup",
        "🧩 System Development",
        "🛠️ Maintain Legacy System",
      ],
      technologies: [],
      links: [
        {
          text: "see detail",
          url: "https://onedrive.live.com/edit.aspx?resid=D25F8B9D66AD2F53!s2e9d2a20d0fa401a8609fd884c1d921a&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL28vYy9kMjVmOGI5ZDY2YWQyZjUzL0VpQXFuUzc2MEJwQWhnbjlpRXdka2hvQkkyaS0zWlh0dVFZbUlQdVNpc1BMUkE_ZT13TWt3Q3k&wd=target%28Quick%20Notes.one%7Cbda79f5b-f1e2-4566-9779-80405c1362bc%2FARCHITECTURE%7C6c271c89-4296-4027-936d-1666e3c64846%2F%29&wdorigin=NavigationUrl",
        },
        {
          text: "see detail",
          url: "https://docs.google.com/document/d/1xWZ5jwFbLPV08mGnRiuqC6rOMRdzcxK9BmjcJ1PWCW8/edit?tab=t.0",
        },
      ],
    },
    {
      id: 2,
      position: "Frontend Developer (Contract)",
      company: "CSR Consulting",
      period: "Oct 2024 - Dec 2024",
      responsibilities: [
        "🎨 Updated frontend to modern style according to figma from web designer",
        "🔄 Modernized legacy UI components",
        "📱 Responsive design",
      ],
      technologies: [],
      links: [],
    },
    {
      id: 3,
      position: "Junior Web Programmer",
      company: "Orange Technology Solution Company Limited",
      period: "Apr 2024 - Jul 2024",
      responsibilities: [
        "📝 Gathered requirements directly from the customer",
        "🚀 Developed a program for flight forwarding",
        "💬 Line chat bot",
      ],
      technologies: [],
      links: [],
    },
    {
      id: 4,
      position: "Production Engineer",
      company: "Asahi Intecc (Thailand) Co., Ltd.",
      period: "Nov 2018 - Apr 2020",
      responsibilities: [
        "🔬 Performed process validation when manufacturing conditions changed",
        "🏥 Worked with medical device manufacturing standards",
      ],
      technologies: [],
      links: [],
    },
  ],

  projects: [
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
        "Deployed on AWS ECS with RDS and Load Balancer for scalable production environment. Infrastructure as Code (IaC) implemented using AWS CDK with TypeScript for automated deployment and resource management.",
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
        {
          label: "AWS CDK (IaC)",
          url: "https://github.com/peerawet/dormy-cdk",
          icon: "☁️",
        },
      ],
    },

    {
      id: 2,
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
  ],
};

const DynamicResume = () => {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const generatePDF = async () => {
    if (!resumeRef.current) return;

    setIsGeneratingPDF(true);
    try {
      const pages = resumeRef.current.querySelectorAll(".resume-page");
      const pdf = new jsPDF("portrait", "mm", "a4");

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i] as HTMLElement;

        const canvas = await html2canvas(page, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          width: page.offsetWidth,
          height: page.offsetHeight,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.95);

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
      }

      pdf.save("Peerawet_Chursuk_Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Calculate content distribution for pages
  const renderContent = () => {
    // Page 1 content
    const page1Content = (
      <div
        key="page-1"
        className="resume-page a4 text-slate-900 overflow-hidden flex flex-col relative rounded-2xl shadow-2xl border border-slate-200 mb-8"
      >
        <Header data={resumeData.personalInfo} />
        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6 px-3 md:px-6 py-4 md:py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="w-full md:w-1/3 flex flex-col gap-4 min-w-[240px]">
            <TechStackSection techStack={resumeData.techStack} />
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-4 min-w-0">
            <ExperienceSection
              experience={resumeData.experience}
              onOpenModal={openModal}
            />
          </div>
        </div>
      </div>
    );

    // Page 2 content
    const page2Content = (
      <div
        key="page-2"
        className="resume-page a4 text-slate-900 overflow-hidden flex flex-col relative rounded-2xl shadow-2xl border border-slate-200 mb-8"
      >
        <Header data={resumeData.personalInfo} />
        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6 px-3 md:px-6 py-4 md:py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="w-full md:w-1/3 flex flex-col gap-4 min-w-[240px]">
            <EducationSection education={resumeData.education} />
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-4 min-w-0">
            <ProjectsSection projects={resumeData.projects} />
          </div>
        </div>
      </div>
    );

    return [page1Content, page2Content];
  };

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center py-4 bg-gradient-to-br from-blue-50 to-pink-50">
      {/* PDF Export Button - Hidden on mobile */}
      <button
        onClick={generatePDF}
        disabled={isGeneratingPDF}
        className="hidden md:flex fixed top-4 right-4 z-50 px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 text-white rounded-lg shadow-lg text-sm font-medium transition-all duration-200 items-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>📄✨</span>
        {isGeneratingPDF ? "Generating PDF..." : "Generate PDF"}
      </button>

      {/* Resume Container */}
      <div ref={resumeRef} className="flex flex-col gap-8 items-center">
        {renderContent()}
      </div>

      {modalImage && (
        <Modal src={modalImage.src} alt={modalImage.alt} onClose={closeModal} />
      )}
    </div>
  );
};

// Component sections
const TechStackSection = ({ techStack }: { techStack: any }) => (
  <section className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 h-fit border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <h2 className="font-bold text-slate-700 mb-4 flex items-center gap-2 text-lg">
      <span className="text-blue-600">🛠️</span> Tech Stack & Proficiency
    </h2>
    <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-5 flex flex-col gap-4">
      <TechSectionWithLevels
        title="Languages"
        icon="💻"
        items={techStack.languages}
        iconColor="text-amber-600"
      />
      <div className="border-t border-slate-200 my-1"></div>
      <TechSectionWithLevels
        title="Frameworks"
        icon="🧩"
        items={techStack.frameworks}
        iconColor="text-emerald-600"
      />
      <div className="border-t border-slate-200 my-1"></div>
      <TechSectionWithLevels
        title="Databases"
        icon="🗄️"
        items={techStack.databases}
        iconColor="text-blue-600"
      />
      <div className="border-t border-slate-200 my-1"></div>
      <TechSectionWithLevels
        title="Cloud & DevOps"
        icon="☁️"
        items={techStack.cloud}
        iconColor="text-sky-600"
      />
      <div className="border-t border-slate-200 my-1"></div>
      <TechSectionWithLevels
        title="Tools & Version Control"
        icon="🔧"
        items={techStack.tools}
        iconColor="text-orange-600"
      />
    </div>
  </section>
);

const TechSectionWithLevels = ({
  title,
  icon,
  items,
  iconColor,
}: {
  title: string;
  icon: string;
  items: { name: string; level: number }[];
  iconColor: string;
}) => {
  const getSkillColor = (level: number) => {
    if (level >= 9) return "bg-gradient-to-r from-emerald-500 to-green-500"; // Expert - Green
    if (level >= 7) return "bg-gradient-to-r from-blue-500 to-cyan-500"; // Advanced - Blue
    if (level >= 5) return "bg-gradient-to-r from-yellow-500 to-orange-500"; // Intermediate - Orange
    return "bg-gradient-to-r from-gray-400 to-gray-500"; // Beginner - Gray
  };

  return (
    <div>
      <div className="font-semibold mb-2 text-xs flex items-center gap-1">
        <span className={iconColor}>{icon}</span> {title}:
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-xs text-slate-700 font-medium">
              {item.name}
            </span>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < item.level
                        ? getSkillColor(item.level)
                        : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = ({
  experience,
  onOpenModal,
}: {
  experience: any[];
  onOpenModal: (src: string, alt: string) => void;
}) => (
  <section className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 h-fit border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <h2 className="font-bold text-slate-700 mb-6 flex items-center gap-2 text-lg">
      <span className="text-amber-600">💼</span> Career Progression
    </h2>
    <div className="relative pl-8">
      <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-300 to-yellow-100 rounded-full"></div>
      {experience.map((exp, index) => (
        <div
          key={exp.id}
          className={`relative ${index < experience.length - 1 ? "mb-8" : ""}`}
        >
          <div className="absolute -left-5 top-0 flex items-center justify-center w-8 h-8 bg-yellow-100 border-2 border-yellow-400 rounded-full text-xl">
            🏢
          </div>
          <div className="ml-6 rounded-lg border border-yellow-100 bg-yellow-50 p-4 flex flex-col gap-2">
            <div className="text-sm font-semibold flex items-center gap-2">
              {exp.period}
              <span className="text-xs text-gray-400">{exp.company}</span>
            </div>
            <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
              🧑‍💻 {exp.position}
            </div>
            <ul className="text-xs list-disc list-inside text-gray-700 space-y-1">
              {exp.responsibilities.map((resp: string, i: number) => (
                <li key={i}>
                  {resp}
                  {exp.links[i] && (
                    <a
                      href={exp.links[i].url}
                      className="text-blue-500 hover:underline ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.links[i].text}
                    </a>
                  )}
                  {/* Add modal triggers for specific items */}
                  {resp.includes("flight forwarding") && (
                    <button
                      onClick={() => onOpenModal("/express.png", "Express")}
                      className="text-xs text-blue-500 ml-2"
                    >
                      View
                    </button>
                  )}
                  {resp.includes("Line chat bot") && (
                    <button
                      onClick={() =>
                        onOpenModal("/line-chat-bot.png", "Linechatbot")
                      }
                      className="text-xs text-blue-500 ml-2"
                    >
                      View
                    </button>
                  )}
                  {resp.includes("Updated frontend to modern style") && (
                    <div className="inline-flex gap-1 ml-2">
                      <button
                        onClick={() => onOpenModal("/old.png", "Old Design")}
                        className="text-xs text-blue-500"
                      >
                        Before
                      </button>
                      <span className="text-xs text-gray-400">|</span>
                      <button
                        onClick={() => onOpenModal("/new.png", "New Design")}
                        className="text-xs text-blue-500"
                      >
                        After
                      </button>
                    </div>
                  )}
                  {resp.includes("Responsive design") && (
                    <button
                      onClick={() =>
                        onOpenModal("/responsive.png", "Responsive Design")
                      }
                      className="text-xs text-blue-500 ml-2"
                    >
                      View
                    </button>
                  )}
                </li>
              ))}
            </ul>
            {exp.technologies.length > 0 && (
              <ul className="text-xs list-disc list-inside text-gray-700 space-y-1 mt-1">
                {exp.technologies.map((tech: string, i: number) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const EducationSection = ({ education }: { education: any[] }) => (
  <section className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-6 h-fit border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <h2 className="font-bold text-slate-700 mb-4 flex items-center gap-2 text-lg">
      <span className="text-purple-600">🎓</span> Education & Certificates
    </h2>
    {education.map((edu) => (
      <div
        key={edu.id}
        className="mb-4 last:mb-0 rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-5 flex flex-col gap-3 hover:shadow-md transition-all duration-200"
      >
        <div className="font-bold flex items-center gap-2 text-sm text-slate-700">
          {edu.icon} {edu.institution}
        </div>
        <div className="text-sm text-slate-600">
          {edu.degree}
          {edu.grade && (
            <>
              <br />
              <span className="font-semibold text-purple-600">{edu.grade}</span>
            </>
          )}
        </div>
        {edu.period && (
          <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
            <span className="text-slate-400">📅</span> {edu.period}
          </div>
        )}
        {edu.link && (
          <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
            <a
              href={edu.link}
              className="text-purple-600 hover:text-purple-800 hover:underline flex items-center gap-1 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View Certificate
            </a>
          </div>
        )}
      </div>
    ))}
  </section>
);

const ProjectsSection = ({ projects }: { projects: any[] }) => (
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
            <span className="text-green-600">📝</span> {project.description}
          </div>
          {project.tech && (
            <div className="text-xs text-slate-700 leading-tight">
              <span className="text-sky-600">⚡</span> {project.tech}
            </div>
          )}
          {project.deployment && (
            <div className="text-xs text-slate-700 leading-tight">
              <span className="text-orange-600">☁️</span> {project.deployment}
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.links.map((link: any, index: number) => (
              <a
                key={index}
                href={link.url}
                className="px-2 py-1 text-blue-700 rounded text-xs font-medium flex items-center gap-1 bg-slate-100 hover:bg-slate-200 transition-colors duration-200 flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm">{link.icon}</span>
                <span className="hidden sm:inline">{link.label}</span>
                <span className="sm:hidden text-xs">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default DynamicResume;
