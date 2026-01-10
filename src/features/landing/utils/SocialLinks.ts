export interface SocialLink {
  _id: string;
  platform: string;
  url: string;
  icon: string;
  iconLibrary: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export const socialLinksData: SocialLink[] = [
  {
    _id: "social_1",
    platform: "GitHub",
    url: "https://github.com/blshaer",
    icon: "FaGithub",
    iconLibrary: "fa",
    isActive: true,
    order: 1,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
  {
    _id: "social_2",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/blshaer/",
    icon: "FaLinkedin",
    iconLibrary: "fa",
    isActive: true,
    order: 2,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
  {
    _id: "social_3",
    platform: "YouTube",
    url: "https://www.youtube.com/@blshaer",
    icon: "FaYoutube",
    iconLibrary: "fa",
    isActive: true,
    order: 3,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
  {
    _id: "social_4",
    platform: "Email",
    url: "mailto:blshaer@outlook.com",
    icon: "FaEnvelope",
    iconLibrary: "fa",
    isActive: true,
    order: 4,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
  {
    _id: "social_5",
    platform: "WhatsApp",
    url: "https://wa.me/970599349034",
    icon: "FaWhatsapp",
    iconLibrary: "fa",
    isActive: true,
    order: 5,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
];
