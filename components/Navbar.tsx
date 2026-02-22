'use client';
import { Code2, Github, Linkedin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(2, 8, 23, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : '1px solid transparent',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Code2 size={20} color="#fff" />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
              <span className="gradient-text">Thas</span>hreef
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{
                padding: '8px 16px',
                borderRadius: 8,
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: pathname === link.href ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                background: pathname === link.href ? 'rgba(0,212,255,0.08)' : 'transparent',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  if (pathname !== link.href) {
                    (e.target as HTMLElement).style.color = 'var(--text-primary)';
                    (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={e => {
                  if (pathname !== link.href) {
                    (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.target as HTMLElement).style.background = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ width: 1, height: 24, background: 'var(--border-subtle)', margin: '0 8px' }} />
            <a href="https://github.com/thashreef" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', padding: 8, borderRadius: 8, display: 'flex' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-cyan)') as unknown as void}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)') as unknown as void}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/thashreef" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', padding: 8, borderRadius: 8, display: 'flex' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0a66c2') as unknown as void}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)') as unknown as void}>
              <Linkedin size={20} />
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: 8, borderRadius: 8 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(2,8,23,0.98)',
        backdropFilter: 'blur(20px)',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column', padding: '100px 32px 32px',
      }}>
        {navLinks.map((link, i) => (
          <Link key={link.href} href={link.href} style={{
            fontSize: '1.6rem', fontWeight: 700, fontFamily: 'var(--font-heading)',
            color: pathname === link.href ? 'var(--accent-cyan)' : 'var(--text-primary)',
            textDecoration: 'none', padding: '16px 0',
            borderBottom: '1px solid var(--border-subtle)',
            animationDelay: `${i * 0.07}s`,
          }}>
            {link.label}
          </Link>
        ))}
        <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
          <a href="https://github.com/thashreef" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/in/thashreef" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
      `}</style>
    </>
  );
}
