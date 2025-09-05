interface PersonalInfo {
  name: string;
  title: string;
  slogan: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  profileImage: string;
}

interface HeaderProps {
  data: PersonalInfo;
}

const Header = ({ data }: HeaderProps) => {
  return (
    <header className="flex flex-col md:flex-row md:items-end md:justify-between border-b pb-4 md:pb-6 px-4 md:px-10 pt-6 md:pt-8 bg-gradient-to-r from-slate-50 via-blue-50 to-purple-50 gap-4 md:gap-0">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
        <img
          src={data.profileImage}
          alt="Profile"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-lg bg-gray-400"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-slate-800">
            {data.name}
          </h1>
          <div className="text-base sm:text-lg text-slate-600 mt-2 flex items-center justify-center sm:justify-start gap-2 font-semibold">
            <span className="text-emerald-600">💼</span> {data.title}
          </div>
          {/* AWS Certification */}
          <div className="text-xs sm:text-sm mt-2 font-semibold flex items-center justify-center sm:justify-start gap-2">
            <a
              href="https://www.credly.com/badges/ebd07b99-ea7c-42eb-b518-daf21e2aafd4/public_url?fbclid=IwY2xjawMnnnJleHRuA2FlbQIxMABicmlkETFRbTVwbUxNYldJQ0hNUmlDAR4eKvLyqLYxbGTJPoJ-TAAS-zNFubKAic3xMJ_U6JtbNYkz4nFohInlkldgAQ_aem_apr_0xr86vhfu8ZedmVbYg"
              className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors duration-200 flex items-center gap-1 sm:gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-orange-500">☁️</span>
              <span className="hidden sm:inline">
                AWS Certified Developer – Associate
              </span>
              <span className="sm:hidden">AWS Certified</span>
            </a>
          </div>
          {/* Slogan */}
          <div className="text-xs sm:text-sm text-blue-600 mt-2 italic font-medium tracking-wide text-center sm:text-left">
            "{data.slogan}"
          </div>
          {/* Resume Link */}
          <div className="text-xs text-slate-500 mt-2 flex justify-center sm:justify-start">
            <a
              href={data.website}
              className="hover:text-blue-600 flex items-center gap-1 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-blue-500">🔗</span>{" "}
              {data.website.replace("https://", "")}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-2 md:mt-0 text-xs sm:text-sm text-center md:text-right space-y-1">
        <div className="text-gray-700 font-semibold flex items-center justify-center md:justify-end gap-1">
          📍 {data.location}
        </div>
        <div className="flex items-center justify-center md:justify-end gap-1">
          📞
          <a href={`tel:${data.phone}`} className="text-blue-600 underline">
            {data.phone}
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-1">
          📧
          <a href={`mailto:${data.email}`} className="text-blue-600 underline">
            {data.email}
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-1">
          GitHub:
          <a
            href={`https://github.com/${data.github}`}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.github}
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-1">
          LinkedIn:
          <a
            href={`https://${data.linkedin}`}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            in/peerawet-chursuk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
