"use client";

import { useSocialLinks } from "@/features/landing/hooks/use-social-links";
import { memo } from "react";

import { AiFillMail, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const iconsMap = {
  GitHub: SiGithub,
  LinkedIn: BsLinkedin,
  YouTube: AiFillYoutube,
  Twitter: AiFillTwitterCircle,
  Email: AiFillMail,
  "Email Me": AiFillMail,
  WhatsApp: FaWhatsapp,
  Facebook: FaFacebook,
};

const colorsMap = {
  GitHub: "text-[#181717] dark:text-[#ffffff]",
  LinkedIn: "text-[#0A66C2]",
  YouTube: "text-[#FF0000]",
  Twitter: "text-[#1DA1F2]",
  Email: "text-[#EA4335]",
  "Email Me": "text-[#EA4335]",
  WhatsApp: "text-[#25D366]",
  Facebook: "text-[#1877F2]",
};

function HeroSocialLinks() {
  const { socialLinks } = useSocialLinks(true);

  return (
    <section>
      <div className="w-full mx-auto">
        <div className="text-left mb-4">
          <p className="text-[var(--paragraph)] text-sm pt-2">
            Where to find me{" "}
            <span className="text-[var(--headline)] font-medium">
              (digitally)
            </span>{" "}
            if you wish to
          </p>
        </div>

        <div className="mt-4 w-full max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-start gap-4">
            {socialLinks.map((social) => {
              const IconComponent =
                iconsMap[social.platform as keyof typeof iconsMap];
              const colorClass =
                colorsMap[social.platform as keyof typeof colorsMap] ||
                "text-[var(--paragraph)]";

              return (
                <a
                  key={social._id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-badge"
                >
                  {IconComponent && (
                    <IconComponent
                      aria-hidden="true"
                      className={colorClass}
                      size={16}
                    />
                  )}
                  <span>{social.platform}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <div className="header max-md:pt-[50px]">
      <div className="header-content">
        <h1 className="header-title text-[var(--headline)]">Baraa Alshaer</h1>
        <h2 className="subtitle capitalize text-[var(--headline)]">
          Full-Stack Engineer
        </h2>
        <p className="text-[var(--paragraph)] mt-4">
          I build intelligent, scalable software solutions by combining
          full-stack expertise with smart AI integration. With 5+ years of
          experience in front-end and back-end development, I create solutions
          that are robust, user-friendly, and powered by AI to solve real-world
          problems efficiently.
          <br />
          <br />
          Driven by clean code and innovative design, I bring ideas to life with
          software that’s both functional and future-ready. Let’s build smarter
          applications together.
        </p>
      </div>

      <HeroSocialLinks />
    </div>
  );
}

export default memo(HeroSection);
