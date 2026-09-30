import { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const courses = ['NEET', 'JEE', 'Foundation', 'SSC', 'Banking', 'Railway'];

export default function AdmissionCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', course: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.course) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="demo" ref={sectionRef} className="section-pad bg-ink-950 text-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-on-scroll">
            <span className="text-gold-400 text-xs font-heading font-semibold tracking-widest uppercase">Get Started</span>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl md:text-5xl mt-3 mb-4 sm:mb-5 leading-tight">
              Let's Discuss Your
              <span className="block">Academic Journey</span>
            </h2>
            <p className="font-body text-white/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md">
              Book a free consultation with our academic advisors. We'll help you craft the perfect learning path.
            </p>
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="font-body text-xs sm:text-sm">No commitment required</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="font-body text-xs sm:text-sm">30-minute personalized session</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="font-body text-xs sm:text-sm">Complete course guidance</span>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-400/40 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <CheckCircle size={32} className="text-gold-400" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl sm:text-2xl mb-2">Demo Scheduled!</h3>
                  <p className="font-body text-white/60 text-xs sm:text-sm">
                    We'll contact you within 2 hours to confirm your session time.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="font-body text-white/50 text-xs font-medium mb-2 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-white/8 border border-white/15 text-white placeholder:text-white/30 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-gold-400/50 focus:bg-white/12 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-body text-white/50 text-xs font-medium mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      className="w-full bg-white/8 border border-white/15 text-white placeholder:text-white/30 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-gold-400/50 focus:bg-white/12 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-body text-white/50 text-xs font-medium mb-2 block">Program Interest</label>
                    <select
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      required
                      className="w-full bg-white/8 border border-white/15 text-white rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-gold-400/50 focus:bg-white/12 transition-all appearance-none"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" disabled>Select a program</option>
                      {courses.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-ink-950 font-heading font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 text-sm"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Schedule Demo
                      </>
                    )}
                  </button>
                  <p className="font-body text-white/30 text-xs text-center">
                    We respect your privacy and won't spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
