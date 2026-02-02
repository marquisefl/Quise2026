/**
 * Site Content Data
 *
 * This file contains all content for the portfolio website.
 * Content extracted from marquisefleming.com website scrape.
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
    title: "Lead Product Designer",
    currentCompany: "ABM Industries",
    location: "Atlanta Metropolitan Area",
    tagline: "Lead Product Designer, Who Loves To Innovate",
    bio: "I believe that building exceptional experiences begins with understanding my users at a fundamental level. Through empathy and meticulous research, I uncover their motivations, challenges, and aspirations, allowing me to craft designs that resonate deeply and solve real problems.\n\nWith 8+ years of experience, I love solving complex problems through design ideation and prototyping to create impactful, user-centered solutions.",
    headshotUrl: "/images/homepage/image_10_BFvXCXIwf9cniGD7QnhH67IUw.png"
  },

  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" }
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/marquise-fleming/",
    behance: "https://www.behance.net/marquisefl53ff",
    dribbble: "",
    twitter: "",
    email: ""
  },

  workHistory: [
    {
      company: "ABM Industries",
      role: "Manager, UI & UX",
      period: "Current",
      description: "Leading UI/UX initiatives at ABM Industries, a leading provider of facility solutions.",
      highlights: []
    },
    {
      company: "Y Media Labs (YML)",
      role: "Senior UI & UX Designer",
      period: "Previous",
      description: "Collaborated with major clients including Kaiser Permanente, Twitter, Under Armour, and Elevate to deliver exceptional digital experiences.",
      highlights: [
        "Led design for Kaiser Permanente unified experience",
        "Developed Twitter Health brand identity and design system",
        "Reimagined Under Armour shopping experience"
      ]
    },
    {
      company: "Province Brands of Canada",
      role: "UI & UX Designer",
      period: "Previous",
      description: "Designed digital experiences for an innovative beverage company.",
      highlights: []
    },
    {
      company: "You42",
      role: "UI & UX Designer",
      period: "Previous",
      description: "Created user-centered solutions for content creators at this technology company.",
      highlights: []
    },
    {
      company: "Devign",
      role: "UI & UX Designer",
      period: "Previous",
      description: "Delivered design solutions at this creative design agency.",
      highlights: []
    },
    {
      company: "The Creative Momentum",
      role: "UI & UX Designer",
      period: "Previous",
      description: "Contributed to advertising and marketing design projects.",
      highlights: []
    }
  ],

  education: [
    {
      institution: "Kennesaw State University",
      credential: "Information Technology",
      year: ""
    },
    {
      institution: "IxDF - The Interaction Design Foundation",
      credential: "UX Designer Certification",
      year: ""
    }
  ],

  skills: {
    design: [
      "User Interface Design",
      "User Experience Design",
      "User-Centered Design",
      "Design Thinking",
      "Visual Design",
      "Interaction Design",
      "Design Systems",
      "Prototyping"
    ],
    tools: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "Adobe Creative Suite",
      "Framer"
    ],
    technical: [
      "User Research",
      "Competitive Analysis",
      "Wireframing",
      "Usability Testing"
    ]
  },

  caseStudies: [
    {
      id: "kaiser-permanente",
      slug: "kaiser-permanente",
      title: "Kaiser Permanente",
      company: "Kaiser Permanente",
      role: "User Experience and Interface Design",
      timeline: "June 2022",
      thumbnail: "/images/homepage/image_11_9BJAseVAPp5Iwz7fxw2rm5QNh8.png",
      heroImage: "/images/kaiser-permanente/image_02_ly2Yc4eLnYyYFL0iN8ajzh8LGQc.png",
      overview: "Kaiser Permanente partnered with YML to craft a vision for a unified experience that will boost brand awareness, and influence digital-first, health content seekers to return to KP.org as their trusted source of health content, ultimately increasing membership. Internally, our goal was even loftier: Help KP become one of America's trusted brands.",
      problem: "We faced the challenge of redesigning an outdated, complex design system into a calming and inviting experience that could adapt across different regions without relying on red. At the same time, we needed to ensure users could seamlessly connect with doctors, refill prescriptions, and track their medication fulfillment in one integrated platform.",
      solution: "As one of three designers on this project, I collaborated daily with KP design leadership and strategists, conducted and synthesized research, defined a new visual language and delivered prototypes, a digital playbook and a UI kit. Our recommendations are expected to be rolled out gradually over the next few years.",
      process: {
        research: "During our discovery, I collaborated closely with a KP researcher, a content strategist and our product manager. I wanted to understand our users' goals and desired outcomes, their content preferences, and how they currently engage with competitor sites and best-in-class content destinations.",
        ideation: "During our research, we also examined the unique challenges presented by COVID-19. Remote interviews and surveys revealed a growing reliance on digital healthcare solutions, but we discovered a critical gap in how users accessed telehealth services and fulfilled prescriptions online.",
        design: "We developed a design style that fosters community by creating a unified, accessible experience that connects members to care and to each other. The calming visuals and approachable interface make healthcare feel more welcoming and less intimidating.",
        testing: "By providing clarity, consistency, and ease of use, the design style reassures members that their health needs are supported with trust and reliability."
      },
      outcomes: {
        metrics: [
          "12 User Interviews",
          "2 User Group Types",
          "9 Stakeholder Interviews",
          "6 Competitors Audited"
        ],
        impact: "Trust is Built Through Transparency and Consistency. Empathy is Key to Shaping User Perceptions. A Unified Identity Drives Engagement and Recognition."
      },
      images: [
        "/images/kaiser-permanente/image_03_vUt5Pj6PLbO4WBMHJ9jzqKAvTk.png",
        "/images/kaiser-permanente/image_04_j0ZqgFl2cu7bUIGmYrIkAqAqHs.png",
        "/images/kaiser-permanente/image_05_vwgaxgCaLMPTjbi5jAdExdrwZE.png",
        "/images/kaiser-permanente/image_06_Ad468ejSZ43g2Jlq05FrhRApVN0.png",
        "/images/kaiser-permanente/image_07_aMyO2SIVvkfVJjHfwBpxl4HNus.png",
        "/images/kaiser-permanente/image_08_9laAN7NB8qfEWZ7DiESrTphao7I.png"
      ],
      tags: ["Medical", "UX Design", "UI Design"]
    },
    {
      id: "twitter-health",
      slug: "twitter-health",
      title: "Twitter Health",
      company: "Twitter",
      role: "User Experience and Interface Design",
      timeline: "June 2022",
      thumbnail: "/images/homepage/image_12_ZmdIpDaqkJFCyrTAYRCUhzHmsk.png",
      heroImage: "/images/twitter-health/image_01_9kL1pn84OycDYD6ZHX3Ev6DIE.png",
      overview: "Rethink how the Twitter community interacts with Twitter Health and how it supports them. During discovery with Twitter stakeholders, we gained critical insights into their commitment to fostering a safe and healthy platform for public discourse.",
      problem: "How do we define 'Health' — how do we talk about it and how do we deliver it in a way that builds trust and helps improve perceptions. During our research phase, we discovered a recurring theme among diverse user groups: many people did not feel safe on Twitter.",
      solution: "We developed a design style that set a tone of warmth and fairness, striking the balance between kindness and authority. By adopting a straightforward yet approachable aesthetic, we positioned Twitter Health as a strong, neutral decision-maker.",
      process: {
        research: "We conducted interviews and focus groups with a broad range of communities, including LGBTQ individuals, Black people, White people, Middle-class families, low-income users, affluent individuals, Christians, Catholics, Asians, Americans, Jewish people, and others.",
        ideation: "One of the most striking findings was the sense of isolation many users felt. Participants expressed a desire for tailored support groups or spaces where their unique challenges and concerns could be addressed.",
        design: "We explored design concepts including #HandsOn (Supportive, Caring, Fair), #StrengthInNumbers (Empathetic, Bold, Communal), and #Arbiter (Empathetic, Bold, Communal) to create a cohesive brand identity around Twitter Health.",
        testing: "Twitter faced a significant challenge in creating a cohesive brand identity around 'Twitter Health.' The initiative aimed to position the platform as a safe and inclusive digital space."
      },
      outcomes: {
        metrics: [
          "25 User Interviews",
          "30+ User Group Types",
          "5 Stakeholder Interviews",
          "100 Data points analyzed"
        ],
        impact: "Trust is Built Through Transparency and Consistency. Empathy is Key to Shaping User Perceptions. A Unified Identity Drives Engagement and Recognition."
      },
      images: [
        "/images/twitter-health/image_02_d29t8ayKLEefJ5I1rp1HUJmDIk.png",
        "/images/twitter-health/image_03_oMfjie3rnXDnflTUPQOnzjrkU.png",
        "/images/twitter-health/image_05_WJYeZm6n44R19PENvtJkT0z0w.png",
        "/images/twitter-health/image_09_UUElAuXvn6y1Lla5NVMSlSA1HOY.png",
        "/images/twitter-health/image_12_BgbbbquzjAKX10dIXZJBkQ8VIII.png",
        "/images/twitter-health/image_15_R9n5RMQfXM176LVvfuBS6y5sw.png",
        "/images/twitter-health/image_16_b0GLR9gr3a2EVklIL1D0nlewG0.png",
        "/images/twitter-health/image_17_sg4qwCxzpsKAwem0NfAlrqXVfw.png"
      ],
      tags: ["Social Media", "UX Design", "Brand Identity"]
    },
    {
      id: "elevate",
      slug: "elevate",
      title: "Elevate",
      company: "Elevate",
      role: "Visual Design, UI & UX Design",
      timeline: "August 2022",
      thumbnail: "/images/homepage/image_13_zJ7LkkocZymNL524hOxW7vqchg.png",
      heroImage: "/images/elevate/image_01_D18ORAtZcr6cAJ88FKgM3HjAmns.png",
      overview: "Delivering tailored financial solutions for non-prime users. During the discovery phase, we explored Elevate's vision to create a financial savings plan that empowers users to pay down debt effectively.",
      problem: "Users Feel Overwhelmed by the Complexity of Their Financial Situation. There's a Strong Desire for Tailored Guidance. Small Wins Motivate Users to Stay Committed.",
      solution: "We designed a tailored sign-up experience that gathered key insights about our users. By understanding their specific financial needs and challenges, we were able to recommend personalized solutions that aligned with their goals.",
      process: {
        research: "We conducted in-depth interviews with both users and stakeholders to gain a comprehensive understanding of their needs and expectations. We also analyzed Elevate's competitors, performing a detailed competitive analysis to identify opportunities for differentiation.",
        ideation: "After multiple client workshops and alignment sessions with our internal team, it became clear where we needed to focus our attention heading into design.",
        design: "We explored a variety of design languages to create a clear and intuitive experience that helps users easily understand how we plan to address their debt and achieve their financial goals. We created the Snowball and Avalanche debt payment methods.",
        testing: "Experience designed to empower users with actionable insights to improve their credit scores. We crafted this program to not only educate users on effective credit-building strategies but also to celebrate their accomplishments along the way."
      },
      outcomes: {
        metrics: [
          "12 User Interviews",
          "4 Competitors Audited",
          "8 Stakeholder Interviews",
          "100 Data points analyzed"
        ],
        impact: "Simplifying Complexity is a Powerful Skill. Empathy Drives Design. Collaboration is Key to Innovation."
      },
      images: [
        "/images/elevate/image_02_MOtXu98G5XeTFg1yBn9JQ2Wt18.png",
        "/images/elevate/image_03_tHY4g1UoP3kn0kk2G3G5dbKhvHE.png",
        "/images/elevate/image_05_NK1AA8hLq9nF7s5qiqkpXrXEo.png",
        "/images/elevate/image_06_o0zKJe9Iav1trPAOMF4K4TV550.png",
        "/images/elevate/image_07_iBYtTKAa44PxzgehAjB4tfR9FaM.png",
        "/images/elevate/image_08_F117V2Vxvrd6y0BetyPKd7mK0.png",
        "/images/elevate/image_09_psJJ7ikeBhRWATsYBAQPWOhDlQI.png",
        "/images/elevate/image_10_KImYDEUemaE8D0jr67kH2xUCTk.png"
      ],
      tags: ["Financial", "UX Design", "UI Design"]
    },
    {
      id: "under-armour",
      slug: "under-armour",
      title: "Under Armour",
      company: "Under Armour",
      role: "Visual Design, UI & UX Design",
      timeline: "August 2022",
      thumbnail: "/images/under-armour/image_01_zJ7LkkocZymNL524hOxW7vqchg.png",
      heroImage: "/images/under-armour/image_01_zJ7LkkocZymNL524hOxW7vqchg.png",
      overview: "Reimagined the athletic shopping experience with bold, dynamic, and competitive design solutions. Under Armour partnered with YML to redesign and reimagine their online shopping experience, aligning it with their bold and athletic brand identity.",
      problem: "Users felt that Under Armour's existing digital experience was outdated and lacked the advanced features offered by other leading athletic brands, such as personalized recommendations and robust community engagement tools.",
      solution: "Together, we focused on enhancing the customer journey by integrating modern design elements and intuitive functionality. This partnership helped position Under Armour to compete more effectively with top industry players while delivering an elevated digital experience.",
      process: {
        research: "To inform the redesign, we conducted in-depth interviews with both consumers and stakeholders. Consumers expressed a strong desire for an immersive shopping experience that combines engaging visuals with intuitive features.",
        ideation: "Stakeholders emphasized the importance of integrating lifestyle-driven elements into the design, aiming to align the shopping experience with consumers' daily routines and inspire more frequent purchases.",
        design: "We explored a bold design language that seamlessly blended athleticism with lifestyle elements, creating a dynamic and visually engaging experience. We aimed to explore innovative ways to highlight key pieces within each collection.",
        testing: "By incorporating bold visuals and strategic layouts, we brought focus to standout items, making them irresistible focal points."
      },
      outcomes: {
        metrics: [
          "7 User Interviews",
          "3 Competitors Audited",
          "4 Stakeholder Interviews",
          "3 Data points analyzed"
        ],
        impact: "Simplifying Complexity is a Powerful Skill. Empathy Drives Design. Collaboration is Key to Innovation."
      },
      images: [
        "/images/under-armour/image_03_0Y43LGVhvupa9xfGXRSE1gSeMdQ.png",
        "/images/under-armour/image_04_9BZRqLWDcsHqD0APiAQbMZ8GSM.png",
        "/images/under-armour/image_05_IxvES9bjyE05zHLLbeFgdfkFgQ.png",
        "/images/under-armour/image_06_4PCdAdKC65wnPvxJAsXBhSPWKRk.png",
        "/images/under-armour/image_07_rNzR6na8ezgT7WgjecDFym9p3Pk.png"
      ],
      tags: ["E-commerce", "UX Design", "UI Design"]
    }
  ]
};

export default siteData;
