'use client';
import { techLogos } from '@/data/skills';

export default function TechStack() {
  const doubled = [...techLogos, ...techLogos];

  return (
    <section style={{ padding: '72px 0', overflow: 'hidden', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ marginBottom: 40, textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>TECH STACK</div>
        <h2 className="section-title">
          Tools I <span className="gradient-text">Work With</span>
        </h2>
      </div>

      {/* Marquee track */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 1,
          background: 'linear-gradient(90deg, var(--bg-primary), transparent)',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 1,
          background: 'linear-gradient(-90deg, var(--bg-primary), transparent)',
        }} />

        <div style={{ display: 'flex', gap: 20, width: 'max-content', animation: 'marquee 30s linear infinite' }}>
          {doubled.map((tech, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              padding: '18px 28px', borderRadius: 14,
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-subtle)',
              minWidth: 100, flexShrink: 0,
              transition: 'all 0.3s ease', cursor: 'default',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-glow)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.05)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
              }}
            >
              <span style={{ fontSize: '1.8rem' }}>{tech.icon}</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
