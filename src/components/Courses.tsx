import { useEffect, useRef } from 'react';
import { Clock, BookOpen, Users, Trophy, Zap, LayoutGrid } from 'lucide-react';

const courses = [
  {
    icon: Zap,
    name: 'NEET',
    desc: 'Medical Entrance Examination',
    duration: '1-2 Years',
    features: ['Biology Deep Dive', '500+ Mock Tests', 'PCB Expert Faculty'],
  },
  {
    icon: Trophy,
    name: 'JEE',
    desc: 'Engineering Entrance Examination',
    duration: '1-2 Years',
    features: ['Maths / Physics / Chemistry', 'IIT-JEE Pattern', '500+ Practice Sets'],
  },
  {
    icon: BookOpen,
    name: 'Foundation',
    desc: 'Class 8-10 Preparation',
    duration: '1 Year',
    features: ['Early NEET/JEE Base', 'Olympiad Training', 'Monthly Reports'],
  },
  {
    icon: LayoutGrid,
    name: 'SSC',
    desc: 'Staff Selection Commission',
    duration: '6-12 Months',
    features: ['CGL / CHSL / MTS', 'GK + Reasoning', 'Previous Year Papers'],
  },
  {
    icon: Users,
    name: 'Banking',
    desc: 'IBPS / SBI Exams',
    duration: '6 Months',
    features: ['IBPS PO/Clerk', 'Quant & Reasoning', 'Interview Prep'],
  },
  {
    icon: LayoutGrid,
    name: 'Railway',
    desc: 'RRB / NTPC Exams',
    duration: '4-6 Months',
    features: ['RRB NTPC / Group D', 'Full Test Series', 'Study Material'],
  },
];

export default function Courses() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="programs" ref={sectionRef} className="section-pad bg-paper-100">
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label">Academic Programs</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mt-3 mb-4">
            Courses Tailored for
            <span className="block">Every Ambition</span>
          </h2>
          <p className="font-body text-ink-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Structured programs designed by experts to help you master each exam's unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {courses.map((course, i) => (
            <div
              key={course.name}
              className="animate-on-scroll bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-soft border-t-2 border-t-gold-500 border-x border-b border-paper-200 hover:shadow-warm transition-all duration-300 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <course.icon size={28} className="text-ink-800" />
                <span className="text-xs font-heading font-semibold text-ink-600 bg-paper-100 px-2 sm:px-3 py-1 rounded-lg flex items-center gap-1">
                  <Clock size={12} />
                  {course.duration}
                </span>
              </div>
              <h3 className="font-heading font-bold text-ink-950 text-xl sm:text-2xl mb-1">{course.name}</h3>
              <p className="font-body text-ink-600 text-xs sm:text-sm mb-4 sm:mb-5">{course.desc}</p>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {course.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-ink-700 text-xs sm:text-sm font-body">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline w-full group-hover:bg-ink-800 group-hover:text-white"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
