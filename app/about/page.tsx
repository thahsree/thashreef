import SkillBars from '@/components/SkillBars';
import { Award, Briefcase, Building2, Calendar, Code2, GraduationCap, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Thashreef – From Civil Engineering to Full Stack Development',
  description: 'Learn about Thashreef\'s journey from Civil Engineering to becoming a Full Stack & MERN Developer at Zysk Technologies.',
};

const timeline = [
  {
    year: '2019',
    icon: GraduationCap,
    color: 'var(--accent-green)',
    bg: 'rgba(16,185,129,0.1)',
    title: 'Bachelor of Civil Engineering',
    org: 'University, Kerala',
    desc: 'Graduated with a B.E. in Civil Engineering — building a strong foundation in analytical thinking, structural problem-solving, and project planning.',
  },
  {
    year: '2019–2021',
    icon: Building2,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    title: 'Site Supervisor',
    org: 'Construction Firm, Bangalore',
    desc: "Managed construction sites in Bangalore — overseeing workers, structural quality, and progress tracking. Bangalore's tech environment sparked my curiosity about software.",
  },
  {
    year: '2021',
    icon: Code2,
    color: 'var(--accent-cyan)',
    bg: 'rgba(0,212,255,0.1)',
    title: 'The Career Pivot — Discovered Coding',
    org: 'Self-learning Phase',
    desc: 'Decided to pivot into tech, driven by the belief that software rewards skills over pedigrees. Started with C programming and Java OOP fundamentals.',
  },
  {
    year: '2022',
    icon: Award,
    color: 'var(--accent-violet)',
    bg: 'rgba(124,58,237,0.1)',
    title: 'Entri Elevate Bootcamp — MERN Stack',
    org: 'Entri Elevate',
    desc: 'Completed an intensive MERN Stack bootcamp. Mastered React, Node.js, Express, MongoDB, REST APIs, and deployed multiple full-stack projects.',
  },
  {
    year: '2023',
    icon: Briefcase,
    color: 'var(--accent-pink)',
    bg: 'rgba(236,72,153,0.1)',
    title: 'Frontend Developer',
    org: 'Zysk Technologies, Bangalore',
    desc: 'Joined Zysk Technologies as a Frontend Developer. Built production-grade dashboards, landing pages, and component libraries using React, Next.js, and TypeScript.',
  },
  {
    year: '2024–Present',
    icon: Code2,
    color: 'var(--accent-cyan)',
    bg: 'rgba(0,212,255,0.1)',
    title: 'Full Stack & React Native Developer',
    org: 'Freelance + Open Source',
    desc: 'Expanded into full-stack product development and React Native mobile apps. Building AI-integrated solutions and accepting website orders from clients worldwide.',
  },
];

const highlights = [
  { emoji: '🏗️', label: 'Civil Engineering background — analytical mindset' },
  { emoji: '🌆', label: 'Career began in Bangalore — India\'s tech capital' },
  { emoji: '📖', label: 'Self-taught with Entri Elevate MERN Bootcamp' },
  { emoji: '💼', label: '1 year at Zysk Technologies as Frontend Developer' },
  { emoji: '📱', label: 'Cross-platform mobile apps with React Native' },
  { emoji: '🤖', label: 'Building AI-integrated web applications' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      {/* Hero Banner */}
      <section className="grid-bg" style={{ padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, rgba(124,58,237,0.12), transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">ABOUT ME</div>
          <h1 className="section-title">
            From <span className="gradient-text-warm">Construction</span> to <span className="gradient-text">Code</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 640, lineHeight: 1.8, marginBottom: 32 }}>
            My journey into software development is unconventional — and that&apos;s exactly what makes it powerful. From reading structural blueprints to shipping production-grade web applications, every step has sharpened my problem-solving mindset.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <MapPin size={16} color="var(--accent-cyan)" /> Kerala, India
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Building2 size={16} color="var(--accent-violet)" /> Zysk Technologies (Frontend Dev)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Calendar size={16} color="var(--accent-green)" /> 1+ Year Experience
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
            <div>
              <div className="section-label">MY STORY</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
                Why I <span className="gradient-text">Code</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  I&apos;m <strong style={{ color: 'var(--text-primary)' }}>Thashreef</strong>, a Full Stack Developer who came from a Civil Engineering background. After working as a Site Supervisor in Bangalore, I discovered that software development offered something civil engineering didn&apos;t for me — the ability to build things that scale infinitely and reach people globally.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  What drew me to this field was its radical meritocracy: your <strong style={{ color: 'var(--text-primary)' }}>skills matter more than your degree</strong>. I started from scratch with C programming, moved to Java OOP, then HTML/CSS/JavaScript — and joined the <strong style={{ color: 'var(--text-primary)' }}>Entri Elevate Bootcamp</strong> to master the MERN stack.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  Today, I work as a <strong style={{ color: 'var(--text-primary)' }}>Frontend Developer at Zysk Technologies</strong>, where I&apos;ve built production dashboards, design systems, and client-facing product interfaces. Beyond my day job, I take freelance projects, contribute to open source, and explore AI-integrated web solutions.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  My civil engineering roots aren&apos;t a disadvantage — they&apos;re my superpower. I approach code like a structural engineer: with precision, planning, and an obsession with things that <em style={{ color: 'var(--accent-cyan)' }}>actually work in production</em>.
                </p>
              </div>
            </div>

            <div>
              <div className="section-label">AT A GLANCE</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
                Key <span className="gradient-text">Highlights</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {highlights.map((h, i) => (
                  <div key={i} className="glass-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{h.emoji}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Bars */}
      <SkillBars />

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>JOURNEY</div>
            <h2 className="section-title">My Career <span className="gradient-text">Timeline</span></h2>
          </div>

          <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: 28, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-violet), var(--accent-pink))',
              borderRadius: 99,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: 'flex', gap: 24, position: 'relative' }}>
                    {/* Icon bubble */}
                    <div style={{
                      width: 58, height: 58, borderRadius: '50%', flexShrink: 0,
                      background: item.bg, border: `2px solid ${item.color}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      position: 'relative', zIndex: 1,
                    }}>
                      <Icon size={22} color={item.color} />
                    </div>

                    {/* Content */}
                    <div className="glass-card" style={{ padding: '20px 24px', flex: 1 }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                        <span style={{
                          padding: '3px 12px', borderRadius: 99, fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)', fontWeight: 700,
                          background: item.bg, color: item.color, border: `1px solid ${item.color}40`,
                        }}>
                          {item.year}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.org}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: 8, color: 'var(--text-primary)' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
