'use client';
import { singlePageApps } from '@/data/single-page-apps';
import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

const colorMap: Record<string, string> = {
  cyan: 'var(--accent-cyan)',
  violet: '#a78bfa',
  pink: 'var(--accent-pink)',
  green: 'var(--accent-green)',
  amber: '#fbbf24',
};

export default function SinglePageAppsPage() {
  const [activeAppUrl, setActiveAppUrl] = useState<string | null>(null);

  // Function to open the modal
  const handleOpenApp = (url: string) => {
    setActiveAppUrl(url);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close the modal
  const handleCloseApp = () => {
    setActiveAppUrl(null);
    // Restore background scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div style={{ paddingTop: 90, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <section className="grid-bg" style={{ padding: '80px 0 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(139,92,246,0.08), transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">SHOWCASE</div>
          <h1 className="section-title">Single Page <span className="gradient-text">Apps</span></h1>
          <p className="section-subtitle">
            A diverse collection of interactive, focused web applications and tools. Click any card to preview the app directly without leaving this page.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section" style={{ paddingTop: 48, flex: 1 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28, marginBottom: 56 }}>
            {singlePageApps.map(app => {
              const accentColor = colorMap[app.color] || colorMap.cyan;
              return (
                <div 
                  key={app.id} 
                  className="glass-card" 
                  onClick={() => handleOpenApp(app.url)}
                  style={{ 
                    padding: '28px', 
                    position: 'relative', 
                    overflow: 'hidden', 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'translateY(0)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={e => {
                    const target = e.currentTarget;
                    target.style.transform = 'translateY(-6px)';
                    target.style.boxShadow = `0 12px 30px -10px ${accentColor}30`;
                    target.style.borderColor = `${accentColor}50`;
                  }}
                  onMouseLeave={e => {
                    const target = e.currentTarget;
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                    target.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  {/* Top accent line */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
                  
                  {/* Glow orb */}
                  <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, background: `radial-gradient(circle, ${accentColor}15, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none' }}/>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 14,
                      background: `${accentColor}15`, border: `1px solid ${accentColor}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.8rem'
                    }}>
                      {app.icon}
                    </div>
                  </div>

                  <div style={{ flex: 1, zIndex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>{app.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 20 }}>{app.description}</p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {app.technologies.slice(0, 3).map(tech => (
                        <span key={tech} style={{ 
                          fontSize: '0.73rem', fontFamily: 'var(--font-mono)', fontWeight: 600,
                          padding: '3px 10px', borderRadius: 99, 
                          background: 'rgba(255,255,255,0.03)', color: 'var(--text-secondary)',
                          border: '1px solid var(--border-subtle)'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div style={{ color: accentColor, display: 'flex', padding: 4 }}>
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Iframe Modal Overlay */}
      {activeAppUrl && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999, // Ensure it's above everything including the navbar
          background: 'rgba(2, 8, 23, 0.95)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {/* Modal Header */}
          <div style={{ 
            height: 60, 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            padding: '0 24px',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-card)'
          }}>
            <button 
              onClick={handleCloseApp}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-pink)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              Close App <X size={24} />
            </button>
          </div>

          {/* Iframe Container */}
          <div style={{ flex: 1, width: '100%', position: 'relative' }}>
            {/* Loading placeholder */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', 
              alignItems: 'center', justifyContent: 'center', 
              color: 'var(--text-muted)', zIndex: -1
            }}>
              Loading application...
            </div>
            
            <iframe 
              src={activeAppUrl} 
              style={{ 
                width: '100%', 
                height: '100%', 
                border: 'none',
                background: 'var(--bg-dark)' // To hide the white flash before load if any
              }}
              title="Application Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Inline styles for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
