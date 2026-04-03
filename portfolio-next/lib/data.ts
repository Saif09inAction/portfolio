/**
 * Portfolio content — mirrored from saifsalmani.me (static site + script.js).
 * Image paths live under /public/images/ (copy from your existing deploy).
 */

export type Project = {
  id: string;
  type: "developer" | "editor";
  title: string;
  description: string;
  date: string;
  githubUrl: string;
  siteUrl: string;
  technologies: string[];
  thumbnail: string;
  /** Local MP4 under /public (e.g. /videos/reel.mp4) — carousel + modal use video when set */
  videoSrc?: string;
};

export type Achievement = {
  id: string;
  type: "developer" | "editor";
  name: string;
  platform: string;
  year: string;
  description: string;
  thumbnail: string;
  linkedinUrl?: string;
  position?: string;
  skill?: string;
};

/** Brand portraits (under public/images/profile/) */
export const siteImages = {
  heroPortrait: "/images/profile/hero-portrait-large.png",
  aboutPortrait: "/images/profile/portrait-tablet.png",
  heroAlt: "Saif — developer portrait with holographic card",
  aboutAlt: "Saif — portrait with digital tablet",
} as const;

export const hero = {
  line1: "Hey, I'm Saif —",
  line2: "Full Stack Developer",
  line3: "& Video Editor",
  sub: "based in Mumbai, India",
  intro:
    "Passionate developer and problem solver, turning complex challenges into elegant solutions through code.",
};

export const developerOverview =
  "I'm a passionate developer and problem solver, turning complex challenges into elegant solutions through code.";

export const editorOverview = [
  "I am an enthusiastic content creator and video editor with hands-on experience in creating engaging digital content for social media, college events, and brand-focused pages. I currently handle video editing for my college's external club Instagram page, where I create and edit most of the reels published on the page. I specialize in both short-form videos (Reels, Shorts) and long-form content, focusing on storytelling, pacing, and audience engagement.",
  "I have managed and contributed to content creation for college clubs, where I collaborated with teams to plan shoots, capture content, and edit videos that aligned with the event's theme and brand identity. My editing style prioritizes clean visuals, smooth transitions, and strong narrative flow, ensuring content feels professional and impactful. I have also edited videos for friends, demonstrating my versatility and ability to adapt to different creative needs.",
  "I am proficient in CapCut and Final Cut Pro, and I'm currently learning Adobe Premiere Pro to expand my skill set. Alongside editing, I have experience in basic graphic design, helping enhance videos and social posts with visual elements. I enjoy experimenting with trends, formats, and creative ideas while maintaining consistency and quality. Content creation for me is not just about editing videos, but about communicating ideas effectively and creatively.",
];

