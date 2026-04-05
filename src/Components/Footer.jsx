import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-6">
      <ul className="flex gap-4">
        {socialLinks.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:drop-shadow-lg hover:drop-shadow-neon-ice transition-all duration-200"
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
            </a>
          </li>
        ))}
      </ul>

      <p className="text-ghost-white">
        Built by{" "}
        <span className="font-bold text-tropical-teal">Hassan Abdellah</span>
      </p>
    </footer>
  );
};

export default Footer;
