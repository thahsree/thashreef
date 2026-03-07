'use client';
import { businessWebsites } from '@/data/business-websites';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const colorMap: Record<string, string> = {
  cyan: 'var(--accent-cyan)',
  violet: '#a78bfa',
  pink: 'var(--accent-pink)',
  green: 'var(--accent-green)',
  amber: '#fbbf24',
};

export default function BusinessWebsitesSection() {
  // Take only the first 4 for the home page showcase
  const featuredSites = businessWebsites.slice(0, 4);

  return (
    <section className="section grid-bg" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.06), transparent 60%)', pointerEvents: 'none' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="section-label">EXPERTISE</div>
            <h2 className="section-title">Business <span className="gradient-text">Websites</span></h2>
            <p className="section-subtitle" style={{ maxWidth: 500, margin: 0 }}>
              A curated selection of high-performance, conversion-optimized business websites tailored for diverse industries.
            </p>
          </div>
          
          <Link href="/business-websites" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Show All Websites <ArrowRight size={18} />
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24
        }}>
          {featuredSites.map((site, i) => {
            const accentColor = colorMap[site.color] || colorMap.cyan;
            
            return (
              <div 
                key={site.id} 
                className="glass-card" 
                style={{ 
                  padding: 24, 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
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
                  margin: '-24px -24px 24px -24px', 
                  height: 190, 
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

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, zIndex: 1, marginTop: -8 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${accentColor}15`, border: `1px solid ${accentColor}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}>
                    {site.icon}
                  </div>
                  <Link href="/business-websites" title="View Details" style={{ color: 'var(--text-muted)', padding: 8, background: 'rgba(255,255,255,0.03)', borderRadius: '50%', border: '1px solid var(--border-subtle)' }}>
                    <ExternalLink size={18} />
                  </Link>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 8, zIndex: 1 }}>
                  {site.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, flex: 1, marginBottom: 20, zIndex: 1 }}>
                  {site.description}
                </p>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', zIndex: 1 }}>
                  {site.technologies.slice(0, 3).map(tech => (
                    <span key={tech} style={{ 
                      fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 600,
                      padding: '3px 8px', borderRadius: 99, 
                      background: 'rgba(255,255,255,0.03)', color: 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Global styles for hover scaling the card images */}
      <style>{`
        .glass-card:hover .card-image {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
