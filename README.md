# Baraa Alshaer - Portfolio

> A modern, high-performance portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/blshaer/alshaer.git
cd alshaer

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:7000](http://localhost:7000) to view it in your browser.

## Features

- **Static Export** - Deploy anywhere, no server required
- **Fully Responsive** - Optimized for all devices
- **Theme Support** - Dark/Light mode with system preference detection
- **Performance First** - Optimized for speed and SEO
- **Email Integration** - Contact form powered by EmailJS

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

## Project Structure

```
src/
├── app/                    # Next.js app directory
├── features/               # Feature modules
│   ├── projects/          # Projects section
│   ├── blog/              # Blog posts
│   └── contact/           # Contact form
├── layouts/               # Layout components
├── shared/
│   ├── ui/                # Reusable UI components
│   ├── lib/               # Utility functions
│   └── data/              # Static content
└── styles/                # Global styles
```

## Configuration

### Environment Variables

Create a `.env.local` file for the contact form (optional):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

### Customization

Edit the following files to personalize your portfolio:

- `src/shared/data/Profile.ts` - Personal information
- `src/shared/data/Experiences.ts` - Work history
- `src/shared/data/Projects.ts` - Portfolio projects

## Build & Deploy

### Production Build

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### Deployment Options

**Vercel** (Recommended)

```bash
npm run deploy
```

**Netlify**

- Build command: `npm run build`
- Publish directory: `out`

**GitHub Pages**

- Push the `out/` directory to your `gh-pages` branch

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Baraa Alshaer**

- Email: contact.alshaer@gmail.com
- LinkedIn: [linkedin.com/in/blshaer](https://linkedin.com/in/blshaer)
- GitHub: [github.com/blshaer](https://github.com/blshaer)
- Website: [blshaer.vercel.app](https://blshaer.vercel.app)

---

<p align="center">Developed by Baraa Alshaer</p>
