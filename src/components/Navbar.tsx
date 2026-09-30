import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-soft' : 'bg-white'
      }`}
    >
      <div className="container-max flex items-center justify-between py-5">
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-full gold-seal">
            <span className="font-heading font-semibold text-sm tracking-tight">KS</span>
          </div>
          <span className="font-heading font-semibold text-ink-950 text-lg tracking-tight">
            K.S Coaching Institutes
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-sm font-body text-ink-700 hover:text-ink-950 transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNav('#demo')}
          className="hidden md:block btn-primary text-sm"
        >
          Book a Demo
        </button>

        <button
          className="md:hidden p-2 text-ink-950"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-paper-200">
          <div className="container-max py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-2.5 text-ink-700 hover:text-ink-950 font-body text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#demo')}
              className="btn-primary w-full text-sm mt-2"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