export const projects: Project[] = [
  {
    id: "dev-1",
    type: "developer",
    title: "PrismHold",
    description:
      "PrismHold is a luxury handmade brand co-founded with my brother. We have sold 100+ units and expanded sales via Amazon & Flipkart. Currently working together on growing the business and developing the brand further.",
    date: "2023-11-30",
    githubUrl: "https://github.com/Saif09inAction/Prismhold.store",
    siteUrl: "https://www.prismhold.store/",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/images/projects/prismhold.png",
  },
  {
    id: "dev-2",
    type: "developer",
    title: "LinguaSync",
    description:
      "LinguaSync is a real-time multilingual chat application built using the MERN stack. It enables users to communicate across different languages using instant translation while chatting. The app supports real-time messaging through Socket.IO, secure authentication using JWT, and persistent message storage in MongoDB.",
    date: "2024-01-15",
    githubUrl: "https://github.com/Saif09inAction/linguasync",
    siteUrl: "",
    technologies: [
      "React.js (Vite)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Axios",
    ],
    thumbnail: "/images/projects/lyguasync.png",
  },
  {
    id: "dev-3",
    type: "developer",
    title: "PlagiaCheck",
    description:
      "PlagiaCheck is a web-based plagiarism detection tool designed for academic use. Users can upload documents (PDF, DOCX, TXT), and the system analyzes content similarity using text-comparison techniques like cosine similarity and term frequency. Firebase is used for authentication and data handling.",
    date: "2024-02-20",
    githubUrl: "https://github.com/Saif09inAction/PlagiaCheck",
    siteUrl: "https://saif09inaction.github.io/PlagiaCheck/",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Firebase"],
    thumbnail: "/images/projects/plagiacheck.png",
  },
  {
    id: "dev-4",
    type: "developer",
    title: "FundFlow – Finance Learning Platform",
    description:
      "Finance learning platform built for hackathon and demo day events. Features include AI-powered stock price prediction model, paper trading for risk-free real-time practice, live finance news updates, and community chat for learning and discussion.",
    date: "2024-01-25",
    githubUrl: "https://github.com/Saif09inAction/Fund-Flow-mumbai-hacks",
    siteUrl: "",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "AI/ML"],
    thumbnail: "/images/projects/fundflow.png",
  },
  {
    id: "dev-5",
    type: "developer",
    title: "Revora",
    description:
      "Revora is an early-stage web project focused on experimenting with UI/UX concepts and application structure. The repository suggests exploration of layout design and interactive components, serving as a foundation for future feature expansion.",
    date: "2023-09-15",
    githubUrl: "https://github.com/Saif09inAction/Revora",
    siteUrl: "https://revorabysaif.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/images/projects/revora.png",
  },
  {
    id: "dev-6",
    type: "developer",
    title: "Family Info App",
    description:
      "A family management web application that allows users to add and manage family member details such as names, birthdays, and basic information. The app also highlights upcoming birthdays and important dates, acting as a digital family dashboard.",
    date: "2024-03-10",
    githubUrl: "https://github.com/Saif09inAction/family-info-app",
    siteUrl: "https://familyboard.netlify.app",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    thumbnail: "/images/projects/familyinfo.png",
  },
  {
    id: "dev-7",
    type: "developer",
    title: "Country Info",
    description:
      "Country Info is a web application that displays information about different countries using external APIs. Users can view details such as country name, flag, region, and other metadata.",
    date: "2023-12-15",
    githubUrl: "https://github.com/Saif09inAction/Country-Info",
    siteUrl: "https://country-info-app-by-saifsalmani.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/images/projects/countryinfo.png",
  },
  {
    id: "dev-8",
    type: "developer",
    title: "YouTube Clone",
    description:
      "A front-end clone of YouTube created to practice layout structuring, responsive design, and visual replication of a real-world platform.",
    date: "2023-10-20",
    githubUrl: "https://github.com/Saif09inAction/youtube-clone",
    siteUrl: "https://youtubeclone-by-saif.netlify.app/",
    technologies: ["HTML", "CSS"],
    thumbnail: "/images/projects/youtubeclone.png",
  },
  {
    id: "edit-reel-samayras-pets",
    type: "editor",
    title: "Samayra's Pets — pet store reel",
    description:
      "Client: local pet store. Edited a vertical reel to showcase the shop and products for social — pacing, cuts, and look tailored for Instagram/Reels so the brand feels warm and approachable.",
    date: "2025",
    githubUrl: "",
    siteUrl: "",
    technologies: ["Client work", "Reels", "Retail / pets"],
    thumbnail: "/images/projects/externalclub.png",
    videoSrc: "/videos/samayras-pets.mp4",
  },
  {
    id: "edit-reel-square-v3",
    type: "editor",
    title: "Square v3 — real estate building",
    description:
      "Client: real estate. Edited this reel to promote a building on social — pacing and framing aimed at short-form feeds so the property reads clearly and holds attention.",
    date: "2025",
    githubUrl: "",
    siteUrl: "",
    technologies: ["Client work", "Reels", "Real estate"],
    thumbnail: "/images/projects/externalclub.png",
    videoSrc: "/videos/square-v3.mp4",
  },
  {
    id: "edit-1",
    type: "editor",
    title: "College Club Instagram Reel",
    description:
      "Created engaging Instagram reels for college external club page. Edited dynamic short-form content with smooth transitions, trending effects, and engaging storytelling.",
    date: "2024-12-15",
    githubUrl: "",
    siteUrl: "https://www.instagram.com/reel/DS-RH0Uj74Q/?igsh=cDl4MG9nY2RmdnJq",
    technologies: ["CapCut", "Final Cut Pro", "Premiere Pro"],
    thumbnail: "/images/projects/externalclub.png",
  },
  {
    id: "edit-2",
    type: "editor",
    title: "College Club Social Media Content",
    description:
      "Produced and edited social media reels for college club Instagram page. Focused on rhythm-based editing, color grading, and seamless cuts.",
    date: "2024-11-20",
    githubUrl: "",
    siteUrl: "https://www.instagram.com/reel/DO89iq-EtjS/?igsh=NGtoMDFqczJ3NjI5",
    technologies: ["CapCut", "Final Cut Pro", "Premiere Pro"],
    thumbnail: "/images/projects/externalclub.png",
  },
  {
    id: "edit-3",
    type: "editor",
    title: "College Club Instagram Reel Series",
    description:
      "Edited multiple Instagram reels for college external club. Trending transitions, visual effects, and compelling narratives end-to-end.",
    date: "2024-10-18",
    githubUrl: "",
    siteUrl: "https://www.instagram.com/reel/DOiwm8bCGe_/?igsh=MThxODBhaWoyYWZx",
    technologies: ["CapCut", "Final Cut Pro", "Premiere Pro"],
    thumbnail: "/images/projects/externalclub.png",
  },
  {
    id: "edit-4",
    type: "editor",
    title: "Social Media Video Editing",
    description:
      "Professional video content for college club social media. Short-form and long-form with pacing and audience engagement in mind.",
    date: "2024-09-22",
    githubUrl: "",
    siteUrl: "https://www.instagram.com/reel/DGa2H8bN9Bv/?igsh=MXVlb2E5NTBkMXd1eQ==",
    technologies: ["CapCut", "Final Cut Pro", "Premiere Pro"],
    thumbnail: "/images/projects/externalclub.png",
  },
  {
    id: "edit-5",
    type: "editor",
    title: "College Club Content Creation",
    description:
      "Managed and edited video content for college external club Instagram page. Planning shoots, capturing content, and editing aligned with brand identity.",
    date: "2024-08-30",
    githubUrl: "",
    siteUrl: "https://www.instagram.com/reel/DGzlWrQS1-m/?igsh=MW14cGo0Zmcxams3Mg==",
    technologies: ["CapCut", "Final Cut Pro", "Premiere Pro"],
    thumbnail: "/images/projects/externalclub.png",
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-dev-1",
    type: "developer",
    name: "🥈 1st Runner-Up – DemoDay 2025",
    platform: "ITM Skills University & LetsUpgrade",
    year: "2025",
    description:
      "Secured 1st Runner-Up position at Demo Day organized by ITM Skills University. Built a finance learning app featuring AI-powered stock price prediction, paper trading, live finance news updates, and community chat functionality.",
    thumbnail: "/images/achievements/DemoDay 2025 (1st Runner-Up).png",
    linkedinUrl:
      "https://www.linkedin.com/posts/saif-salmani-38b63a30b_financeapp-ai-demoday-activity-7358619143362736130-Ix3e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7wMJsBpGf8OfntguvZE7ddl_5AIEmDzOk",
    position: "1st Runner-Up (Team: Code Blooded Brothers)",
  },
  {
    id: "ach-dev-2",
    type: "developer",
    name: "Marketing Intern – LetsUpgrade",
    platform: "LetsUpgrade",
    year: "2024-2025",
    description:
      "Successfully completed two internships with LetsUpgrade as a Marketing Intern. Worked on business analysis, product improvement ideas, quality checking (QC) of projects, data collection and research, while learning corporate workflows.",
    thumbnail: "/images/achievements/ Quality Control Leadership.png",
    linkedinUrl:
      "https://www.linkedin.com/posts/saif-salmani-38b63a30b_internshipexperience-letsupgrade-marketinginternship-activity-7311539032281272320-IE5q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7wMJsBpGf8OfntguvZE7ddl_5AIEmDzOk",
    position: "Marketing Intern (Dec 2024 & Feb 2025)",
  },
  {
    id: "ach-dev-3",
    type: "developer",
    name: "Entrepreneurial Achievement – PrismHold",
    platform: "Co-Founder",
    year: "2024",
    description:
      "Co-founded a luxury handmade brand with my brother, sold 100+ units, and expanded sales via Amazon & Flipkart. Currently working together on growing the business.",
    thumbnail: "/images/achievements/Entrepreneurial.PNG",
    position: "Co-Founder & Entrepreneur",
  },
  {
    id: "ach-dev-4",
    type: "developer",
    name: "Mumbai Hacks 2024 – Guinness World Records",
    platform: "Mumbai Hacks",
    year: "2024",
    description:
      "Honored to be part of history at Mumbai Hacks 2024, officially recognized as the world's largest hackathon by Guinness World Records!",
    thumbnail: "/images/achievements/Mumbai Hacks 2024.png",
    linkedinUrl:
      "https://www.linkedin.com/posts/saif-salmani-38b63a30b_mumbaihacks2k24-worldrecord-guinnessworldrecords-activity-7256566133988769793-6MQe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7wMJsBpGf8OfntguvZE7ddl_5AIEmDzOk",
    position: "Participant",
  },
  {
    id: "ach-dev-5",
    type: "developer",
    name: "PIWOT Imagine Hackathon 2025",
    platform: "PIWOT",
    year: "2025",
    description:
      "Attended PIWOT Imagine Hackathon 2025 at Jio Convention Centre. Team made it to the demo round, showcasing innovative ideas.",
    thumbnail: "/images/achievements/PIWOT Hackathon.png",
    linkedinUrl:
      "https://www.linkedin.com/posts/saif-salmani-38b63a30b_hackathonexperience-innovation-teamwork-activity-7289224601560072192-JZDF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7wMJsBpGf8OfntguvZE7ddl_5AIEmDzOk",
    position: "Participant (Reached Demo Round)",
  },
  {
    id: "ach-dev-6",
    type: "developer",
    name: "Avalanche Hackathon – Mumbai Edition",
    platform: "Avalanche",
    year: "2024",
    description:
      "Participated in Avalanche Hackathon – Mumbai Edition. Connected with Web3 builders and explored projects built on Avalanche.",
    thumbnail: "/images/achievements/Avalanche Hackathon.png",
    linkedinUrl:
      "https://www.linkedin.com/posts/saif-salmani-38b63a30b_avalanche-hackathon-web3-activity-7364003970584911875-3MZF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7wMJsBpGf8OfntguvZE7ddl_5AIEmDzOk",
    position: "Participant",
  },
  {
    id: "ach-dev-7",
    type: "developer",
    name: "Stellar Hackathon – Pune",
    platform: "Stellar Hackathon",
    year: "2024",
    description:
      "Participated in a multi-team hackathon environment. Exposure to diverse ideas, competitive problem-solving, and real-world use cases.",
    thumbnail: "/images/achievements/stellar.png",
    position: "Participant",
  },
  {
    id: "ach-dev-8",
    type: "developer",
    name: "ITM DemoDay",
    platform: "ITM Skills University",
    year: "2024",
    description:
      "Presented a project to judges and peers. Evaluated on innovation, execution, and business potential.",
    thumbnail: "/images/achievements/demoday .png",
    position: "Participant",
  },
  {
    id: "ach-dev-9",
    type: "developer",
    name: "Mumbai Hacks 2025",
    platform: "Mumbai Hacks",
    year: "2025",
    description:
      "Returned as a participant with improved technical and presentation skills. Demonstrated growth through better project structuring and pitching.",
    thumbnail: "/images/achievements/mumbai hacks 2025.png",
    position: "Participant",
  },
  {
    id: "ach-edit-1",
    type: "editor",
    name: "🥈 1st Runner-Up – DemoDay 2025",
    platform: "ITM Skills University & LetsUpgrade",
    year: "2025",
    description:
      "Secured 1st Runner-Up position at Demo Day. Built a finance learning app with AI stock prediction, paper trading, live finance news, and community chat as part of Code Blooded Brothers team.",
    thumbnail: "/images/achievements/DemoDay 2025 (1st Runner-Up).png",
    linkedinUrl:
      "https://www.linkedin.com/posts/saif-salmani-38b63a30b_financeapp-ai-demoday-activity-7358619143362736130-Ix3e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7wMJsBpGf8OfntguvZE7ddl_5AIEmDzOk",
    skill: "Innovation & Business",
  },
  {
    id: "ach-edit-2",
    type: "editor",
    name: "PrismHold – Co-Founder",
    platform: "Entrepreneurship",
    year: "2024",
    description:
      "Co-founded luxury handmade brand with my brother, sold 100+ units via Amazon & Flipkart. Currently working together on growing the business.",
    thumbnail: "/images/achievements/Entrepreneurial.PNG",
    skill: "E-commerce & Marketing",
  },
  {
    id: "ach-edit-3",
    type: "editor",
    name: "Marketing Intern – LetsUpgrade",
    platform: "LetsUpgrade",
    year: "2024-2025",
    description:
      "Completed two internships (Dec 2024 & Feb 2025) as Marketing Intern. Worked on business analysis, product improvement, quality checking of projects, and learned corporate workflows.",
    thumbnail: "/images/achievements/ Quality Control Leadership.png",
    skill: "Business Analysis & Quality Control",
  },
];

