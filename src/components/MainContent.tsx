interface MainContentProps {
  onOpenModal: (src: string, alt: string) => void;
}

const MainContent = ({ onOpenModal }: MainContentProps) => {
  return (
    <main className="w-2/3 flex flex-col gap-4 min-w-0">
      {/* Passion to Profession */}
      <section className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-6 h-fit border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <h2 className="font-bold text-slate-700 mb-4 flex items-center gap-2 text-lg">
          <span className="text-purple-600">🚀</span> Passion to Profession
        </h2>
        <div className="rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-5 flex flex-col gap-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            <span className="text-amber-600">📝</span> I started my career as a
            Production Engineer for 2 years before fully transitioning into
            software development a field I truly enjoy. I've grown through
            hands-on experience, building real-world projects, learning fast,
            and never stopping at "just enough."
          </p>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 h-fit border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <h2 className="font-bold text-slate-700 mb-6 flex items-center gap-2 text-lg">
          <span className="text-amber-600">💼</span> Career Progression
        </h2>
        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-300 to-yellow-100 rounded-full"></div>

          {/* Timeline item 1 */}
          <div className="relative mb-8">
            <div className="absolute -left-5 top-0 flex items-center justify-center w-8 h-8 bg-yellow-100 border-2 border-yellow-400 rounded-full text-xl">
              🏢
            </div>
            <div className="ml-6 rounded-lg border border-yellow-100 bg-yellow-50 p-4 flex flex-col gap-2">
              <div className="text-sm font-semibold flex items-center gap-2">
                Jan 2025 - Current
                <span className="text-xs text-gray-400">
                  Phillip Asset Management Co., Ltd.
                </span>
              </div>
              <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                🧑‍💻 Developer
              </div>
              <ul className="text-xs list-disc list-inside text-gray-700 space-y-1">
                <li>
                  🗂️ Infrastructure & Project Setup
                  <a
                    href="https://onedrive.live.com/edit.aspx?resid=D25F8B9D66AD2F53!s2e9d2a20d0fa401a8609fd884c1d921a&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL28vYy9kMjVmOGI5ZDY2YWQyZjUzL0VpQXFuUzc2MEJwQWhnbjlpRXdka2hvQkkyaS0zWlh0dVFZbUlQdVNpc1BMUkE_ZT13TWt3Q3k&wd=target%28Quick%20Notes.one%7Cbda79f5b-f1e2-4566-9779-80405c1362bc%2FARCHITECTURE%7C6c271c89-4296-4027-936d-1666e3c64846%2F%29&wdorigin=NavigationUrl"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    see detail
                  </a>
                </li>
                <li>
                  🧩 System Development
                  <a
                    href="https://docs.google.com/document/d/1xWZ5jwFbLPV08mGnRiuqC6rOMRdzcxK9BmjcJ1PWCW8/edit?tab=t.0"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    see detail
                  </a>
                </li>
                <li>🛠️ Maintain Legacy System</li>
              </ul>
              <ul className="text-xs list-disc list-inside text-gray-700 space-y-1 mt-1">
                <li>💻 ReactTS, ExpressJS, CodeIgniter</li>
                <li>🐳 Docker compose containerization</li>
                <li>☁️ Nutanix infrastructure</li>
                <li>
                  🤖 Integrate Ollama for users to ask questions about CRM
                  (Mistral Model)
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline item 2 */}
          <div className="relative">
            <div className="absolute -left-5 top-0 flex items-center justify-center w-8 h-8 bg-yellow-100 border-2 border-yellow-400 rounded-full text-xl">
              🏢
            </div>
            <div className="ml-6 rounded-lg border border-yellow-100 bg-yellow-50 p-4 flex flex-col gap-2">
              <div className="text-sm font-semibold flex items-center gap-2">
                Apr 2024 - Oct 2024
                <span className="text-xs text-gray-400">
                  Orange Technology Solution Company Limited
                </span>
              </div>
              <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                🧑‍💻 Junior Web Programmer
              </div>
              <ul className="text-xs list-disc list-inside text-gray-700 space-y-1">
                <li>📝 Gathered requirements directly from the customer</li>
                <li>
                  🚀 Developed a program for flight forwarding
                  <button
                    onClick={() =>
                      onOpenModal(
                        "https://lxyqtapnnytsigmrikoq.supabase.co/storage/v1/object/public/utill//express.png",
                        "Express"
                      )
                    }
                    className="text-xs text-blue-500"
                  >
                    View
                  </button>
                </li>
                <li>
                  💬 Line chat bot
                  <button
                    onClick={() =>
                      onOpenModal(
                        "https://lxyqtapnnytsigmrikoq.supabase.co/storage/v1/object/public/utill//chatbot.png",
                        "Linechatbot"
                      )
                    }
                    className="text-xs text-blue-500"
                  >
                    View
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
