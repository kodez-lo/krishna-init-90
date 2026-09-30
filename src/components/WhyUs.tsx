import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  'Expert Faculty with 10+ Years Experience',
  'Personal Mentorship & Guidance',
  'Small Batch Sizes for Individual Attention',
  'Weekly Assessments & Progress Tracking',
  'Comprehensive Career Counseling',
  'Scholarship & Financial Assistance Programs',
];

export default function WhyUs() {
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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left — Image */}
          <div className="animate-on-scroll img-reveal rounded-2xl sm:rounded-3xl shadow-warm h-64 sm:h-80 md:h-96">
            <img
              src="/media/whyus-campus.jpg"
              alt="Students learning at K.S Coaching Institutes"
            />
          </div>

          {/* Right — Content */}
          <div className="animate-on-scroll space-y-6">
            <div>
              <span className="section-label">Why Choose K.S</span>
              <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mt-3 mb-4 leading-tight">
                A Complete Learning
                <span className="block">Ecosystem</span>
              </h2>
              <p className="font-body text-ink-700 text-sm sm:text-base md:text-lg leading-relaxed">
                We believe in nurturing not just academic excellence, but also building confident, well-rounded individuals prepared for life's challenges.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-4">
                  <CheckCircle size={22} className="text-gold-600 shrink-0 mt-0.5" />
                  <span className="font-body text-ink-800 text-sm sm:text-base leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary mt-8 text-sm"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
