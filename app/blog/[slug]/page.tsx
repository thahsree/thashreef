import { blogs } from '@/data/blogs';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return blogs.map(blog => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Thashreef's Blog`,
    description: blog.excerpt,
  };
}

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inCode = false;
  let codeLines: string[] = [];
  let codeKey = 0;

  lines.forEach((line, i) => {
    if (line.startsWith('```')) {
      if (inCode) {
        elements.push(
          <pre key={`code-${codeKey++}`} style={{
            background: 'rgba(0,212,255,0.03)', border: '1px solid var(--border-subtle)',
            borderRadius: 12, padding: '20px 24px', overflowX: 'auto', marginBottom: 24,
          }}>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', whiteSpace: 'pre' }}>
              {codeLines.join('\n')}
            </code>
          </pre>
        );
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      return;
    }
    if (inCode) { codeLines.push(line); return; }

    if (line.startsWith('# ')) {
      elements.push(<h1 key={i} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 24, marginTop: 8 }}><span className="gradient-text">{line.slice(2)}</span></h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 16, marginTop: 40, color: 'var(--text-primary)', borderLeft: '3px solid var(--accent-cyan)', paddingLeft: 16 }}>{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, marginBottom: 12, marginTop: 28, color: 'var(--accent-cyan)' }}>{line.slice(4)}</h3>);
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} style={{ borderLeft: '4px solid var(--accent-violet)', paddingLeft: 20, marginBottom: 20, marginTop: 8 }}>
          <p style={{ color: 'var(--accent-cyan)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.7 }}>{line.slice(2)}</p>
        </blockquote>
      );
    } else if (line.startsWith('- ')) {
      elements.push(<li key={i} style={{ color: 'var(--text-secondary)', paddingLeft: 8, marginBottom: 6, lineHeight: 1.7, listStyle: 'disc' }}>{parseBold(line.slice(2))}</li>);
    } else if (/^\d+\./.test(line)) {
      elements.push(<li key={i} style={{ color: 'var(--text-secondary)', paddingLeft: 8, marginBottom: 6, lineHeight: 1.7, listStyle: 'decimal' }}>{parseBold(line.replace(/^\d+\.\s/, ''))}</li>);
    } else if (line.startsWith('|')) {
      elements.push(
        <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, marginBottom: 2 }}>
          {line.split('|').filter(c => c.trim() && !c.trim().startsWith('-')).map((cell, ci) => (
            <div key={ci} style={{
              padding: '8px 16px', background: ci === 0 ? 'rgba(0,212,255,0.05)' : 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)', fontSize: '0.88rem',
            }}>{cell.trim()}</div>
          ))}
        </div>
      );
    } else if (line.trim() === '') {
      elements.push(<div key={i} style={{ height: 12 }} />);
    } else if (!line.startsWith('---')) {
      elements.push(<p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>{parseBold(line)}</p>);
    }
  });
  return elements;
}

function parseBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i} style={{ fontFamily: 'var(--font-mono)', background: 'rgba(0,212,255,0.08)', color: 'var(--accent-cyan)', padding: '2px 7px', borderRadius: 5, fontSize: '0.88em' }}>{part.slice(1, -1)}</code>;
    return part;
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) notFound();

  const related = blogs.filter(b => b.slug !== slug && b.category === blog.category).slice(0, 2);

  return (
    <div style={{ paddingTop: 90 }}>
      {/* Header */}
      <section className="grid-bg" style={{ padding: '64px 0 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.08), transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: 24, transition: 'color 0.2s' }}
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 20 }}>
            <span style={{ padding: '4px 14px', borderRadius: 99, background: 'rgba(0,212,255,0.12)', color: 'var(--accent-cyan)', border: '1px solid rgba(0,212,255,0.3)', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
              <Tag size={11} /> {blog.category}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <Clock size={13} /> {blog.readTime} min read
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <Calendar size={13} /> {new Date(blog.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            {blog.title}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>{blog.excerpt}</p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
            {blog.tags.map(tag => (
              <span key={tag} style={{ padding: '3px 12px', borderRadius: 99, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                #{tag.replace(/\s/g, '')}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <article style={{ listStyle: 'inside' }}>
            {renderMarkdown(blog.content)}
          </article>

          {/* Author */}
          <div className="glass-card" style={{ padding: '24px 28px', marginTop: 48, display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font-heading)',
            }}>T</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>Thashreef</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                MERN Stack & Full Stack Developer at Zysk Technologies. Writing about web dev, mobile apps, and career pivots.
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div style={{ marginTop: 56 }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: 24 }}>
                Related <span className="gradient-text">Articles</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                {related.map(r => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="glass-card" style={{ padding: '20px', display: 'flex', gap: 14, alignItems: 'center' }}>
                      <span style={{ fontSize: '2rem', flexShrink: 0 }}>{r.coverEmoji}</span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: 4, lineHeight: 1.4 }}>{r.title}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{r.readTime} min read</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
