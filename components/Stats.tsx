'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 1, suffix: '+', label: 'Year Experience', icon: '🎯' },
  { value: 20, suffix: '+', label: 'Projects Shipped', icon: '🚀' },
  { value: 15, suffix: '+', label: 'Technologies', icon: '⚡' },
  { value: 10, suffix: '+', label: 'Happy Clients', icon: '⭐' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(interval); }
          else setCount(start);
        }, 40);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, textAlign: 'center' }}>
          {stats.map(stat => (
            <div key={stat.label} style={{ padding: '24px 16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>{stat.icon}</div>
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                lineHeight: 1,
                marginBottom: 8,
              }} className="gradient-text">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
