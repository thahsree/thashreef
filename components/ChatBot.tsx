'use client';
import { Bot, MessageCircle, Send, User, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const faqs: { q: string; a: string }[] = [
  { q: 'What services do you offer?', a: 'I build full-stack web apps (MERN/Next.js), mobile apps (React Native), and AI-integrated solutions. I also take freelance website orders — feel free to use the contact form!' },
  { q: 'What is your tech stack?', a: 'My core stack is React, Next.js, Node.js, Express, MongoDB, and React Native. I also work with TypeScript, Tailwind CSS, Redux, Socket.io, and OpenAI API.' },
  { q: 'Are you available for freelance work?', a: "Yes! I'm currently available for freelance projects. You can submit a project inquiry through the Contact page or WhatsApp me directly at +91 7025504042." },
  { q: 'How much do you charge?', a: "Pricing depends on project scope and timeline. For a rough estimate: landing pages start at ₹8k-15k, full-stack web apps at ₹30k+, mobile apps at ₹50k+. Let's discuss your requirements!" },
  { q: 'Tell me about your experience', a: "I'm a MERN Stack & React Native developer with 1 year at Zysk Technologies as a Frontend Developer. I came from a Civil Engineering background and transitioned into tech — shipping full-stack products that users rely on daily." },
  { q: 'How can I contact you?', a: 'You can reach me through the Contact page, WhatsApp at +91 7025504042, email at thashreef@email.com, or connect on LinkedIn/GitHub (links in the navbar).' },
];

interface Message {
  from: 'user' | 'bot';
  text: string;
}

function getAutoReply(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('service') || lower.includes('offer') || lower.includes('build')) return faqs[0].a;
  if (lower.includes('stack') || lower.includes('tech') || lower.includes('technology')) return faqs[1].a;
  if (lower.includes('freelance') || lower.includes('hire') || lower.includes('available')) return faqs[2].a;
  if (lower.includes('charge') || lower.includes('rate') || lower.includes('cost') || lower.includes('price')) return faqs[3].a;
  if (lower.includes('experience') || lower.includes('about') || lower.includes('background')) return faqs[4].a;
  if (lower.includes('contact') || lower.includes('reach') || lower.includes('email') || lower.includes('whatsapp')) return faqs[5].a;
  return "Thanks for reaching out! 😊 For specific questions, feel free to use the Contact page or WhatsApp me at +91 7025504042. You can also pick one of the quick questions above!";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: "Hi! I'm Thashreef's virtual assistant 👋 How can I help you today? You can ask me anything or pick a quick question below!" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text }, { from: 'bot', text: getAutoReply(text) }]);
    setInput('');
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="chatbot-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        style={{
          position: 'fixed', bottom: 100, right: 28, zIndex: 9997,
          width: 54, height: 54, borderRadius: '50%',
          background: open
            ? 'var(--accent-violet)'
            : 'linear-gradient(135deg, var(--bg-secondary), var(--bg-secondary))',
          border: '2px solid var(--accent-violet)',
          color: 'white', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: open ? 'var(--glow-violet)' : 'none',
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} color="var(--accent-violet)" />}
      </button>

      {/* Chat Panel */}
      <div className="chatbot-container" style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transform: open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.1))',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Bot size={18} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Thashreef&apos;s Assistant</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-green)', display: 'inline-block' }} />
              Online
            </div>
          </div>
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            style={{
              width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border-subtle)',
              background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(236,72,153,0.15)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-pink)';
              (e.currentTarget as HTMLElement).style.color = 'var(--accent-pink)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
              (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, flexDirection: msg.from === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-end' }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: msg.from === 'bot'
                  ? 'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))'
                  : 'rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {msg.from === 'bot' ? <Bot size={14} color="white" /> : <User size={14} color="var(--text-secondary)" />}
              </div>
              <div style={{
                maxWidth: '75%', padding: '10px 14px', borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: msg.from === 'user'
                  ? 'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))'
                  : 'rgba(255,255,255,0.05)',
                border: msg.from === 'bot' ? '1px solid var(--border-subtle)' : 'none',
                fontSize: '0.88rem', lineHeight: 1.5, color: 'var(--text-primary)',
              }}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div style={{ padding: '0 16px 12px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {faqs.slice(0, 3).map(faq => (
            <button key={faq.q} onClick={() => send(faq.q)} style={{
              padding: '5px 12px', borderRadius: 99, border: '1px solid var(--border-glow)',
              background: 'rgba(0,212,255,0.05)', color: 'var(--accent-cyan)', fontSize: '0.75rem',
              cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: 'var(--font-body)',
            }}>
              {faq.q.split(' ').slice(0, 4).join(' ')}...
            </button>
          ))}
        </div>

        {/* Input */}
        <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: 8 }}>
          <input
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="Type a message..."
            className="form-input"
            style={{ flex: 1, padding: '10px 14px', borderRadius: 10 }}
          />
          <button onClick={() => send(input)} style={{
            padding: '10px 14px', borderRadius: 10, border: 'none',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))',
            color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center',
          }}>
            <Send size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .chatbot-toggle {
            right: 20px !important;
            bottom: 84px !important;
            width: 48px !important;
            height: 48px !important;
          }
          .chatbot-container {
            right: 16px !important;
            bottom: 144px !important;
          }
        }
      `}</style>
    </>
  );
}
