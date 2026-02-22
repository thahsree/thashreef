'use client';
import { blogs } from '@/data/blogs';
import { ChevronLeft, ChevronRight, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const BLOGS_PER_PAGE = 4;

const categoryColors: Record<string, string> = {
  Career: 'var(--accent-cyan)',
  Development: 'var(--accent-violet)',
  Mobile: 'var(--accent-pink)',
  Backend: 'var(--accent-green)',
};

const coverColors: Record<string, string> = {
  cyan: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.05))',
  violet: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(124,58,237,0.05))',
  pink: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(236,72,153,0.05))',
  green: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.05))',
};

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const paginated = blogs.slice((page - 1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE);

  return (
    <div style={{ paddingTop: 90 }}>
      {/* Header */}
      <section className="grid-bg" style={{ padding: '80px 0 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.1), transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">INSIGHTS</div>
          <h1 className="section-title">Developer <span className="gradient-text">Blog</span></h1>
          <p className="section-subtitle">
            Thoughts on web development, career pivots, career advice, and the tools I use every day.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          {/* Blog Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28, marginBottom: 56 }}>
            {paginated.map(blog => {
              const catColor = categoryColors[blog.category] || 'var(--accent-cyan)';
              const bgGradient = coverColors[blog.coverColor] || coverColors.cyan;
              return (
                <Link key={blog.slug} href={`/blog/${blog.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="glass-card" style={{ overflow: 'hidden', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Cover */}
                    <div style={{
                      height: 160, background: bgGradient,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '4rem', position: 'relative',
                    }}>
                      {blog.coverEmoji}
                      <div style={{
                        position: 'absolute', top: 16, left: 16,
                        padding: '4px 12px', borderRadius: 99,
                        background: `${catColor}20`, color: catColor,
                        border: `1px solid ${catColor}40`,
                        fontSize: '0.75rem', fontWeight: 700,
                        display: 'flex', alignItems: 'center', gap: 5,
                      }}>
                        <Tag size={10} /> {blog.category}
                      </div>
                    </div>

                    <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4, marginBottom: 10, color: 'var(--text-primary)' }}>
                        {blog.title}
                      </h2>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.65, flex: 1, marginBottom: 16 }}>
                        {blog.excerpt}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                          <Clock size={13} /> {blog.readTime} min read
                        </div>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                          {new Date(blog.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
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
                cursor: page === 1 ? 'not-allowed' : 'pointer',
              }}>
                <ChevronLeft size={18} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button key={n} onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
                  width: 40, height: 40, borderRadius: 10,
                  border: `1.5px solid ${page === n ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                  background: page === n ? 'rgba(0,212,255,0.12)' : 'transparent',
                  color: page === n ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-body)',
                }}>
                  {n}
                </button>
              ))}
              <button onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={page === totalPages} style={{
                width: 40, height: 40, borderRadius: 10, border: '1px solid var(--border-subtle)',
                background: 'transparent', color: page === totalPages ? 'var(--text-muted)' : 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: page === totalPages ? 'not-allowed' : 'pointer',
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
