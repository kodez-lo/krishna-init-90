import { useEffect, useRef, useState } from 'react';
import { Users, Target, BookOpen, type LucideIcon } from 'lucide-react';

const stats = [
  { icon: Users, value: 5000, label: 'Students Mentored' },
  { icon: Target, value: 95, label: 'Success Rate %' },
  { icon: BookOpen, value: 500, label: 'Selections' },
];

function useCounter(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return count;
}

interface StatItemProps {
  icon: LucideIcon;
  value: number;
  label: string;
  delayMs: number;
  started: boolean;
}

function StatItem({ icon: Icon, value, label, delayMs, started }: StatItemProps) {
  const count = useCounter(value, 2000 + delayMs, started);
  return (
    <div
      className="animate-on-scroll text-center py-8 sm:py-10 px-6"
      style={{ transitionDelay: `${delayMs / 2}ms` }}
    >
      <div className="flex justify-center mb-4">
        <Icon size={26} className="text-gold-400" />
      </div>
      <div className="font-tabular font-semibold text-4xl sm:text-5xl text-white mb-1">
        {count.toLocaleString()}
        {label.includes('%') ? '%' : '+'}
      </div>
      <p className="font-body text-white/60 font-medium text-sm sm:text-base tracking-wide">{label}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-ink-950 py-14 md:py-20">
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label text-gold-400">Our Impact</span>
          <h2 className="section-title text-white text-3xl sm:text-4xl md:text-5xl mt-3 mb-4">
            Transforming Academic
            <span className="block">Journeys Since 2009</span>
          </h2>
          <p className="font-body text-white/50 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Every figure below is a ledger of real students who earned their rank through disciplined guidance and personalised education.
          </p>
        </div>

        <div className="ledger-rule mb-0" />
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-x border-white/10">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              icon={s.icon}
              value={s.value}
              label={s.label}
              delayMs={i * 200}
              started={started}
            />
          ))}
        </div>
        <div className="ledger-rule mt-0" />
      </div>
    </section>
  );
}
