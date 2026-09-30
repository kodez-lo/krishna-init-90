import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const faculty = [
  {
    name: 'Dr. Rajesh Nair',
    title: 'Director & Head',
    subjects: 'Physics & Mathematics',
    exp: '18 Years',
    img: '/media/faculty-1.jpg',
    featured: true,
  },
  {
    name: 'Dr. Anita Sharma',
    title: 'Senior Faculty',
    subjects: 'Biology (NEET)',
    exp: '12 Years',
    img: '/media/faculty-2.jpg',
  },
  {
    name: 'Prof. Suresh Kumar',
    title: 'Senior Faculty',
    subjects: 'Chemistry',
    exp: '15 Years',
    img: '/media/faculty-3.jpg',
  },
  {
    name: 'Ms. Priya Mehta',
    title: 'Faculty',
    subjects: 'Mathematics',
    exp: '10 Years',
    img: '/media/faculty-4.jpg',
  },
  {
    name: 'Mr. Kiran Patel',
    title: 'Faculty',
    subjects: 'Reasoning & GA',
    exp: '8 Years',
    img: '/media/faculty-5.jpg',
  },
  {
    name: 'Ms. Deepa Rao',
    title: 'Faculty',
    subjects: 'English & GK',
    exp: '9 Years',
    img: '/media/faculty-6.jpg',
  },
];

const featured = faculty.find((f) => f.featured)!;
const others = faculty.filter((f) => !f.featured);

export default function Faculty() {
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
    <section id="faculty" ref={sectionRef} className="section-pad bg-white">
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label">Our Team</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mt-3 mb-4">
            Faculty of Excellence
          </h2>
        </div>

        {/* Featured Faculty */}
        <div className="bg-paper-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 animate-on-scroll border border-paper-200">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="rounded-xl sm:rounded-2xl h-48 sm:h-64 md:h-80 animate-on-scroll img-reveal">
              <img
                src={featured.img}
                alt={featured.name}
              />
            </div>
            <div>
              <span className="section-label">Director</span>
              <h3 className="section-title text-2xl sm:text-3xl mt-2 mb-2">{featured.name}</h3>
              <p className="text-ink-700 font-semibold text-base sm:text-lg mb-4">{featured.subjects}</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Star size={16} className="text-gold-500" />
                  <span className="font-body text-ink-700 text-sm sm:text-base">{featured.exp} of teaching experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star size={16} className="text-gold-500" />
                  <span className="font-body text-ink-700 text-sm sm:text-base">4,200+ students successfully guided</span>
                </div>
              </div>
              <blockquote className="italic text-ink-800 border-l-4 border-ink-800 pl-4 py-2 text-sm sm:text-base">
                "Education is not about filling minds, but lighting fires. We're here to help each student discover their spark."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Other Faculty */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {others.map((f, i) => (
            <div
              key={f.name}
              className="animate-on-scroll bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-soft border border-paper-200 hover:shadow-warm transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-32 sm:h-40 animate-on-scroll img-reveal">
                <img src={f.img} alt={f.name} />
              </div>
              <div className="p-3 sm:p-4">
                <p className="font-heading font-semibold text-ink-950 text-xs sm:text-sm">{f.name}</p>
                <p className="font-body text-ink-600 text-xs mt-1">{f.subjects}</p>
                <div className="flex items-center gap-1 text-ink-700 text-xs mt-2 pt-2 border-t border-paper-200">
                  <Star size={10} className="text-gold-500" />
                  {f.exp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
