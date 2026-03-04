# blshaer — Personal Portfolio

A minimal, modern personal portfolio site built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

Live at → [blshaer.dev](https://blshaer.dev) *(replace with your domain)*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Shadcn UI |
| Animations | Framer Motion |
| Link Previews | Microlink |

---

## Features

- **Work Experience** — expandable cards with tech stack tags and company links
- **Projects** — hover previews powered by Microlink
- **Recommendations** — testimonials section
- **Dark / Light mode** — system-aware theme support
- **Fully responsive** — mobile-first layout

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout & metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles & theme tokens
└── components/
    ├── ProfileHeader.tsx
    ├── WorkedAs.tsx
    ├── Projects.tsx
    └── Recommendations.tsx
```

---

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npm run build
```

Or connect the GitHub repo to Vercel for automatic deployments on every push.

---

## License

MIT © [Baraa Al-Shaer](https://github.com/blshaer)
