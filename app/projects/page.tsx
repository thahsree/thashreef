'use client';
import { projects } from '@/data/projects';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { useMemo, useState } from 'react';

const PROJECTS_PER_PAGE = 4;
const categories = ['all', 'fullstack', 'frontend', 'mobile', 'backend'] as const;

const colorMap: Record<string, string> = {
  cyan: 'var(--accent-cyan)',
  violet: '#a78bfa',
  pink: 'var(--accent-pink)',
  green: 'var(--accent-green)',
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('all');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() =>
    activeCategory === 'all' ? projects : projects.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE);

  const handleCategory = (cat: typeof categories[number]) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <div style={{ paddingTop: 90 }}>
      {/* Header */}
      <section className="grid-bg" style={{ padding: '80px 0 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.08), transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">PORTFOLIO</div>
          <h1 className="section-title">My <span className="gradient-text">Projects</span></h1>
          <p className="section-subtitle">
            A collection of web, mobile, and full-stack projects I&apos;ve built — each solving real problems with clean, production-ready code.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          {/* Category Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => handleCategory(cat)} style={{
                padding: '8px 22px', borderRadius: 99, border: '1.5px solid',
                borderColor: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                background: activeCategory === cat ? 'rgba(0,212,255,0.12)' : 'transparent',
                color: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.88rem',
                cursor: 'pointer', transition: 'all 0.2s', textTransform: 'capitalize',
              }}>
                {cat === 'all' ? '🌐 All' : cat === 'fullstack' ? '🔥 Full Stack' : cat === 'frontend' ? '🖥️ Frontend' : cat === 'mobile' ? '📱 Mobile' : '⚙️ Backend'}
              </button>
            ))}
            <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.85rem', alignSelf: 'center' }}>
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Project Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28, marginBottom: 56 }}>
            {paginated.map(project => {
              const accentColor = colorMap[project.color] || colorMap.cyan;
              return (
                <div key={project.id} className="glass-card" style={{ padding: '28px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  {/* Top accent */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
                  {project.featured && (
                    <div style={{ position: 'absolute', top: 16, left: 16, padding: '3px 10px', borderRadius: 99, fontSize: '0.7rem', fontWeight: 700, background: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}40` }}>
                      ⭐ Featured
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <span style={{ fontSize: '2.4rem' }}>{project.icon}</span>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="View on GitHub" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}>
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" title="View Live" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = accentColor}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}>
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{project.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: 16 }}>{project.description}</p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 16 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {project.tech.map(t => (
                        <span key={t} style={{
                          padding: '3px 10px', borderRadius: 99,
                          fontSize: '0.73rem', fontFamily: 'var(--font-mono)', fontWeight: 600,
                          background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}25`,
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <button onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={page === 1} style={{
                width: 40, height: 40, borderRadius: 10, border: '1px solid var(--border-subtle)',
                background: 'transparent', color: page === 1 ? 'var(--text-muted)' : 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: page === 1 ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
              }}>
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button key={n} onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
                  width: 40, height: 40, borderRadius: 10, border: '1.5px solid',
                  borderColor: page === n ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                  background: page === n ? 'rgba(0,212,255,0.12)' : 'transparent',
                  color: page === n ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}>
                  {n}
                </button>
              ))}

              <button onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={page === totalPages} style={{
                width: 40, height: 40, borderRadius: 10, border: '1px solid var(--border-subtle)',
                background: 'transparent', color: page === totalPages ? 'var(--text-muted)' : 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: page === totalPages ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
              }}>
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
