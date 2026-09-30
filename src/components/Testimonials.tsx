import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anjali Tiwari',
    achievement: 'NEET AIR 12',
    text: 'K.S Coaching Institutes gave me the confidence I needed. The personalized mentorship from Dr. Rajesh and the structured approach made all the difference in my preparation.',
    img: '/media/testimonial-1.jpg',
  },
  {
    name: 'Ritesh Dubey',
    achievement: 'JEE Advanced AIR 9',
    text: 'What sets K.S apart is their focus on understanding concepts deeply rather than just memorization. The faculty treated me like family, not just a student number.',
    img: '/media/testimonial-2.jpg',
  },
  {
    name: 'Savita Patel',
    achievement: 'SBI PO 2024',
    text: 'I had struggled before joining K.S. Their banking program gave me a fresh perspective. Every doubt session was incredibly valuable.',
    img: '/media/testimonial-3.jpg',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

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

  const go = (dir: number) => {
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section ref={sectionRef} className="section-pad bg-paper-100">
      <div className="container-max">
        <div className="text-center mb-10 animate-on-scroll">
          <span className="section-label">Student Voices</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mt-3">
            Stories From Our
            <span className="block">Community</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto animate-on-scroll">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-soft border border-paper-200 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="font-body text-ink-800 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 italic">
              "{t.text}"
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                key={t.name}
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gold-400 animate-fade-in"
              />
              <div>
                <p className="font-heading font-semibold text-ink-950 text-sm sm:text-base">{t.name}</p>
                <p className="font-body text-ink-600 text-xs sm:text-sm">{t.achievement}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => go(-1)}
                className="p-2 hover:bg-paper-100 rounded-lg transition-colors"
              >
                <ChevronLeft size={20} className="text-ink-700" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-6 bg-gold-500' : 'bg-ink-200'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                className="p-2 hover:bg-paper-100 rounded-lg transition-colors"
              >
                <ChevronRight size={20} className="text-ink-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
