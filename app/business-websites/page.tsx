'use client';
import { businessWebsites } from '@/data/business-websites';
import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

const colorMap: Record<string, string> = {
  cyan: 'var(--accent-cyan)',
  violet: '#a78bfa',
  pink: 'var(--accent-pink)',
  green: 'var(--accent-green)',
  amber: '#fbbf24',
};

export default function BusinessWebsitesPage() {
  const [activeSiteUrl, setActiveSiteUrl] = useState<string | null>(null);

  // Function to open the modal
  const handleOpenApp = (url: string) => {
    setActiveSiteUrl(url);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close the modal
  const handleCloseApp = () => {
    setActiveSiteUrl(null);
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
          <h1 className="section-title">Business <span className="gradient-text">Websites</span></h1>
          <p className="section-subtitle">
            A diverse collection of high-performance, responsive business websites tailored for diverse industries. Click any card to preview the site directly without leaving this page.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section" style={{ paddingTop: 48, flex: 1 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28, marginBottom: 56 }}>
            {businessWebsites.map(site => {
              const accentColor = colorMap[site.color] || colorMap.cyan;
              return (
                <div 
                  key={site.id} 
                  className="glass-card" 
                  onClick={() => handleOpenApp(site.url)}
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
                  {/* Image Header */}
                  <div style={{ 
                    margin: '-28px -28px 24px -28px', 
                    height: 200, 
                    position: 'relative', 
                    overflow: 'hidden',
                    borderBottom: '1px solid var(--border-subtle)',
                    borderRadius: '16px 16px 0 0'
                  }}>
                    <div 
                      className="card-image"
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${site.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    {/* Subtle gradient to blend with card */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(2, 8, 23, 1) 0%, rgba(2, 8, 23, 0) 60%)',
                      pointerEvents: 'none'
                    }} />
                    
                    {/* Top-right decorative orb */}
                    <div style={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: 100,
                      height: 100,
                      background: `radial-gradient(circle, ${accentColor}30, transparent 70%)`,
                      borderRadius: '50%',
                      pointerEvents: 'none',
                      mixBlendMode: 'screen'
                    }}/>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, zIndex: 1, marginTop: -12 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 14,
                      background: `${accentColor}15`, border: `1px solid ${accentColor}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.8rem',
                      backdropFilter: 'blur(8px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}>
                      {site.icon}
                    </div>
                  </div>

                  <div style={{ flex: 1, zIndex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>{site.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 20 }}>{site.description}</p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {site.technologies.slice(0, 3).map(tech => (
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
      {activeSiteUrl && (
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
              Close <X size={24} />
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
              Loading website...
            </div>
            
            <iframe 
              src={activeSiteUrl} 
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
        .glass-card:hover .card-image {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