export const developerSkillCategories = [
  {
    title: "Programming Languages",
    tags: ["Python", "Java", "C++", "JavaScript"],
    progress: 0.88,
  },
  {
    title: "Frontend Development",
    tags: ["HTML", "CSS", "JavaScript", "React.js"],
    progress: 0.9,
  },
  {
    title: "Backend Development",
    tags: ["Node.js", "Express.js"],
    progress: 0.82,
  },
  {
    title: "Databases & Backend Services",
    tags: ["MongoDB", "Firebase / Firestore"],
    progress: 0.85,
  },
  {
    title: "Core Computer Science",
    tags: ["DSA", "Problem Solving", "Logic Building", "Backend Architecture Basics"],
    progress: 0.87,
  },
  {
    title: "No-Code / Low-Code Tools",
    tags: ["WordPress", "Webflow", "Wix"],
    progress: 0.7,
  },
];

export const editorSkillCategories = [
  {
    title: "Video Editing",
    tags: [
      "Short-form (Reels, Shorts)",
      "Long-form editing",
      "Social media content",
      "Event & fest videos",
      "Storytelling through edits",
      "Instagram Reel creation",
      "College club content",
    ],
    progress: 0.92,
  },
  {
    title: "Editing Software",
    tags: ["CapCut", "Final Cut Pro", "Adobe Premiere Pro (Learning)"],
    progress: 0.88,
  },
  {
    title: "Graphic Design",
    tags: ["Social media creatives", "Visual assets", "Basic branding support"],
    progress: 0.75,
  },
];

