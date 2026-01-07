import { Metadata } from "next";

export const notFoundMetadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you are looking for does not exist. Please check the URL or navigate back to the homepage.",
  robots: {
    index: false,
    follow: true,
  },
};
