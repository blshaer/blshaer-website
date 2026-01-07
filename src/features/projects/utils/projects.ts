export interface Project {
    id: string;
    title: string;
    description: string;
    type: string;
    website: string;
    github?: string;
    technologies: string[];
    status: string;
    featured: boolean;
    created: string;
    updated: string;
    videoUrl?: string;
    logoFileName: string;
}

export const projectsData: Project[] = [
    {
        id: "proj_1",
        title: "Samtax",
        description: `• Trusted tax and accounting platform for expert tax preparation, financial planning, and business advisory services.\n\n• Secure, scalable web app with multi-language support.\n\n• Integrated payment systems and AI-powered automation for efficiency.`,
        type: "Web Application",
        website: "https://sam-tax.com/",
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "JWT & OAuth",
            "CI/CD (GitHub Actions)",
            "AI Automation",
            "Payment Integration",
            "Cloud Deployment"
        ],
        status: "Published",
        featured: true,
        created: "2024-06-01",
        updated: "2025-01-10",
        logoFileName: "samtax.svg"
    },
    {
        id: "proj_3",
        title: "SFB - Sustainable Form Builder",
        description: `• No-code form builder for creating smart forms in minutes.\n\n• Drag-and-drop, advanced logic, and seamless integrations.\n\n• Designed for teams needing flexible data collection without technical headaches.`,
        type: "SaaS Platform",
        website: "https://sfb-app.com",
        technologies: [
            "React",
            "TypeScript",
            "React DnD",
            "Node.js",
            "RESTful APIs",
            "Tailwind CSS",
            "JWT & OAuth",
            "SaaS Multi-Tenant Architecture",
            "Cloud Hosting",
            "Automated Testing"
        ],
        status: "Published",
        featured: true,
        created: "2023-06-01",
        updated: "2023-11-30",
        videoUrl: "https://www.youtube.com/watch?v=2IqjzGT1l1c",
        logoFileName: "sfb.svg"
    },
    {
        id: "proj_4",
        title: "GradlyAI",
        description: `GradlyAI is a free web tool that uses AI to generate modern CSS gradients.\n\n• AI-powered gradient generation\n• Instant visual preview with real-time updates\n• Export-ready CSS for seamless integration\n• Built for developers and designers seeking fast, modern visuals`,
        type: "Tool",
        website: "https://gradlyai.free.nf/",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "CSS3",
            "AI Integration",
            "UI/UX Design"
        ],
        status: "Published",
        featured: true,
        created: "2024-11-01",
        updated: "2024-11-01",
        logoFileName: "gradientscss.png"
    },
    {
        id: "proj_5",
        title: "Barber Academy",
        description: `• Website for Barber Academy with online appointment scheduling.\n\n• Showcases a complete range of services and streamlines operations.\n\n• User-friendly platform increased client engagement.`,
        type: "Website",
        website: "https://raoufzadi.vercel.app/",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "RESTful APIs",
            "Booking System",
            "Responsive Design"
        ],
        status: "Published",
        featured: true,
        created: "2023-07-01",
        updated: "2023-08-01",
        logoFileName: "barber.svg"
    },
    {
        id: "proj_6",
        title: "TalentSift - AI Resume Analyzer",
        description: `• AI-powered resume analysis platform for instant candidate insights.\n\n• Gemini AI integration provides scoring, recommendations, and actionable hiring suggestions.\n\n• LinkedIn & GitHub integration for enhanced profile insights.\n\n• Resume export in multiple formats with detailed feedback for recruiters.\n\n• Streamlined recruitment workflows with AI automation and analytics.`,
        type: "AI Platform",
        website: "http://talentsift.vercel.app/",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Gemini AI API",
            "AI Integration",
            "Resume Processing",
            "Machine Learning",
            "LinkedIn & GitHub Analysis",
            "PDF/DocX Export"
        ],
        status: "Published",
        featured: true,
        created: "2024-12-01",
        updated: "2025-01-13",
        logoFileName: "talentsift.svg"
    }
];
