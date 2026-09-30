import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };

  const info = [
    { icon: MapPin, label: 'Visit Us', value: '42, Rajendra Nagar, New Delhi – 110060' },
    { icon: Phone, label: 'Call Us', value: '+91 98765 43210' },
    { icon: Mail, label: 'Email Us', value: 'admissions@kscoaching.in' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-pad bg-paper-100">
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mt-3">
            We're Here to Help
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-5 animate-on-scroll">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-ink-800 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-ink-950 text-xs sm:text-sm mb-0.5">{item.label}</p>
                  <p className="font-body text-ink-700 text-sm sm:text-base">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-4 sm:px-5 py-2.5 sm:py-3 font-heading font-semibold text-xs sm:text-sm transition-colors"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-xl sm:rounded-2xl h-40 sm:h-48 mt-6 shadow-soft animate-on-scroll img-reveal">
              <img
                src="/media/contact-campus.jpg"
                alt="K.S Coaching Institutes campus"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft border border-paper-200">
            {sent ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-400/40 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-gold-600" />
                </div>
                <h3 className="font-heading font-bold text-ink-950 text-lg sm:text-xl mb-2">Message Received!</h3>
                <p className="font-body text-ink-600 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <h3 className="font-heading font-bold text-ink-950 text-lg sm:text-2xl mb-6">Send us a message</h3>
                <div>
                  <label className="font-body text-ink-700 text-xs sm:text-sm font-medium mb-2 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-paper-50 border border-paper-200 text-ink-950 placeholder:text-ink-400 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-700 focus:ring-1 focus:ring-ink-700/20 transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-ink-700 text-xs sm:text-sm font-medium mb-2 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-paper-50 border border-paper-200 text-ink-950 placeholder:text-ink-400 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-700 focus:ring-1 focus:ring-ink-700/20 transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-ink-700 text-xs sm:text-sm font-medium mb-2 block">Message</label>
                  <textarea
                    placeholder="How can we help?"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-paper-50 border border-paper-200 text-ink-950 placeholder:text-ink-400 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-700 focus:ring-1 focus:ring-ink-700/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 text-sm"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
