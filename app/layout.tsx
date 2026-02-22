import ChatBot from '@/components/ChatBot';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import WhatsAppButton from '@/components/WhatsAppButton';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thashreef | MERN Stack & Full Stack Developer',
  description: 'Portfolio of Thashreef — a MERN Stack, Full Stack, and React Native Developer. Building scalable web apps, mobile experiences, and AI-powered solutions.',
  keywords: ['MERN Stack Developer', 'Full Stack Developer', 'React Native Developer', 'Next.js Developer', 'Portfolio', 'Kerala Developer', 'Zysk Technologies'],
  openGraph: {
    title: 'Thashreef | MERN Stack Developer',
    description: 'Crafting scalable web apps and mobile experiences with a focus on performance and UX.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatBot />
      </body>
    </html>
  );
}
