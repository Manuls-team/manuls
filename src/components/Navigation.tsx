import LogoIcon from "./icons/LogoIcon";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg glassmorphism border-b border-stroke">
      <div className="max-w-[1280px] mx-auto px-4 py-4 pr-[56px] flex">
        {/* Logo */}
        <div className="w-[56px] h-12">
          <LogoIcon className="w-full h-full" />
        </div>

        {/* Menu Items */}
        <ul className="flex items-center max-w-[640px] justify-between mx-auto">
          <li>
            <a
              href="#services"
              className="px-3.5 py-2 text-secondary hover:text-secondary/80 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-3.5 py-2 text-white hover:text-white/80 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-3.5 py-2 text-white hover:text-white/80 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
