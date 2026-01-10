import type { Metadata, Viewport } from "next";
import "./globals.css";

import FloatingActionButton from "@/features/landing/components/layouts/FloatingActionButton";
import Footer from "@/features/landing/components/layouts/Footer";
import Navbar from "@/features/landing/components/layouts/Navbar";
import { ThemeProvider } from "@/features/theme/providers/ThemeProvider";
import { domain, email, webImage, websitePath } from "@/shared/data/Links";
import BackgroundEffect from "@/shared/ui/effects/backgroundEffect";
import { CustomDialogProvider } from "@/shared/ui/overlays/custom-dialog";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${domain}`),
  title: {
    template: "%s | Baraa Alshaer - Full Stack Developer",
    default: "Baraa Alshaer - Full Stack Developer & Portfolio",
  },
  description:
    "Explore the portfolio of Baraa Alshaer, Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. View projects, experience, and contact details.",
  keywords: [
    "Baraa Alshaer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "UI/UX",
    "Projects",
    "Contact",
    "Resume",
    "Modern Web",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "AI Integration",
    "Remote Work",
  ].join(", "),
  authors: [{ name: "Baraa Alshaer", url: websitePath.main }],
  creator: "Baraa Alshaer",
  publisher: "Baraa Alshaer",
  alternates: {
    canonical: websitePath.main,
    languages: {
      en: `${websitePath.main}/en`,
      ar: `${websitePath.main}/ar`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    title: "Baraa Alshaer - Full Stack Developer Portfolio",
    description:
      "Discover the work and experience of Baraa Alshaer, a passionate Full Stack Developer. Projects, skills, and contact info included.",
    url: websitePath.main,
    siteName: "Baraa Alshaer Portfolio",
    images: [
      {
        url: webImage,
        width: 400,
        height: 400,
        alt: "Baraa Alshaer Portfolio Preview",
      },
    ],
    countryName: "Palestine",
    emails: [email],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baraa Alshaer - Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Baraa Alshaer, Full Stack Developer. Projects, experience, and contact details.",
    images: webImage,
    creator: "@blshaer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#16161a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=excon@100,300,400,500,700,900,1&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="apple-mobile-web-app-title" content="Baraa" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Baraa Alshaer",
              url: websitePath.main,
              image: webImage,
              sameAs: [
                "https://github.com/blshaer",
                "https://www.linkedin.com/in/blshaer/",
                "https://www.youtube.com/@blshaer",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Samtax",
              },
              description:
                "Full Stack Developer with expertise in React, Node.js, TypeScript, and more.",
            }),
          }}
        />
      </head>
      <body className="flex relative flex-col min-h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[var(--background)] bg-[linear-gradient(to_right,var(--border-background)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-background)_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <SpeedInsights />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomDialogProvider />
          <Toaster />
          <Navbar />
          <BackgroundEffect />
          <main className="z-40 max-md:z-30 mx-auto w-full flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingActionButton threshold={400} />
        </ThemeProvider>
      </body>
    </html>
  );
}
