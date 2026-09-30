import { useEffect, useRef } from 'react';
import { Download, BookOpen, FileText, ClipboardCheck } from 'lucide-react';

const resources = [
  { icon: FileText, title: 'Study Notes', desc: '800+ comprehensive PDFs', count: '800+' },
  { icon: ClipboardCheck, title: 'Mock Tests', desc: 'Full-length exams with analysis', count: '300+' },
  { icon: BookOpen, title: 'PYQs', desc: '15+ years of solved papers', count: '15+' },
  { icon: Download, title: 'Study Material', desc: 'Formula sheets and guides', count: '500+' },
];

export default function Resources() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-paper-100">
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label">Free Resources</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mt-3 mb-4">
            Quality Learning Materials
            <span className="block">At No Cost</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {resources.map((r, i) => (
            <div
              key={r.title}
              className="animate-on-scroll bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-soft border border-paper-200 hover:shadow-warm transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <r.icon size={28} className="text-gold-600 mb-3 sm:mb-4" />
              <div className="font-heading font-bold text-ink-950 text-2xl sm:text-3xl mb-1">{r.count}</div>
              <h3 className="font-heading font-semibold text-ink-950 text-base sm:text-lg mb-2">{r.title}</h3>
              <p className="font-body text-ink-600 text-xs sm:text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
