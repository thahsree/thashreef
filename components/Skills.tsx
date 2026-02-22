'use client';
import { skillCategories } from '@/data/skills';
import { useState } from 'react';

const colorMap: Record<string, { bg: string; border: string; text: string; header: string }> = {
  cyan: { bg: 'rgba(0,212,255,0.05)', border: 'rgba(0,212,255,0.2)', text: 'var(--accent-cyan)', header: 'var(--accent-cyan)' },
  violet: { bg: 'rgba(124,58,237,0.05)', border: 'rgba(124,58,237,0.2)', text: '#a78bfa', header: '#a78bfa' },
  pink: { bg: 'rgba(236,72,153,0.05)', border: 'rgba(236,72,153,0.2)', text: 'var(--accent-pink)', header: 'var(--accent-pink)' },
  green: { bg: 'rgba(16,185,129,0.05)', border: 'rgba(16,185,129,0.2)', text: 'var(--accent-green)', header: 'var(--accent-green)' },
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="section grid-bg" id="skills">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>EXPERTISE</div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A curated set of tools I use to build production-grade applications — from pixel-perfect UIs to scalable backends.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {skillCategories.map(cat => {
            const c = colorMap[cat.color] || colorMap.cyan;
            return (
              <div key={cat.id} className="glass-card" style={{ padding: '28px', background: c.bg, borderColor: c.border }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <span style={{ fontSize: '1.6rem' }}>{cat.icon}</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: c.header }}>{cat.title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        display: 'inline-block', padding: '5px 14px',
                        borderRadius: 99, fontSize: '0.82rem', fontWeight: 600,
                        fontFamily: 'var(--font-mono)',
                        border: `1px solid ${hoveredSkill === skill ? c.text : 'rgba(148,163,184,0.12)'}`,
                        background: hoveredSkill === skill ? `${c.bg}` : 'rgba(255,255,255,0.02)',
                        color: hoveredSkill === skill ? c.text : 'var(--text-secondary)',
                        transition: 'all 0.2s ease', cursor: 'default',
                        transform: hoveredSkill === skill ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
