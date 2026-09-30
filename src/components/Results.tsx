import { useEffect, useRef, useState } from 'react';
import { X, Award } from 'lucide-react';

const students = [
  {
    name: 'Arjun Mehta',
    rank: 'AIR 1',
    exam: 'NEET 2024',
    college: 'AIIMS New Delhi',
    img: '/media/result-1.jpg',
  },
  {
    name: 'Sneha Kapoor',
    rank: 'AIR 7',
    exam: 'JEE Advanced 2024',
    college: 'IIT Bombay',
    img: '/media/result-2.jpg',
  },
  {
    name: 'Rohan Verma',
    rank: 'AIR 14',
    exam: 'NEET 2024',
    college: 'AIIMS Mumbai',
    img: '/media/result-3.jpg',
  },
  {
    name: 'Divya Singh',
    rank: 'AIR 22',
    exam: 'JEE Mains 2024',
    college: 'NIT Trichy',
    img: '/media/result-4.jpg',
  },
  {
    name: 'Karthik Rajan',
    rank: 'AIR 3',
    exam: 'SSC CGL 2024',
    college: 'Income Tax Dept.',
    img: '/media/result-5.jpg',
  },
  {
    name: 'Pooja Nair',
    rank: 'AIR 11',
    exam: 'NEET 2024',
    college: 'JIPMER Pondicherry',
    img: '/media/result-6.jpg',
  },
];

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<(typeof students)[0] | null>(null);

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
    <section id="achievements" ref={sectionRef} className="section-pad bg-white">
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label">Student Achievements</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mt-3 mb-4">
            Our Top Achievers
          </h2>
          <p className="font-body text-ink-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            These stories represent the dedication, guidance, and support that defines the K.S Coaching Institutes experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {students.map((s, i) => (
            <div
              key={s.name}
              className="animate-on-scroll bg-paper-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-soft border border-paper-200 cursor-pointer hover:shadow-warm transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setActive(s)}
            >
              <div className="relative h-40 sm:h-48 animate-on-scroll img-reveal">
                <img
                  src={s.img}
                  alt={s.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-ink-950/90 border border-gold-500/50 px-2 sm:px-3 py-1 rounded-full">
                  <span className="font-tabular font-semibold text-gold-400 text-xs sm:text-sm">{s.rank}</span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="font-heading font-semibold text-ink-950 text-sm sm:text-base">{s.name}</p>
                <p className="font-body text-ink-600 text-xs sm:text-sm mt-1">{s.exam}</p>
                <p className="font-body text-ink-500 text-xs mt-0.5">{s.college}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox-overlay" onClick={() => setActive(null)}>
          <div
            className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img src={active.img} alt={active.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setActive(null)}
                className="absolute top-2 sm:top-3 right-2 sm:right-3 w-8 h-8 bg-ink-800 text-white rounded-full flex items-center justify-center hover:bg-ink-700 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award size={22} className="text-gold-600" />
                <div>
                  <p className="font-heading font-bold text-ink-950 text-base sm:text-lg">{active.name}</p>
                  <p className="font-body text-ink-600 text-xs sm:text-sm">{active.exam}</p>
                </div>
              </div>
              <div className="bg-paper-50 rounded-xl p-4 border border-paper-200">
                <p className="font-body text-ink-700 text-xs sm:text-sm">
                  <span className="font-semibold">Achievement:</span> {active.rank}
                </p>
                <p className="font-body text-ink-700 text-xs sm:text-sm mt-2">
                  <span className="font-semibold">College:</span> {active.college}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
