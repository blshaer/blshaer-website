import { Metadata } from "next";



import ContactForm from "@/features/contact/components/ContactForm";
import { webImage, websitePath } from "@/shared/data/Links";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/shared/ui";

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "Contact | Hire Full Stack Developer",
  description:
    "Get in touch with Baraa Alshaer, a Full Stack Developer, for inquiries, collaborations, or to discuss your next project. Reach out through the contact form or email for professional web development services and consultations.",
  keywords:
    "contact developer, hire full stack developer, web development services, React developer, Node.js developer, TypeScript expert, freelance developer, web project consultation",
  openGraph: {
    title: "Contact - Baraa Alshaer | Hire Full Stack Developer",
    description:
      "Contact Baraa Alshaer, a skilled Full Stack Developer, for project inquiries, consultations, or collaborations. Let's bring your web development ideas to life with modern technologies and best practices.",
    url: websitePath.contact,
    images: [
      {
        url: webImage,
        width: 400,
        height: 400,
        alt: "Contact Baraa Alshaer - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Baraa Alshaer | Hire Full Stack Developer",
    description:
      "Reach out to Baraa Alshaer, a Full Stack Developer, for professional inquiries, collaborations, and web development services. Let's discuss your next project!",
    images: webImage,
  },
};

export default function ContactPage() {
  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
  };

  return (
    <div className="container mx-auto">
      <div>
        <div className="header max-md:pt-[50px]">
          <h1 className="header-title">Let's Connect!</h1>
          <p className="description max-w-[100%]">
            Do you have a project that you would like to collaborate on? Please
            feel free to contact me.
          </p>
          <div className="py-5">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className={styles.breadcrumbLink}>
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <div>
                  <BreadcrumbSeparator />
                </div>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/contact"
                    className={styles.breadcrumbLink}
                  >
                    Contact
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
