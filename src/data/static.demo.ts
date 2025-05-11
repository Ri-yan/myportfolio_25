const github = "https://github.com/yourusername";
const linkedin = "https://linkedin.com/in/yourusername";
const twitter = "https://twitter.com/yourusername";
const email = "your@email.com";

export const staticDemoData: any = {
  app: {
    logoText: "< YourName />",
    ownerName: "Your Name",
    resume: "#",
  },
  hero: {
    title: {
      main: "Developer & Designer",
      sub: "Crafting Digital Experiences",
    },
    images: [
      "https://picsum.photos/id/1011/400",
      "https://picsum.photos/id/1012/400",
      "https://picsum.photos/id/1015/400",
    ],
    previewImages: [
      "https://picsum.photos/id/1011/100",
      "https://picsum.photos/id/1012/100",
      "https://picsum.photos/id/1015/100",
    ],
    description: "I build responsive websites and applications using modern tech stacks.",
    buttons: {
      primary: {
        text: "View My Work",
        target: "projects",
      },
      secondary: {
        text: "Get In Touch",
        target: "contact",
      },
    },
    socialLinks: [
      { platform: "GitHub", url: github, icon: "GitHub" },
      { platform: "LinkedIn", url: linkedin, icon: "Linkedin" },
      { platform: "Twitter", url: twitter, icon: "Twitter" },
      { platform: "Email", url: `mailto:${email}`, icon: "Mail" },
    ],
    quotes: [
      "Clean code always wins.",
      "Design is not just what it looks like — it's how it works.",
    ],
  },
  about: {
    title: "About Me",
    subtitle: "Get to know more about me and my work.",
    introTitle: "Who am I?",
    intro: [
      "I'm a <span class='text-teal-500 font-medium'>Full Stack Developer</span> passionate about building scalable digital products.",
      "From front-end to back-end, I enjoy taking ideas and turning them into reality.",
      "Available for <span class='text-teal-500 font-medium'>freelance</span> or collaboration work. Let’s connect!",
    ],
    servicesTitle: "My Services",
    services: [
      {
        icon: "Code2",
        title: "Frontend Development",
        description: "Building responsive, performant user interfaces.",
      },
      {
        icon: "Cpu",
        title: "Backend Development",
        description: "Developing secure APIs and scalable backend systems.",
      },
    ],
  },
  services: {
    title: "<span>Services <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2'> I Provide </span></span>",
    subtitle: "Offering solutions tailored to your needs",
    items: [
      {
        icon: "Palette",
        title: "Web Design",
        description: "Creating beautiful and intuitive interfaces for the web.",
        gradient: "from-[#FF0080] to-[#7928CA]",
      },
      {
        icon: "Globe2",
        title: "API Integration",
        description: "Connecting applications with robust and reliable APIs.",
        gradient: "from-[#7928CA] to-[#FF0080]",
      },
    ],
  },
  skills: {
    title: 'My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2">Expertise</span>',
    subtitle: "Technologies and tools I work with",
    categories: [
      {
        category: "Frontend",
        items: [
          { name: "React", level: 80 },
          { name: "HTML/CSS", level: 90 },
        ],
      },
      {
        category: "Backend",
        items: [
          { name: "Node.js", level: 75 },
          { name: "Express", level: 70 },
        ],
      },
      {
        category: "Database",
        items: [
          { name: "MongoDB", level: 70 },
          { name: "MySQL", level: 65 },
        ],
      },
      {
        category: "Cloud",
        items: [
          { name: "Firebase", level: 70 },
          { name: "AWS", level: 60 },
        ],
      },
      {
        category: "AI & ML",
        items: [
          { name: "ChatGPT API", level: 60 },
          { name: "Python (Basics)", level: 50 },
        ],
      },
      {
        category: "Tools & Technologies",
        items: [
          { name: "Git", level: 80 },
          { name: "Visual Studio Code", level: 90 },
        ],
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    subtitle: "A selection of my work",
    subtitleTwo: "Other Projects",
    subtitleThree: "All Projects",
    categories: [
      { id: "all", label: "All Projects" },
      { id: "web", label: "Web Apps" },
      { id: "mobile", label: "Mobile" },
      { id: "ux", label: "UX/UI" },
      { id: "api", label: "API" },
    ],
    items: [
      {
        id: 1,
        title: "Portfolio Website",
        description: "Personal website showcasing my work and skills.",
        image: "https://picsum.photos/id/1005/500/300",
        technologies: ["React", "TailwindCSS"],
        github: github,
        demo: "#",
        category: "web",
        featured: true,
      },
      {
        id: 2,
        title: "ToDo App",
        description: "A task management app built using MERN stack.",
        image: "https://picsum.photos/id/1016/500/300",
        technologies: ["MongoDB", "Express", "React", "Node.js"],
        github: github,
        demo: "#",
        category: "web",
        featured: false,
      },
    ],
    githubLink: github,
  },
  testimonials: {
    title: "What People Say",
    subtitle: "Feedback from clients and colleagues",
    items: [
      {
        name: "Jane Doe",
        role: "Product Owner",
        image: "https://picsum.photos/id/1025/100/100",
        content: "Amazing developer! Delivered everything on time and with great quality.",
        rating: 5,
      },
      {
        name: "John Smith",
        role: "CEO at StartupX",
        image: "https://picsum.photos/id/1027/100/100",
        content: "Very professional and responsive. Highly recommend!",
        rating: 5,
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    leftHeader: "Contact Information",
    rightHeader: "Let’s Connect",
    subtitle: "Looking forward to hearing from you!",
    info: {
      description: "Open to freelance work, collaborations, or just a friendly chat.",
      location: "Your City, Your Country",
      email: email,
      phone: "+91 0000000000",
    },
  },
  footer: {
    description: "A developer with a passion for building clean, modern web applications.",
    socialLinks: [
      { platform: "GitHub", url: github },
      { platform: "LinkedIn", url: linkedin },
      { platform: "Twitter", url: twitter },
      { platform: "Email", url: `mailto:${email}` },
    ],
    quickLinks: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    contactme: {
      email: email,
      phone: "+91 0000000000",
      github: "github.com/yourusername",
      linkedin: "linkedin.com/in/yourusername",
      twitter: "twitter.com/yourusername",
    },
  },
};
