import { MetadataRoute } from "next";

// Required for static export
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Baraa Alshaer - Full Stack Developer",
    short_name: "Baraa Alshaer",
    description:
      "Portfolio of Baraa Alshaer, a skilled Full Stack Developer with expertise in React, Node.js, TypeScript, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#16161a",
    theme_color: "#16161a",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
    orientation: "portrait",
    lang: "en",
    dir: "ltr",
    categories: ["portfolio", "development", "web development"],
    screenshots: [
      {
        src: "/screenshot.png",
        sizes: "1280x720",
        type: "image/png",
        label: "Baraa Alshaer Portfolio",
      },
    ],
  };
}
