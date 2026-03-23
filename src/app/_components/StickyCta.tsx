'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroForm = document.getElementById('hero-form');
    if (!heroForm) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky CTA when the hero form is NOT visible
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroForm);

    return () => observer.disconnect();
  }, []);

  function handleClick() {
    const target = document.getElementById('hero-form');
    target?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-[var(--background)]/95 backdrop-blur-sm border-t border-[var(--border)] px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <Button
          onClick={handleClick}
          size="lg"
          className="w-full font-semibold"
        >
          Solicitar demonstração
        </Button>
      </div>
    </div>
  );
}
