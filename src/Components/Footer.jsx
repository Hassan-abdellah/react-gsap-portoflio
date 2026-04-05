import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-4 py-6">
      {socialLinks.map((item) => (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:drop-shadow-lg hover:drop-shadow-neon-ice transition-all duration-200"
        >
          <img src={item.icon} alt={item.name} className="w-6 h-6" />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
