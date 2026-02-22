"use client"
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/thashreef', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/thashreef', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:thashreef@email.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '60px 0 32px',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 240 }}>
              MERN Stack Developer crafting scalable web apps, mobile experiences, and AI-driven solutions.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                  width: 40, height: 40, borderRadius: 10, border: '1px solid var(--border-subtle)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', transition: 'all 0.2s', textDecoration: 'none',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-cyan)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--accent-cyan)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-cyan)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 20 }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent-cyan)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 16 }}>Let&apos;s Build Together</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 20 }}>
              Have a project in mind? I&apos;m available for freelance work and open to exciting opportunities.
            </p>
            <a href="/contact" className="btn-primary" style={{ fontSize: '0.88rem', padding: '10px 20px' }}>
              <Mail size={16} /> Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: 24,
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Thashreef. All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
}
