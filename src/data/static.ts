import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";
const github = "https://github.com/ri-yan";
const linkedin = "https://linkedin.com/in/riyan08";
const twitter = "https://twitter.com/yourusername";
const email = "mriyan0801@gmail.com";
export const staticData: any = {
  app: {
    logoText: "< Riyan />",
    ownerName: "Mohd. Riyan",
    resume:
      "https://drive.google.com/file/d/1ZEnXY-lU7S37OgnR0_p7G-3ocg81TM74/view?usp=drive_link",
  },
  hero: {
    title: {
      main: "Developer Planner",
      sub: "& Leader",
    },
    images: [one, two, three, four, five, six, seven, eight, nine],
    previewImages: [
      "/assets/1.png",
      "/assets/2.png",
      "/assets/3.png",
      "/assets/4.png",
      "/assets/5.png",
      "/assets/6.png",
      "/assets/7.png",
      "/assets/8.png",
      "/assets/9.png",
    ],
    description:
      "I create exceptional digital experiences that make a difference. Specializing in modern web/mobile applications and innovative solutions.",
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
      {
        platform: "GitHub",
        url: github,
        icon: "GitHub",
      },
      {
        platform: "LinkedIn",
        url: linkedin,
        icon: "Linkedin",
      },
      {
        platform: "Twitter",
        url: twitter,
        icon: "Twitter",
      },
      {
        platform: "Email",
        url: `mailto:${email}`,
        icon: "Mail",
      },
    ],
    quotes: [
      "Design is intelligence made visible.",
      "Code is like humor. When you have to explain it, it's bad.",
      "Simplicity is the soul of efficiency.",
      "Make it work, make it right, make it fast.",
      "Creativity is nothing but a mind set free.",
      "Every great design begins with an even better story.",
      "Any product that needs a manual is broken.",
      "Good design is good business.",
      "The best way to predict the future is to invent it.",
    ],
  },
  about: {
    title: "About Me",
    subtitle:
      "Here you'll find more information about me, what I do, and my current skills mostly in terms of programming and technology.",
    introTitle: "Get to know me!",
    intro: [
      "I'm a <span class='text-teal-500 dark:text-teal-default font-medium'>Full Stack Developer</span> building robust and user-friendly web applications that solve real-world problems. I enjoy creating software that is both functional and visually appealing.",
      "I specialize in developing full-stack applications using modern technologies. My passion lies in designing efficient and scalable backend systems, as well as crafting engaging and intuitive user interfaces.",
      "In addition to my development work, I'm also available for <span class='text-teal-500 dark:text-teal-default font-medium'>freelance projects</span> and open to collaboration opportunities. If you have a project in mind, feel free to reach out!",
    ],
    servicesTitle: "My Services",
    services: [
      {
        icon: "Code2",
        title: "Web Development",
        description:
          "Creating responsive, user-friendly websites and applications with modern frameworks",
      },
      {
        icon: "Cpu",
        title: "API Development",
        description:
          "Designing and implementing RESTful APIs and backend services",
      },
      {
        icon: "Globe",
        title: "DevOps & Deployment",
        description:
          "Setting up CI/CD pipelines, cloud infrastructure, and containerization",
      },
      {
        icon: "Codepen",
        title: "Custom Solutions",
        description:
          "Building tailored software solutions for specific business needs",
      },
    ],
  },
  services: {
    title: "<span>Services <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2'> < I /> Provide  </span></span>",
    subtitle: "Delivering exceptional digital solutions tailored to your needs",
    items: [
      {
        icon: "Palette",
        title: "Graphic Design",
        description:
          "Creating stunning visual assets and brand identities that capture attention and communicate your message effectively.",
        gradient: "from-[#FF0080] to-[#7928CA]",
      },
      {
        icon: "Globe2",
        title: "Web Design",
        description:
          "Crafting beautiful, responsive websites that provide exceptional user experiences across all devices.",
        gradient: "from-[#7928CA] to-[#FF0080]",
      },
      {
        icon: "Layers",
        title: "UI/UX Design",
        description:
          "Designing intuitive interfaces and seamless user experiences that delight and engage your audience.",
        gradient: "from-[#00F5A0] to-[#00D9F5]",
      },
      {
        icon: "Code2",
        title: "Frontend Development",
        description:
          "Building modern, performant web applications using the latest technologies and best practices.",
        gradient: "from-[#00D9F5] to-[#00F5A0]",
      },
      {
        icon: "LineChart",
        title: "Business Analysis",
        description:
          "Providing strategic insights and data-driven solutions to help your business grow and succeed.",
        gradient: "from-[#7928CA] to-[#FF0080]",
      },
      {
        icon: "Megaphone",
        title: "Digital Marketing",
        description:
          "Implementing effective digital marketing strategies to increase your online presence and reach.",
        gradient: "from-[#00F5A0] to-[#00D9F5]",
      },
    ],
  },
  skills: {
    title:
      'My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2">Expertise</span>',
    subtitle: "Proficient in modern technologies and frameworks",
    categories: [
      {
        category: "Frontend",
        items: [
          {
            name: "React",
            level: 90,
          },
          {
            name: "Next.js",
            level: 85,
          },
          {
            name: "TypeScript",
            level: 90,
          },
          {
            name: "Vue.js",
            level: 80,
          },
          {
            name: "TailwindCSS",
            level: 85,
          },
        ],
      },
      {
        category: "Backend",
        items: [
          {
            name: "Node.js",
            level: 90,
          },
          {
            name: "Express",
            level: 85,
          },
          {
            name: "Python",
            level: 80,
          },
          {
            name: "Django",
            level: 75,
          },
          {
            name: "GraphQL",
            level: 70,
          },
        ],
      },
      {
        category: "Database",
        items: [
          {
            name: "MongoDB",
            level: 85,
          },
          {
            name: "PostgreSQL",
            level: 80,
          },
          {
            name: "Redis",
            level: 75,
          },
          {
            name: "MySQL",
            level: 80,
          },
          {
            name: "Firebase",
            level: 85,
          },
        ],
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    subtitle: "Explore my latest works and creative endeavors",
    subtitleTwo: "Other Noteworthy Projects",
    subtitleThree: "Featured Projects",
    categories: [
      {
        id: "all",
        label: "All Projects",
      },
      {
        id: "web",
        label: "Web Apps",
      },
      {
        id: "mobile",
        label: "Mobile",
      },
      {
        id: "ux",
        label: "UX/UI",
      },
      {
        id: "api",
        label: "API",
      },
    ],
    items: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description:
          "A full-featured e-commerce platform with product management, user authentication, and payment processing.",
        image:
          "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/yourusername/project-1",
        demo: "https://project-1.example.com",
        category: "web",
        featured: true,
      },
      {
        id: 2,
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates, team management, and analytics.",
        image:
          "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["React", "Redux", "Firebase"],
        github: "https://github.com/yourusername/project-2",
        demo: "https://project-2.example.com",
        category: "web",
        featured: true,
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description:
          "A weather forecasting application that provides detailed weather information for any location.",
        image:
          "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
        github: "https://github.com/yourusername/project-3",
        demo: "https://project-3.example.com",
        category: "web",
        featured: false,
      },
      {
        id: 4,
        title: "Social Media Mobile App",
        description:
          "A cross-platform mobile application for social media interaction with features like posts, comments, and messaging.",
        image:
          "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["React Native", "Firebase", "Redux"],
        github: "https://github.com/yourusername/project-4",
        demo: "https://project-4.example.com",
        category: "mobile",
        featured: true,
      },
      {
        id: 5,
        title: "RESTful API Service",
        description:
          "A robust API service for data processing and integration with third-party systems.",
        image:
          "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
        github: "https://github.com/yourusername/project-5",
        demo: "https://project-5.example.com",
        category: "api",
        featured: false,
      },
      {
        id: 6,
        title: "UI Component Library",
        description:
          "A comprehensive collection of reusable UI components with customization options.",
        image:
          "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["React", "Storybook", "Styled Components"],
        github: "https://github.com/yourusername/project-6",
        demo: "https://project-6.example.com",
        category: "ux",
        featured: false,
      },
    ],
    githubLink: github,
  },
  testimonials: {
    title: "What My Clients Say",
    subtitle: "Testimonials from satisfied clients",
    items: [
      {
        name: "Sarah Johnson",
        role: "CEO at TechStart",
        image:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content:
          "Working with this team has been an absolute pleasure. Their attention to detail and creative approach to problem-solving has significantly improved our digital presence.",
        rating: 5,
      },
      {
        name: "Michael Chen",
        role: "Product Manager",
        image:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content:
          "The level of professionalism and technical expertise is outstanding. They delivered our project ahead of schedule and exceeded all expectations.",
        rating: 5,
      },
      {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        image:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content:
          "Their innovative solutions and strategic thinking have helped us achieve remarkable growth. A truly reliable and talented partner for any digital project.",
        rating: 5,
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    leftHeader: "Contact Information",
    rightHeader: "Send Me a Message",
    subtitle: "Feel free to contact me for any project or collaboration",
    info: {
      description:
        "I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me.",
      location: "Lucknow, Uttar Pradesh, India",
      email: email,
      phone: "+91 9044271286",
    },
  },
  footer: {
    description:
      "A passionate Software Engineer and Freelancer building digital products with a focus on user experience.",
    socialLinks: [
      {
        platform: "GitHub",
        url: github,
      },
      {
        platform: "LinkedIn",
        url: linkedin,
      },
      {
        platform: "Twitter",
        url: twitter,
      },
      {
        platform: "Email",
        url: `mailto:${email}`,
      },
    ],
    quickLinks: [
      {
        name: "Home",
        href: "#hero",
      },
      {
        name: "About",
        href: "#about",
      },
      {
        name: "Skills",
        href: "#skills",
      },
      {
        name: "Projects",
        href: "#projects",
      },
      {
        name: "Contact",
        href: "#contact",
      },
    ],
    contactme: {
      email: email,
      phone: "+91 9044271286",
      github: "github.com/ri-yan",
      linkedin: "linkedin.com/in/riyan08",
      twitter: "twitter.com/yourusername",
    },
  },
};
