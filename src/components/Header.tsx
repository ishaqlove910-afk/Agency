import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", hash: "#services" },
  { label: "Expert", to: "/experts" },
  { label: "Work", hash: "#portfolio" },
  { label: "Process", hash: "#process" },
  { label: "Contact", hash: "#contact" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="font-mono text-xl font-bold tracking-widest text-foreground">
          NEXUS
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.to) {
              return (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `link-underline text-sm font-medium ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    } hover:text-foreground transition-colors duration-300`
                  }
                >
                  {link.label}
                </NavLink>
              );
            }

            return (
              <a
                key={link.label}
                href={link.hash}
                onClick={(event) => {
                  if (location.pathname !== "/") {
                    event.preventDefault();
                    navigate(`/${link.hash}`);
                  }
                }}
                className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            );
          })}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Get Free Audit</a>
          </Button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-500 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            if (link.to) {
              return (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </NavLink>
              );
            }

            return (
              <a
                key={link.label}
                href={link.hash}
                onClick={(event) => {
                  setIsOpen(false);
                  if (location.pathname !== "/") {
                    event.preventDefault();
                    navigate(`/${link.hash}`);
                  }
                }}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            );
          })}
          <Button variant="hero" size="lg" className="mt-2" asChild>
            <a href="#contact">Get Free Audit</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
