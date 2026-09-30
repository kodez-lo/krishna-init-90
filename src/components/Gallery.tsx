import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const images = [
  '/media/gallery-1.jpg',
  '/media/gallery-2.jpg',
  '/media/gallery-3.jpg',
  '/media/gallery-4.jpg',
  '/media/gallery-5.jpg',
  '/media/gallery-6.jpg',
  '/media/gallery-7.jpg',
  '/media/gallery-8.jpg',
];

const heights = ['h-48', 'h-40', 'h-52', 'h-44', 'h-48', 'h-40', 'h-56', 'h-44'];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

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

  const cols = [0, 1, 2, 3].map((ci) => images.filter((_, i) => i % 4 === ci));
  const colHeights = [0, 1, 2, 3].map((ci) => heights.filter((_, i) => i % 4 === ci));

  return (
    <section ref={sectionRef} className="section-pad bg-white">
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label">Campus Life</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mt-3 mb-4">
            A Space Designed
            <span className="block">For Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-2 sm:gap-3">
              {col.map((img, i) => (
                <div
                  key={img}
                  className={`animate-on-scroll img-reveal ${colHeights[ci][i]} rounded-lg sm:rounded-2xl cursor-pointer group shadow-soft border border-paper-200`}
                  style={{ transitionDelay: `${(ci * col.length + i) * 50}ms` }}
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img}
                    alt="Campus"
                    className="transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/30 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="relative max-w-2xl sm:max-w-4xl max-h-screen p-4 sm:p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/15 rounded-lg flex items-center justify-center text-white hover:bg-white/25 transition-colors"
            >
              <X size={18} />
            </button>
            <img
              src={lightbox}
              alt="Gallery"
              className="max-h-[88vh] max-w-full rounded-xl sm:rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
