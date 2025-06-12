import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#chyll", label: "Why Chyll?" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section && (section as HTMLElement).offsetTop <= scrollPos) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 z-50 transform -translate-x-1/2 pointer-events-none">
      <nav className="pointer-events-auto bg-gray-100/60 shadow border border-gray-200 rounded-full px-4 py-2 flex gap-4 items-center backdrop-blur-md">
        {navLinks.map((link) => {
          const isActive = active === link.href;

          return (
            <a
              key={link.href}
              href={link.href}
              className={`px-2 py-1 rounded-full font-medium transition duration-200 justify-center items-center ${
                isActive
                  ? "bg-gray-300 text-black font-semibold"
                  : "text-gray-700 hover:bg-gray-300 hover:text-black"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
