'use client';
import { useEffect, useRef, useState } from 'react';

const skills = [
  { label: 'JavaScript / TypeScript', pct: 95, color: '#00d4ff', icon: '⚡' },
  { label: 'React / Next.js', pct: 90, color: '#a78bfa', icon: '⚛️' },
  { label: 'Node.js / Express', pct: 88, color: '#10b981', icon: '🟢' },
  { label: 'React Native', pct: 85, color: '#00d4ff', icon: '📱' },
  { label: 'Python / AI Integration', pct: 82, color: '#ec4899', icon: '🤖' },
  { label: 'MongoDB / Database Design', pct: 85, color: '#f59e0b', icon: '🍃' },
  { label: 'Tailwind CSS / UI Design', pct: 88, color: '#7c3aed', icon: '🎨' },
  { label: 'Cloud Platforms (Vercel / AWS)', pct: 78, color: '#10b981', icon: '☁️' },
];

export default function SkillBars() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }} ref={sectionRef}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>PROFICIENCY</div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skill Levels</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A snapshot of my proficiency across the tools and technologies I use most.
          </p>
        </div>

        <div className="skillbars-grid">
          {skills.map((skill) => (
            <div key={skill.label}>
              {/* Label row */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: 10, gap: 8, flexWrap: 'nowrap', overflow: 'hidden',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{skill.icon}</span>
                  <span style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 600,
                    fontSize: '0.9rem', color: 'var(--text-primary)',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {skill.label}
                  </span>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontWeight: 700,
                  fontSize: '0.88rem', color: skill.color, flexShrink: 0,
                }}>
                  {skill.pct}%
                </span>
              </div>

              {/* Track */}
              <div style={{
                height: 8, borderRadius: 99,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                position: 'relative',
              }}>
                {/* Fill */}
                <div style={{
                  height: '100%',
                  borderRadius: 99,
                  background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  width: animated ? `${skill.pct}%` : '0%',
                  transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1)`,
                  transitionDelay: animated ? `${skills.indexOf(skill) * 80}ms` : '0ms',
                  boxShadow: `0 0 12px ${skill.color}60`,
                  position: 'relative',
                }}>
                  {/* Shimmer */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                    animation: animated ? 'gradient-shift 2s ease infinite' : 'none',
                    backgroundSize: '200% 100%',
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skillbars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px 48px;
        }
        @media (max-width: 640px) {
          .skillbars-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        @media (max-width: 768px) {
          .chatbot-toggle {
            right: 20px !important;
            bottom: 84px !important;
            width: 48px !important;
            height: 48px !important;
          }
          .chatbot-container {
            right: 16px !important;
            bottom: 144px !important;
          }
        }
      `}</style>
    </section>
  );
}