export const about = {
  paragraphs: [
    "I am a passionate Computer Engineering student with a strong interest in software development, entrepreneurship, and technology-driven problem solving. I have hands-on experience in web development, backend systems, and real-world project execution, along with exposure to quality control, data analysis, and business operations through internships and startup experience.",
    "Alongside development, I have a creative side with experience in video editing and digital media, allowing me to blend technical skills with storytelling and content creation. I enjoy building practical solutions, learning new technologies, and working in fast-paced, collaborative environments such as hackathons and demo days. I am continuously focused on improving my skills and contributing to impactful tech projects.",
  ],
  education: {
    title: "Bachelor of Technology (BTech) – Computer Science Engineering",
    place: "ITM Skills University, Mumbai, India",
    period: "January 2024 – January 2028",
    body: "Pursuing a degree in Computer Science Engineering. Building a strong foundation in programming languages, Data Structures & Algorithms, and frontend/backend development. Actively involved in project-based learning, hackathons, and demo events. Achieved 🥈 1st Runner-Up at DemoDay 2025 for innovation and business potential.",
  },
  keyAchievements: [
    "🥈 1st Runner-Up – DemoDay 2025 (ITM Skills University & LetsUpgrade) - Finance Learning App with AI Stock Prediction",
    "Co-founded PrismHold with my brother – Sold 100+ luxury handmade units via Amazon & Flipkart, currently working together on growing the business",
    "Marketing Intern at LetsUpgrade (Dec 2024 & Feb 2025) – Business analysis, QC, and product development",
    "Participated in Mumbai Hacks 2024 – Guinness World Records for World's Largest Hackathon",
    "Reached Demo Round – PIWOT Imagine Hackathon 2025 at Jio Convention Centre",
    "Built 8+ projects including LinguaSync, PlagiaCheck, FundFlow, and Family Info App",
  ],
  skillsSummary:
    "Full-stack developer proficient in MERN stack, video editing, and graphic design. Strong foundation in Data Structures & Algorithms, problem-solving, and entrepreneurship. Experienced in product development, e-commerce operations, business analysis, and quality control. Participated in multiple hackathons including Guinness World Record Mumbai Hacks 2024, gaining exposure to Web3, blockchain (Avalanche), and innovative tech solutions.",
  internships: [
    {
      title: "PrismHold — Co-Founder",
      period: "2024",
      body: "Co-founded luxury handmade brand with my brother. Product development, e-commerce platform handling (Amazon, Flipkart), marketing strategy, vendor & logistics management, business operations & execution, entrepreneurship & leadership. Currently working together on growing the business.",
    },
    {
      title: "LetsUpgrade — Marketing Intern",
      period: "December 2024 & February 2025",
      body: "Business analysis and product improvement ideas, Quality Control (QC) of projects being developed, data collection and research, learning corporate workflows, team collaboration, and product development cycles.",
    },
  ],
  languages: [
    "Hindi – Proficient",
    "English – Advanced",
    "German – Beginner",
  ],
};

export const ideas = {
  subtitle: "Project and startup ideas I'm working on or exploring",
  cards: [
    { status: "Idea" as const, title: "Uploading Soon", problem: "Content will be available shortly." },
    { status: "In Progress" as const, title: "Uploading Soon", problem: "Content will be available shortly." },
    { status: "Built" as const, title: "Uploading Soon", problem: "Content will be available shortly." },
    { status: "Idea" as const, title: "Uploading Soon", problem: "Content will be available shortly." },
  ],
};

export const contact = {
  subtitle: "Let's connect and create something amazing together",
  links: [
    { label: "GitHub", href: "https://github.com/Saif09inAction", icon: "github" as const },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saif-salmani-38b63a30b/", icon: "linkedin" as const },
    { label: "Email", href: "mailto:saifsalmani224@gmail.com", icon: "mail" as const },
  ],
};

export const resumeUrl =
  "https://drive.google.com/uc?export=download&id=1hLZFlz9x_Os6IXZYqQ7-2h6wUpUgmsT0";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#developer", label: "Developer" },
  { href: "#editor", label: "Editor" },
  { href: "#ideas", label: "Ideas" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
