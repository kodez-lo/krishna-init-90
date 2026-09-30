import { Mail, Phone, MapPin, Instagram, Github, Send } from 'lucide-react';

const links = {
  programs: ['NEET Preparation', 'JEE Preparation', 'Foundation', 'SSC Preparation', 'Banking', 'Railway'],
  company: ['About Us', 'Faculty', 'Blog', 'Careers', 'Contact'],
  legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy'],
};

export default function Footer() {
  const handleNav = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-max py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full gold-seal">
                <span className="font-heading font-semibold text-sm tracking-tight">KS</span>
              </div>
              <span className="font-heading font-semibold text-white text-lg tracking-tight">K.S Coaching Institutes</span>
            </div>
            <p className="font-body text-white/50 text-xs sm:text-sm leading-relaxed mb-5">
              Where every rank is earned, not given. Personal mentorship, expert faculty, and a results record built since 2009.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Github, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/8 hover:bg-gold-500/20 hover:border-gold-500/40 border border-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-white text-xs sm:text-sm mb-4 tracking-wide">Programs</h4>
            <ul className="space-y-2.5">
              {links.programs.slice(0, 3).map((p) => (
                <li key={p}>
                  <button
                    onClick={() => handleNav('#programs')}
                    className="font-body text-white/50 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white text-xs sm:text-sm mb-4 tracking-wide">Company</h4>
            <ul className="space-y-2.5">
              {links.company.slice(0, 3).map((c) => (
                <li key={c}>
                  <button className="font-body text-white/50 hover:text-white text-xs sm:text-sm transition-colors">
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-xs sm:text-sm mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gold-500 shrink-0 mt-0.5" />
                <span className="font-body text-white/50 text-xs sm:text-sm">42, Rajendra Nagar, New Delhi</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-gold-500 shrink-0" />
                <a href="tel:+919876543210" className="font-body text-white/50 hover:text-white text-xs sm:text-sm transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-gold-500 shrink-0" />
                <a href="mailto:admissions@kscoaching.in" className="font-body text-white/50 hover:text-white text-xs sm:text-sm transition-colors break-all">
                  admissions@kscoaching.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-white/30 text-xs">© 2026 K.S Coaching Institutes. All rights reserved.</p>
            <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center">
              {links.legal.map((l) => (
                <button
                  key={l}
                  className="font-body text-white/30 hover:text-white/50 text-xs transition-colors"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-white/5">
            <p className="font-body text-white/30 text-xs">
              Designed &amp; developed by{' '}
              <a
                href="https://instagram.com/kodez_lo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 font-medium transition-colors"
              >
                Krishna | Kodez
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
