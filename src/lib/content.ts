export const portfolioContent = {
  personal: {
    name: "Soumay Soni",
    role: "Frontend Developer",
    tagline: "Creating beautiful, responsive web experiences that drive results",
    bio: "Passionate frontend developer with 1+ years of experience building modern web applications. I specialize in React, Next.js, and Tailwind CSS, helping businesses bring their digital visions to life.",
    email: "soumaysoni1687@gamil.com",
    phone: "+91 8299421734",
    location: "New Delhi, India",
    resumeUrl: "/resume.pdf"
  },
  
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ],

  skills: [
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 92 },
    { name: "JavaScript", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Git & GitHub", level: 85 }
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and customer management.",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      githubUrl: "https://github.com/alexjohnson/ecommerce-dashboard",
      liveUrl: "https://dashboard-demo.vercel.app",
      imageUrl: "/project-1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
      techStack: ["React", "Firebase", "Material-UI", "Redux"],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://taskapp-demo.vercel.app",
      imageUrl: "/project-2.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      techStack: ["React", "OpenWeather API", "Styled Components"],
      githubUrl: "https://github.com/alexjohnson/weather-app",
      liveUrl: "https://weather-demo.vercel.app",
      imageUrl: "/project-3.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js, featuring smooth animations and responsive design.",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com/alexjohnson/portfolio",
      liveUrl: "https://alexjohnson.dev",
      imageUrl: "/project-4.jpg",
      featured: false
    }
  ],

  services: [
    {
      title: "Landing Pages",
      description: "High-converting landing pages that drive results and capture leads effectively.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Conversion Focused"],
      price: "Starting at $800"
    },
    {
      title: "Portfolio Websites",
      description: "Professional portfolio websites that showcase your work and attract clients.",
      features: ["Custom Design", "Content Management", "Mobile Responsive", "Performance Optimized"],
      price: "Starting at $1,200"
    },
    {
      title: "Web Applications",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "Database Integration", "Authentication", "Admin Dashboard"],
      price: "Starting at $2,500"
    },
    {
      title: "Dashboard UIs",
      description: "Beautiful and functional dashboard interfaces for data visualization and management.",
      features: ["Data Visualization", "Real-time Updates", "User Management", "API Integration"],
      price: "Starting at $1,800"
    }
  ],

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/alexjohnson",
      icon: "Linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/alexjohnson",
      icon: "Github"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/alexjohnson",
      icon: "Twitter"
    },
    {
      name: "Email",
      url: "mailto:alex@example.com",
      icon: "Mail"
    }
  ]
};