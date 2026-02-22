'use client';
import { Briefcase, CheckCircle, Clock, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [orderForm, setOrderForm] = useState({ name: '', email: '', projectType: '', budget: '', timeline: '', description: '' });
  const [contactSent, setContactSent] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to EmailJS or backend API
    setContactSent(true);
    setTimeout(() => setContactSent(false), 4000);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSent(true);
    setTimeout(() => setOrderSent(false), 4000);
    setOrderForm({ name: '', email: '', projectType: '', budget: '', timeline: '', description: '' });
  };

  return (
    <div style={{ paddingTop: 90 }}>
      {/* Header */}
      <section className="grid-bg" style={{ padding: '80px 0 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 40% 50%, rgba(0,212,255,0.08), transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">GET IN TOUCH</div>
          <h1 className="section-title">Let&apos;s <span className="gradient-text">Connect</span></h1>
          <p className="section-subtitle">
            Whether you have a project idea, a question, or just want to say hi — I&apos;m always happy to chat.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>
            {/* Left: Info */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>
                Contact <span className="gradient-text">Info</span>
              </h2>
              <div className="neon-divider" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                {[
                  { icon: Mail, label: 'Email', value: 'thashreef@email.com', href: 'mailto:thashreef@email.com', color: 'var(--accent-cyan)' },
                  { icon: Phone, label: 'WhatsApp', value: '+91 7025504042', href: 'https://wa.me/917025504042', color: 'var(--accent-green)' },
                  { icon: MapPin, label: 'Location', value: 'Kerala, India', href: null, color: 'var(--accent-pink)' },
                  { icon: Briefcase, label: 'Status', value: 'Available for Freelance', href: null, color: 'var(--accent-violet)' },
                ].map(item => (
                  <div key={item.label} className="glass-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <item.icon size={18} color={item.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 2 }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: item.color, textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem' }}>{item.value}</a>
                      ) : (
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.92rem' }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: 16, color: 'var(--text-secondary)' }}>CONNECT ON</h3>
              <div style={{ display: 'flex', gap: 14 }}>
                {[
                  { icon: Github, href: 'https://github.com/thashreef', label: 'GitHub', color: 'var(--text-primary)' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/thashreef', label: 'LinkedIn', color: '#0a66c2' },
                  { icon: MessageCircle, href: 'https://wa.me/917025504042', label: 'WhatsApp', color: '#25d366' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                    style={{
                      width: 48, height: 48, borderRadius: 12, border: '1px solid var(--border-subtle)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = s.color;
                      (e.currentTarget as HTMLElement).style.color = s.color;
                      (e.currentTarget as HTMLElement).style.background = `${s.color}15`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}>
                    <s.icon size={20} />
                  </a>
                ))}
              </div>

              {/* Response time */}
              <div style={{ marginTop: 32, padding: '16px 20px', borderRadius: 12, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <Clock size={18} color="var(--accent-green)" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-green)' }}>Typical Response Time</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>Usually within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Right: Forms */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              {/* Contact Form */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>
                  Send a <span className="gradient-text">Message</span>
                </h2>
                <div className="neon-divider" />
                {contactSent ? (
                  <div style={{ padding: 24, borderRadius: 12, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <CheckCircle size={24} color="var(--accent-green)" />
                    <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>Message sent! I'll get back to you soon. 🎉</span>
                  </div>
                ) : (
                  <form onSubmit={handleContact} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label className="form-label">Name *</label>
                        <input className="form-input" type="text" placeholder="Your name" required value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))} />
                      </div>
                      <div>
                        <label className="form-label">Email *</label>
                        <input className="form-input" type="email" placeholder="your@email.com" required value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))} />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Subject</label>
                      <input className="form-input" type="text" placeholder="What's this about?" value={contactForm.subject} onChange={e => setContactForm(f => ({ ...f, subject: e.target.value }))} />
                    </div>
                    <div>
                      <label className="form-label">Message *</label>
                      <textarea className="form-input" rows={5} placeholder="Your message..." required value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))} style={{ resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Website Order Form */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', marginBottom: 4 }}>
                  Order a <span className="gradient-text-warm">Website</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: 12 }}>Need a website or web app built? Fill in your project details below.</p>
                <div className="neon-divider" />
                {orderSent ? (
                  <div style={{ padding: 24, borderRadius: 12, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <CheckCircle size={24} color="var(--accent-green)" />
                    <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>Order received! I'll contact you within 24 hours. 🚀</span>
                  </div>
                ) : (
                  <form onSubmit={handleOrder} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label className="form-label">Your Name *</label>
                        <input className="form-input" type="text" placeholder="Name" required value={orderForm.name} onChange={e => setOrderForm(f => ({ ...f, name: e.target.value }))} />
                      </div>
                      <div>
                        <label className="form-label">Email *</label>
                        <input className="form-input" type="email" placeholder="your@email.com" required value={orderForm.email} onChange={e => setOrderForm(f => ({ ...f, email: e.target.value }))} />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Project Type *</label>
                      <select className="form-input" required value={orderForm.projectType} onChange={e => setOrderForm(f => ({ ...f, projectType: e.target.value }))} style={{ cursor: 'pointer', colorScheme: 'dark' }}>
                        <option value="">Select project type</option>
                        <option>Landing Page / Portfolio</option>
                        <option>Business Website</option>
                        <option>E-Commerce Store</option>
                        <option>Web Application (Full Stack)</option>
                        <option>Mobile App (React Native)</option>
                        <option>API / Backend Service</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label className="form-label">Budget Range</label>
                        <select className="form-input" value={orderForm.budget} onChange={e => setOrderForm(f => ({ ...f, budget: e.target.value }))} style={{ cursor: 'pointer', colorScheme: 'dark' }}>
                          <option value="">Select budget</option>
                          <option>₹5,000 – ₹15,000</option>
                          <option>₹15,000 – ₹30,000</option>
                          <option>₹30,000 – ₹60,000</option>
                          <option>₹60,000 – ₹1,00,000</option>
                          <option>₹1,00,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="form-label">Timeline</label>
                        <select className="form-input" value={orderForm.timeline} onChange={e => setOrderForm(f => ({ ...f, timeline: e.target.value }))} style={{ cursor: 'pointer', colorScheme: 'dark' }}>
                          <option value="">Select timeline</option>
                          <option>Less than 1 week</option>
                          <option>1–2 weeks</option>
                          <option>2–4 weeks</option>
                          <option>1–3 months</option>
                          <option>3+ months (ongoing)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Project Description *</label>
                      <textarea className="form-input" rows={5} placeholder="Describe your project — what it should do, who it's for, any design preferences, etc." required value={orderForm.description} onChange={e => setOrderForm(f => ({ ...f, description: e.target.value }))} style={{ resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', background: 'linear-gradient(135deg, var(--accent-pink), #f59e0b)' }}>
                      <Briefcase size={16} /> Submit Project Order
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
