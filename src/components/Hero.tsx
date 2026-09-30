import { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediately show all hero content
    const items = heroRef.current?.querySelectorAll('.hero-animate');
    items?.forEach((el) => {
      el.classList.add('visible');
    });
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-[calc(100vh-80px)] bg-paper-100 flex items-center py-8 md:py-[150px]">
      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="hero-animate opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
              <span className="section-label">Est. 2009 · Delhi's Trusted Name in Coaching</span>
            </div>

            <div className="hero-animate opacity-0 animate-fade-up" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-ink-950 leading-[1.1]">
                Where Every Rank
                <span className="block text-gradient-warm italic">Is Earned, Not Given</span>
              </h1>
            </div>

            <div className="hero-animate opacity-0 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <p className="font-body text-ink-700 text-base sm:text-lg leading-relaxed max-w-xl">
                K.S Coaching Institutes prepares NEET, JEE and competitive-exam aspirants through expert faculty, disciplined mentorship, and a results record built over 15 years.
              </p>
            </div>

            <div className="hero-animate opacity-0 flex flex-col sm:flex-row flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
              <button
                onClick={() => document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-sm"
              >
                Book a Free Demo
              </button>
              <button
                onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-sm"
              >
                Explore Programs
              </button>
            </div>
          </div>

          {/* Right — Campus Reel */}
          <div className="hero-animate opacity-0 animate-fade-up flex justify-center lg:justify-end" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] mb-6">
              <div className="relative aspect-[9/16] rounded-[28px] shadow-warm ring-1 ring-gold-500/40 img-reveal visible">
                <video
                  src="/media/hero-reel.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="A glimpse of campus life at K.S Coaching Institutes"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-ink-950/10" />

                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-ink-950/70 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  <span className="font-heading text-gold-300 text-[10px] sm:text-xs tracking-wide">Live from Campus</span>
                </div>
              </div>

              {/* Floating card overlay */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-warm p-3 sm:p-4 border-t-2 border-gold-500">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={16} className="text-gold-600 shrink-0" />
                  <span className="font-heading font-semibold text-ink-950 text-xs sm:text-sm">Recognized Excellence</span>
                </div>
                <p className="font-body text-ink-600 text-[11px] sm:text-xs leading-snug">Trusted by leading educational bodies for academic rigor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
