export interface Blog {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    readTime: number;
    date: string;
    coverEmoji: string;
    coverColor: string;
}

export const blogs: Blog[] = [
    {
        slug: 'civil-engineer-to-software-developer',
        title: 'From Civil Engineer to Software Developer: My Unconventional Journey',
        excerpt: 'How I traded blueprints for code, and why the best engineers aren\'t always the ones with CS degrees.',
        category: 'Career',
        tags: ['Career Change', 'Self-taught', 'MERN Stack', 'Personal'],
        readTime: 8,
        date: '2025-12-15',
        coverEmoji: '🏗️',
        coverColor: 'cyan',
        content: `
# From Civil Engineer to Software Developer: My Unconventional Journey

Not every developer's story starts with a computer science degree and a love for algorithms from childhood. Mine started on a construction site in Bangalore.

## The Construction Site

I spent years as a Site Supervisor in Bangalore, managing workers, reading structural blueprints, and ensuring buildings rose safely from the ground. I was good at it. But something was missing — the work felt static, and I kept wondering what else I could build.

Bangalore, for all its heat and traffic, is also the Silicon Valley of India. You can't help but be surrounded by tech. Smart people building software that changes how millions live. That energy was infectious.

## The Pivot Moment

I vividly remember the day I sat down with a laptop and typed "how to build a website." It felt silly at first — I was in my late 20s with no programming experience. But I kept going.

I started with **C Programming** — learning loops, conditionals, pointers. Then **Java OOP** — understanding classes, inheritance, and polymorphism. It was like learning the grammar of a new language.

## Joining Entri Elevate

The turning point was joining the **Entri Elevate Bootcamp**, a structured MERN stack program. Suddenly, things clicked. I understood how:

- \`React\` components assembled UIs like lego pieces
- \`Express\` handled server-side logic
- \`MongoDB\` stored and retrieved data
- \`Node.js\` powered it all in JavaScript

Within months, I had deployed my first full-stack project. It wasn't perfect. But it worked.

## The Mindset Shift

What surprised me most was how similar software engineering is to civil engineering in mindset:

| Civil Engineering | Software Engineering |
|---|---|
| Blueprints | System Design |
| Structural loads | Performance optimization |
| Materials strength | Code robustness |
| Site inspection | Code review |

Both require problem-solving, precision, and thinking in systems.

## Where I Am Now

Today, I work as a **Frontend Developer at Zysk Technologies**, building real products that users rely on daily. I've grown from HTML basics to shipping production-grade Next.js applications.

For anyone considering a career change into tech: **the field rewards skills, not just pedigree.** If you're willing to build consistently and stay curious, the door is open.

> "Every expert was once a beginner. Every professional was once an amateur."

If my story resonates with you, feel free to reach out. I'm always happy to connect with fellow learners.
    `,
    },
    {
        slug: 'why-mern-stack-startups',
        title: 'Why MERN Stack is Perfect for Startups in 2025',
        excerpt: 'Speed, cost-efficiency, and a unified language ecosystem make MERN the go-to choice for early-stage startups.',
        category: 'Development',
        tags: ['MERN', 'Node.js', 'React', 'Startups'],
        readTime: 6,
        date: '2025-11-20',
        coverEmoji: '🚀',
        coverColor: 'violet',
        content: `
# Why MERN Stack is Perfect for Startups in 2025

Every startup founder faces the same question early on: **What tech stack should we build on?** After shipping multiple products, I keep coming back to MERN — MongoDB, Express, React, Node.js.

Here's why.

## 1. One Language Rules All

JavaScript runs on both the client and the server. Your frontend React components and your backend Express routes speak the same language. This means:

- **Smaller teams** — one developer can work full-stack
- **Code sharing** — validation logic, types, and utilities can live in shared packages
- **Faster onboarding** — new hires don't need to context-switch between Python and JavaScript

## 2. MongoDB Scales With You

In early stages, your data model changes weekly. MongoDB's flexible schema lets you iterate without running 47 database migrations.

\`\`\`js
// Add a new field? Just start using it.
const user = new User({
  name: "Thashreef",
  role: "developer",
  githubUrl: "https://github.com/thashreef" // added later, no migration needed
});
\`\`\`

As you scale, MongoDB Atlas handles sharding, indexing, and backups automatically.

## 3. React's Ecosystem is Unmatched

React's component ecosystem is massive. Need a rich text editor? Date picker? Charts? There's a battle-tested library for everything.

Next.js extends React with:
- **Server-side rendering** for SEO
- **API routes** to replace Express for simpler backends
- **Image optimization** out of the box
- **Edge functions** for low-latency APIs

## 4. Deployment is Frictionless

- **Frontend**: Vercel / Netlify (free tier, CI/CD built in)
- **Backend**: Railway / Render (automatic redeploys on push)
- **Database**: MongoDB Atlas (free 512MB to start)

A startup can ship and maintain a production app for **$0/month** in early stages.

## 5. The Talent Pool is Huge

MERN developers are everywhere. When it's time to hire, the candidate pool is deep and competitive.

## When NOT to Use MERN

- **CPU-heavy tasks** (video encoding, ML inference) → Go or Python
- **Strict relational data** (banking, ERP) → PostgreSQL + Django or Rails
- **Massive real-time systems** (multiplayer games) → Elixir or Erlang

## Final Verdict

For 90% of SaaS products, MERN is an excellent, proven choice. Start with it, validate your idea, then optimize as problems emerge.

Happy building! 🚀
    `,
    },
    {
        slug: 'react-native-first-app',
        title: 'Building Your First React Native App: A Complete Guide',
        excerpt: 'From zero to a working iOS/Android app using React Native and Expo — step by step for web developers.',
        category: 'Mobile',
        tags: ['React Native', 'Expo', 'Mobile Dev', 'Tutorial'],
        readTime: 10,
        date: '2025-10-05',
        coverEmoji: '📱',
        coverColor: 'pink',
        content: `
# Building Your First React Native App: A Complete Guide

If you know React, you're closer to building mobile apps than you think. React Native lets you write **one codebase** that runs on both iOS and Android.

## Setup: Expo vs Bare Workflow

**Expo** is the fastest way to start. It handles native dependencies, OTA updates, and gives you a dev server on your phone.

\`\`\`bash
npx create-expo-app@latest my-first-app
cd my-first-app
npx expo start
\`\`\`

Scan the QR code with **Expo Go** on your phone, and your app is live instantly.

## Core Differences from Web React

| Web React | React Native |
|---|---|
| \`<div>\` | \`<View>\` |
| \`<p>\`, \`<h1>\` | \`<Text>\` |
| \`<img>\` | \`<Image>\` |
| \`<button>\` | \`<TouchableOpacity>\` |
| CSS (px, %) | StyleSheet (unitless numbers) |

\`\`\`jsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native!</Text>
      <TouchableOpacity style={styles.btn} onPress={() => alert('Pressed!')}>
        <Text style={styles.btnText}>Tap Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0a0a' },
  title: { fontSize: 24, color: '#00d4ff', fontWeight: '700', marginBottom: 20 },
  btn: { backgroundColor: '#7c3aed', padding: 14, borderRadius: 10 },
  btnText: { color: '#fff', fontWeight: '600' },
});
\`\`\`

## Navigation with React Navigation

\`\`\`bash
npm install @react-navigation/native @react-navigation/stack
npx expo install react-native-screens react-native-safe-area-context
\`\`\`

\`\`\`jsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
\`\`\`

## Fetching Data

React Native supports the standard \`fetch\` API:

\`\`\`jsx
useEffect(() => {
  fetch('https://api.example.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);
\`\`\`

## Tips for Smooth Performance

1. Use \`FlatList\` instead of \`ScrollView\` for long lists (virtualized)
2. Avoid inline styles inside render — define \`StyleSheet.create\` outside
3. Use \`React.memo\` and \`useCallback\` for list items
4. Enable Hermes engine (default in Expo SDK 48+)

## Publishing Your App

With Expo, deploying is simple:

\`\`\`bash
npx eas build --platform all
npx eas submit --platform ios  # submits to App Store
npx eas submit --platform android  # submits to Play Store
\`\`\`

Your first app is just a few commands away. Start simple, ship early, iterate often! 📱
    `,
    },
    {
        slug: 'rest-apis-nodejs-express',
        title: 'Building REST APIs with Node.js & Express: Best Practices',
        excerpt: 'A practical guide to designing, building, and securing production-ready REST APIs using Node.js and Express.',
        category: 'Backend',
        tags: ['Node.js', 'Express', 'API', 'Backend', 'MongoDB'],
        readTime: 9,
        date: '2025-09-12',
        coverEmoji: '⚙️',
        coverColor: 'green',
        content: `
# Building REST APIs with Node.js & Express: Best Practices

A poorly designed API can haunt a project for years. Let's build one that's clean, secure, and scalable.

## Project Structure

\`\`\`
src/
├── routes/          # Route definitions
├── controllers/     # Business logic
├── models/          # Mongoose schemas
├── middleware/      # Auth, error handling, validation
├── utils/           # Helpers (JWT, email, etc.)
└── app.js           # Express setup
\`\`\`

**Separate concerns from day one.** Don't put database queries in route handlers.

## Setting Up Express

\`\`\`js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(helmet());                          // Security headers
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json({ limit: '10kb' }));  // Prevent large payload attacks

app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);

export default app;
\`\`\`

## Controller Pattern

\`\`\`js
// controllers/userController.js
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
\`\`\`

## JWT Authentication Middleware

\`\`\`js
export const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Not authorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
\`\`\`

## Input Validation with Zod

\`\`\`js
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
});

// In your route:
const { error, data } = createUserSchema.safeParse(req.body);
if (error) return res.status(400).json({ errors: error.flatten() });
\`\`\`

## Rate Limiting

\`\`\`js
import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests, please try again later.',
});

app.use('/api', apiLimiter);
\`\`\`

## Error Handling

Use a global error handler at the bottom of your app:

\`\`\`js
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
});
\`\`\`

## Checklist Before Production

- [ ] Environment variables via \`.env\` (never hardcode)
- [ ] HTTPS only
- [ ] Rate limiting on sensitive routes
- [ ] Input validation on all endpoints
- [ ] Mongoose indexes on frequently queried fields
- [ ] Pagination on list endpoints

A well-built API is invisible — users just experience a fast, reliable product. ⚙️
    `,
    },
    {
        slug: 'first-dev-job-without-cs-degree',
        title: 'How I Got My First Developer Job Without a CS Degree',
        excerpt: 'The exact steps, projects, and mindset shifts that helped me land a frontend developer role with a civil engineering background.',
        category: 'Career',
        tags: ['Career', 'Self-taught', 'Job Search', 'Portfolio'],
        readTime: 7,
        date: '2025-08-18',
        coverEmoji: '💼',
        coverColor: 'violet',
        content: `
# How I Got My First Developer Job Without a CS Degree

The job market for developers is competitive. But it's also surprisingly meritocratic — companies care about what you can *build*, not just where you studied.

Here's exactly what worked for me.

## Step 1: Stop Waiting to Feel "Ready"

The biggest trap for self-taught developers is tutorial purgatory — watching endless courses and feeling like you're learning, but never building.

**The rule I followed**: For every 1 hour of tutorial, spend 2 hours building something.

## Step 2: Build 3 Projects That Matter

Not 20 half-finished todo apps. Three complete, polished, deployed projects.

For each project, I focused on:
- **Real problem**: Something you'd actually use
- **Full stack**: Frontend + backend + database + deployed
- **Clean code**: README, comments, good folder structure
- **Live URL**: Recruiters won't run \`npm install\`

My three projects covered:
1. An e-commerce platform (shows technical depth)
2. A real-time chat app (shows socket knowledge)  
3. A mobile app (shows cross-platform skills)

## Step 3: A Portfolio That Shows Personality

Your portfolio is your first PR. Make it count.

- Clear introduction: who you are, what you build
- Project demos with screenshots/videos
- Skills section with technologies you actually know
- Links to GitHub and LinkedIn
- A blog showing you think about code

## Step 4: GitHub Green Squares

Recruiters look at your GitHub. I aimed for **at least 150 contributions** before applying.

This doesn't mean committing junk. It means:
- Working on projects daily
- Open-source contributions (even docs fixes)
- Building side projects in public

## Step 5: The Application Strategy

Applied to **companies, not just job postings**. Found companies I admired, found their tech leads on LinkedIn, and sent personalized connection requests — not copy-paste spam.

My message template:
> "Hi [Name], I've been using [Company's product] and noticed you're building with [tech stack I know]. I recently built [similar project]. I'd love to learn more about how your team works."

**Response rate**: ~20%. Much better than applying through portals.

## Step 6: Crush the Technical Interview

Two things that helped most:
1. **LeetCode Easy + Medium** (2-3 problems/day for 30 days)
2. **Explain your projects out loud** — record yourself, listen back

When they ask "tell me about your projects," be ready to explain:
- What problem you solved
- What tech you chose and why
- What you'd do differently

## The Honest Truth

It took **8 months** from starting to code to landing my first offer. There were rejections, imposter syndrome, and days where I questioned everything.

But the compound effect of consistent building is real. Your 100th day of coding is dramatically better than your 10th.

**Start today. Build in public. Keep shipping.**

Now I work at Zysk Technologies as a Frontend Developer, and the journey was absolutely worth it. 💼
    `,
    },
    {
        slug: 'web-performance-optimization',
        title: 'Web Performance Optimization: Tips from a Full-Stack Developer',
        excerpt: 'Practical techniques to make your web apps lightning fast — from Core Web Vitals to lazy loading and beyond.',
        category: 'Development',
        tags: ['Performance', 'Next.js', 'Web Vitals', 'Optimization'],
        readTime: 8,
        date: '2025-07-30',
        coverEmoji: '⚡',
        coverColor: 'green',
        content: `
# Web Performance Optimization: Tips from a Full-Stack Developer

A fast website isn't a luxury — it's a competitive advantage. Studies show:
- **53%** of users abandon mobile sites that take over 3 seconds to load
- A **1-second delay** costs Amazon an estimated **$1.6 billion** per year

Here are the techniques I use on every production project.

## Measure First: Core Web Vitals

Before optimizing, understand your baseline:

| Metric | What it Measures | Good Score |
|---|---|---|
| **LCP** | Largest Contentful Paint | < 2.5s |
| **FID** | First Input Delay | < 100ms |
| **CLS** | Cumulative Layout Shift | < 0.1 |

Tools: [PageSpeed Insights](https://pagespeed.web.dev), Lighthouse, WebPageTest.

## 1. Image Optimization

Images are usually the biggest culprit.

\`\`\`jsx
// ❌ Bad
<img src="/hero.png" />

// ✅ Next.js Image (auto WebP, lazy load, responsive)
import Image from 'next/image';
<Image src="/hero.png" alt="Hero" width={1200} height={600} priority />
\`\`\`

**Tips**:
- Use WebP/AVIF formats (30-50% smaller than PNG/JPEG)
- Always specify \`width\` and \`height\` to prevent CLS
- Use \`priority\` only for above-the-fold images
- Use Cloudinary or ImageKit for automatic optimization

## 2. Code Splitting

Don't ship code users don't need yet:

\`\`\`jsx
import dynamic from 'next/dynamic';

// Load chart only when visible
const Chart = dynamic(() => import('./Chart'), {
  loading: () => <div className="chart-skeleton" />,
  ssr: false,
});
\`\`\`

## 3. Minimize JavaScript Bundle

\`\`\`bash
# Analyze bundle
npx @next/bundle-analyzer
\`\`\`

Common wins:
- Replace \`moment.js\` (330kb) with \`date-fns\` (tree-shakeable)
- Replace \`lodash\` import with specific functions: \`import debounce from 'lodash/debounce'\`
- Audit dependencies regularly

## 4. Efficient Data Fetching

\`\`\`tsx
// Next.js 13+ App Router: Server Components fetch on the server
// No JS sent to client for data fetching!
async function ProductList() {
  const products = await fetch('/api/products', { 
    next: { revalidate: 60 } // ISR: revalidate every 60 seconds
  }).then(r => r.json());
  
  return <ul>{products.map(p => <ProductCard key={p.id} {...p} />)}</ul>;
}
\`\`\`

## 5. Database Query Optimization

On the backend, slow queries kill perceived performance:

\`\`\`js
// ❌ N+1 query problem
const posts = await Post.find();
for (const post of posts) {
  post.author = await User.findById(post.authorId); // Fires 1 query per post!
}

// ✅ Populate in one query
const posts = await Post.find().populate('author', 'name avatar');

// ✅ Also add indexes on frequently queried fields
PostSchema.index({ createdAt: -1 });
PostSchema.index({ category: 1, createdAt: -1 });
\`\`\`

## 6. Caching Strategy

\`\`\`js
// API Route with cache headers
res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
\`\`\`

Use Redis for:
- Session storage
- Rate limiting
- Frequently accessed data (e.g., configs, categories)

## 7. Critical CSS

Load critical CSS inline, defer the rest. Next.js does this automatically. For custom setups, use PurgeCSS to remove unused styles.

## Quick Wins Checklist

- [ ] Enable gzip/Brotli compression on server
- [ ] Serve assets from CDN (Cloudfront, Bunny.net)
- [ ] Preconnect to third-party origins: \`<link rel="preconnect" href="https://fonts.googleapis.com">\`
- [ ] Use \`loading="lazy"\` on below-fold images
- [ ] Remove unused npm packages
- [ ] Enable HTTP/2 on your server

Performance is a feature. Ship fast, stay fast. ⚡
    `,
    },
];
