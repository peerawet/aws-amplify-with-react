interface PersonalInfo {
  name: string;
  title: string;
  slogan: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  website: string;
  profileImage: string;
}

interface HeaderProps {
  data: PersonalInfo;
}

const Header = ({ data }: HeaderProps) => {
  return (
    <header className="flex items-center flex-row items-end justify-between border-b pb-6 px-10 pt-8 bg-gradient-to-r from-slate-50 via-blue-50 to-purple-50">
      <div className="flex items-center gap-6">
        <img
          src={data.profileImage}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg bg-gray-400"
        />
        <div>
          <h1 className="text-4xl font-bold tracking-tight leading-tight text-slate-800 flex items-center gap-3">
            <span className="text-blue-600">💻</span> {data.name}
          </h1>
          <div className="text-lg text-slate-600 mt-2 flex items-center gap-2 font-semibold">
            <span className="text-emerald-600">💼</span> {data.title}
          </div>
          {/* AWS Certification */}
          <div className="text-sm mt-2 font-semibold flex items-center gap-2">
            <a
              href="https://www.credly.com/badges/ebd07b99-ea7c-42eb-b518-daf21e2aafd4/public_url?fbclid=IwY2xjawMnnnJleHRuA2FlbQIxMABicmlkETFRbTVwbUxNYldJQ0hNUmlDAR4eKvLyqLYxbGTJPoJ-TAAS-zNFubKAic3xMJ_U6JtbNYkz4nFohInlkldgAQ_aem_apr_0xr86vhfu8ZedmVbYg"
              className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors duration-200 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-orange-500">☁️</span> AWS Certified
              Developer – Associate
            </a>
          </div>
          {/* Slogan */}
          <div className="text-sm text-blue-600 mt-2 italic font-medium tracking-wide">
            "{data.slogan}"
          </div>
          {/* Resume Link */}
          <div className="text-xs text-slate-500 mt-2">
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
      <div className="mt-0 text-sm text-right space-y-1">
        <div className="text-gray-700 font-semibold flex items-center gap-1">
          📍 {data.location}
        </div>
        <div className="flex items-center gap-1">
          📞
          <a href={`tel:${data.phone}`} className="text-blue-600 underline">
            {data.phone}
          </a>
        </div>
        <div className="flex items-center gap-1">
          📧
          <a href={`mailto:${data.email}`} className="text-blue-600 underline">
            {data.email}
          </a>
        </div>
        <div className="flex items-center gap-1">
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
      </div>
    </header>
  );
};

export default Header;
