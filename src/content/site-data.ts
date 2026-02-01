/**
 * Site Content Data
 *
 * This file contains all content for the portfolio website.
 * Content was partially extracted from public sources.
 * Items marked with TODO require user input.
 *
 * IMPORTANT: Do not embellish or invent content.
 * All TODO items should be replaced with actual content provided by the user.
 */

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  credential: string;
  year: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  company: string;
  role: string;
  timeline: string;
  thumbnail: string;
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  process: {
    research: string;
    ideation: string;
    design: string;
    testing: string;
  };
  outcomes: {
    metrics: string[];
    impact: string;
  };
  images: string[];
  tags: string[];
}

export interface SiteData {
  profile: {
    name: string;
    title: string;
    currentCompany: string;
    location: string;
    tagline: string;
    bio: string;
    headshotUrl: string;
  };
  navigation: { label: string; href: string }[];
  social: {
    linkedin: string;
    behance: string;
    dribbble: string;
    twitter: string;
    email: string;
  };
  workHistory: WorkExperience[];
  education: Education[];
  skills: {
    design: string[];
    tools: string[];
    technical: string[];
  };
  caseStudies: CaseStudy[];
}

export const siteData: SiteData = {
  profile: {
    name: "Marquise Fleming",
    title: "UI/UX Designer",
    currentCompany: "ABM Industries",
    location: "Atlanta Metropolitan Area",
    // TODO: Replace with actual tagline
    tagline: "Crafting user-centered digital experiences",
    // TODO: Replace with actual bio (2-3 paragraphs)
    bio: "TODO: Add personal bio describing design philosophy and approach to creating meaningful digital experiences.",
    // TODO: Replace with actual headshot URL
    headshotUrl: "/images/headshot-placeholder.jpg"
  },

  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" }
  ],

  social: {
    // Verified links
    linkedin: "https://www.linkedin.com/in/marquise-fleming/",
    behance: "https://www.behance.net/marquisefl53ff",
    // TODO: Add if available
    dribbble: "",
    twitter: "",
    // TODO: Add contact email
    email: "TODO@email.com"
  },

  // Verified work history (extracted from LinkedIn/ZoomInfo)
  // TODO: Add dates and descriptions for each role
  workHistory: [
    {
      company: "ABM Industries",
      role: "Manager, UI & UX",
      period: "TODO: Add dates",
      description: "TODO: Add role description for current position at ABM Industries, a leading provider of facility solutions.",
      highlights: []
    },
    {
      company: "Y Media Labs",
      role: "Senior UI & UX Designer",
      period: "TODO: Add dates",
      description: "TODO: Add role description for position at Y Media Labs, a creative technology company.",
      highlights: []
    },
    {
      company: "Province Brands of Canada",
      role: "UI & UX Designer",
      period: "TODO: Add dates",
      description: "TODO: Add role description for position at Province Brands, a beverage company.",
      highlights: []
    },
    {
      company: "You42",
      role: "UI & UX Designer",
      period: "TODO: Add dates",
      description: "TODO: Add role description for position at You42, a technology company focused on solutions for content creators.",
      highlights: []
    },
    {
      company: "Devign",
      role: "UI & UX Designer",
      period: "TODO: Add dates",
      description: "TODO: Add role description for position at Devign, a design agency.",
      highlights: []
    },
    {
      company: "The Creative Momentum",
      role: "UI & UX Designer",
      period: "TODO: Add dates",
      description: "TODO: Add role description for position at The Creative Momentum, an advertising and marketing firm.",
      highlights: []
    },
    {
      company: "Peterson School of Tennis",
      role: "UI Designer",
      period: "TODO: Add dates",
      description: "TODO: Add role description for position at Peterson School of Tennis.",
      highlights: []
    }
  ],

  // Verified education (extracted from ZoomInfo)
  // TODO: Add graduation years
  education: [
    {
      institution: "Kennesaw State University",
      credential: "Information Technology",
      year: "TODO: Add year"
    },
    {
      institution: "IxDF - The Interaction Design Foundation",
      credential: "UX Designer Certification",
      year: "TODO: Add year"
    }
  ],

  // TODO: Add specific skills and tools
  skills: {
    design: [
      "User Interface Design",
      "User Experience Design",
      "User-Centered Design",
      "Design Thinking",
      "Visual Design",
      "Interaction Design"
    ],
    tools: [
      "TODO: Add design tools (e.g., Figma, Sketch, Adobe XD)"
    ],
    technical: [
      "TODO: Add technical skills"
    ]
  },

  // TODO: Replace placeholder case studies with actual projects
  caseStudies: [
    {
      id: "case-study-1",
      slug: "project-one",
      title: "TODO: Project Title",
      company: "TODO: Company/Client",
      role: "UI/UX Designer",
      timeline: "TODO: Timeline",
      thumbnail: "/images/project-1-thumb.jpg",
      heroImage: "/images/project-1-hero.jpg",
      overview: "TODO: Brief project overview describing the project and its goals.",
      problem: "TODO: Describe the problem or challenge this project addressed.",
      solution: "TODO: Describe the solution and approach taken.",
      process: {
        research: "TODO: Describe research phase and methods used.",
        ideation: "TODO: Describe ideation and concept development.",
        design: "TODO: Describe design execution and decisions.",
        testing: "TODO: Describe testing and validation process."
      },
      outcomes: {
        metrics: [],
        impact: "TODO: Describe the impact and results of the project."
      },
      images: [],
      tags: ["UX Design", "UI Design"]
    },
    {
      id: "case-study-2",
      slug: "project-two",
      title: "TODO: Project Title",
      company: "TODO: Company/Client",
      role: "UI/UX Designer",
      timeline: "TODO: Timeline",
      thumbnail: "/images/project-2-thumb.jpg",
      heroImage: "/images/project-2-hero.jpg",
      overview: "TODO: Brief project overview describing the project and its goals.",
      problem: "TODO: Describe the problem or challenge this project addressed.",
      solution: "TODO: Describe the solution and approach taken.",
      process: {
        research: "TODO: Describe research phase and methods used.",
        ideation: "TODO: Describe ideation and concept development.",
        design: "TODO: Describe design execution and decisions.",
        testing: "TODO: Describe testing and validation process."
      },
      outcomes: {
        metrics: [],
        impact: "TODO: Describe the impact and results of the project."
      },
      images: [],
      tags: ["UX Design", "UI Design"]
    },
    {
      id: "case-study-3",
      slug: "project-three",
      title: "TODO: Project Title",
      company: "TODO: Company/Client",
      role: "UI/UX Designer",
      timeline: "TODO: Timeline",
      thumbnail: "/images/project-3-thumb.jpg",
      heroImage: "/images/project-3-hero.jpg",
      overview: "TODO: Brief project overview describing the project and its goals.",
      problem: "TODO: Describe the problem or challenge this project addressed.",
      solution: "TODO: Describe the solution and approach taken.",
      process: {
        research: "TODO: Describe research phase and methods used.",
        ideation: "TODO: Describe ideation and concept development.",
        design: "TODO: Describe design execution and decisions.",
        testing: "TODO: Describe testing and validation process."
      },
      outcomes: {
        metrics: [],
        impact: "TODO: Describe the impact and results of the project."
      },
      images: [],
      tags: ["UX Design", "UI Design"]
    }
  ]
};

export default siteData;
