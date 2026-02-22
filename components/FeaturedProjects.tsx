'use client';
import { projects } from '@/data/projects';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const colorMap: Record<string, string> = {
  cyan: 'var(--accent-cyan)',
  violet: '#a78bfa',
  pink: 'var(--accent-pink)',
  green: 'var(--accent-green)',
};

export default function FeaturedProjects() {
  const featured = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section className="section" id="featured-projects">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}>
          <div>
            <div className="section-label">PORTFOLIO</div>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">A selection of projects that showcase my problem-solving and technical depth.</p>
          </div>
          <Link href="/projects" className="btn-outline" style={{ flexShrink: 0 }}>
            All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
          {featured.map(project => {
            const accentColor = colorMap[project.color] || colorMap.cyan;
            return (
              <div key={project.id} className="glass-card" style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
                {/* Top accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <span style={{ fontSize: '2.4rem' }}>{project.icon}</span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}>
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = accentColor}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}>
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', marginBottom: 10, color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 20 }}>
                  {project.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} style={{
                      padding: '3px 10px', borderRadius: 99,
                      fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600,
                      background: `${accentColor}15`, color: accentColor,
                      border: `1px solid ${accentColor}30`,
                    }}>{t}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span style={{ padding: '3px 10px', borderRadius: 99, fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
