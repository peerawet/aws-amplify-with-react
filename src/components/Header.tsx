const Header = () => {
  return (
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
  );
};

export default Header;
