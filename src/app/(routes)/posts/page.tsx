import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/shared/ui/";
import { Metadata } from "next";

import { webImage, websitePath } from "@/shared/data/Links";
import PostSection from "@/features/blog/components/PostSection";

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "Blog Posts | Web Development & Technology Insights",
  description:
    "Explore the latest blog posts by Baraa Alshaer, a Full Stack Developer. Stay updated with insights, tutorials, and projects related to web development, React, Node.js, TypeScript, and modern technology trends.",
  keywords:
    "web development blog, React tutorials, Node.js articles, TypeScript tips, full stack development, coding tutorials, tech insights, software engineering blog",
  openGraph: {
    title: "Blog Posts - Baraa Alshaer | Web Development & Technology Insights",
    description:
      "Discover the latest posts and articles by Baraa Alshaer, a Full Stack Developer sharing his insights on web development, React, Node.js, TypeScript, and other cutting-edge technologies.",
    url: websitePath.posts,
    images: [
      {
        url: webImage,
        width: 400,
        height: 400,
        alt: "Baraa Alshaer Blog Posts",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts - Baraa Alshaer | Web Development & Technology Insights",
    description:
      "Explore the latest blog posts by Baraa Alshaer, a Full Stack Developer. Stay updated with insights, tutorials, and projects related to web development, technology, and more.",
    images: webImage,
  },
};

export default function PostsPage() {
  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
  };

  return (
    <>
      <div className="posts container mx-auto flex min-h-[100vh] w-full flex-col gap-5 max-md:pb-0 max-md:pt-[50px]">
        <div className="header">
          <h1 className="header-title">Latest posts</h1>
          <p className="description max-w-[100%]">
            Explore my latest posts on web development, programming, and tech.
          </p>
          <div className="py-5">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className={styles.breadcrumbLink} href={"/"}>
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <div>
                  <BreadcrumbSeparator />
                </div>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className={styles.breadcrumbLink}
                    href={"/posts"}
                  >
                    Posts
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <PostSection />
      </div>
    </>
  );
}
