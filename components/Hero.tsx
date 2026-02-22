'use client';
import { ArrowRight, ChevronDown, Download, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const roles = ['MERN Stack Developer', 'Full Stack Developer', 'React Native Developer', 'AI Solutions Builder'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 90;
    const pause = isDeleting ? 500 : 2200;

    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
      }, typingSpeed);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="grid-bg" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 90,
    }}>
      {/* Animated orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
          position: 'absolute', top: '-15%', right: '-10%',
          animation: 'float 8s ease-in-out infinite',
        }} />
        <div style={{
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          position: 'absolute', bottom: '-10%', left: '-5%',
          animation: 'float 10s ease-in-out infinite reverse',
        }} />
        <div style={{
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
          position: 'absolute', top: '40%', left: '30%',
          animation: 'float 12s ease-in-out infinite',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 780 }}>
          {/* Availability badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 18px', borderRadius: 99,
            background: 'rgba(16,185,129,0.1)',
            border: '1px solid rgba(16,185,129,0.3)',
            marginBottom: 32, animation: 'fade-in-up 0.5s ease both',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-green)', display: 'inline-block', animation: 'pulse-glow 2s ease infinite' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-green)', fontWeight: 600 }}>Available for Freelance &amp; Full-time</span>
          </div>

          {/* Name */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.1, marginBottom: 8, animation: 'fade-in-up 0.6s ease 0.1s both' }}>
            Hi, I&apos;m <span className="gradient-text">Thashreef</span>
          </h1>

          {/* Dynamic Role */}
          <div style={{ fontSize: 'clamp(1.4rem, 4vw, 2.4rem)', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 24, minHeight: '1.4em', animation: 'fade-in-up 0.6s ease 0.2s both' }}>
            <span style={{ color: 'var(--text-secondary)' }}>A </span>
            <span className="gradient-text-warm">{displayed}</span>
            <span className="cursor-blink" style={{ color: 'var(--accent-cyan)', marginLeft: 2 }}>|</span>
          </div>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--text-secondary)',
            lineHeight: 1.8, maxWidth: 620, marginBottom: 40,
            animation: 'fade-in-up 0.6s ease 0.3s both',
          }}>
            Crafting <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>scalable web apps</span>, immersive <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>mobile experiences</span>, and intelligent <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>AI-powered solutions</span> — with a relentless focus on performance and exceptional user experience.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 56, animation: 'fade-in-up 0.6s ease 0.4s both' }}>
            <Link href="/projects" className="btn-primary">
              View Projects <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Hire Me
            </Link>
            <a href="/cv.pdf" download className="btn-outline" style={{ borderColor: 'rgba(148,163,184,0.3)', color: 'var(--text-secondary)' }}>
              <Download size={16} /> Download CV
            </a>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, animation: 'fade-in-up 0.6s ease 0.5s both' }}>
            <a href="https://github.com/thashreef" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}>
              <Github size={18} /> GitHub
            </a>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--border-subtle)' }} />
            <a href="https://linkedin.com/in/thashreef" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}>
              <Linkedin size={18} /> LinkedIn
            </a>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--border-subtle)' }} />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>📍 Kerala, India</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        color: 'var(--text-muted)', animation: 'float 2.5s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>SCROLL DOWN</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
