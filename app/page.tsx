"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Download,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-50 bg-background/50 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity">
              SIDD<span className="text-primary">.</span>
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              {["About", "Experience", "Education", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
              <Button variant="outline" size="sm" className="rounded-full px-6">
                Let's talk
              </Button>
            </div>
          </nav>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-float" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '-3s' }} />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-8 relative inline-block">
              <div className="relative z-10">
                <Avatar className="w-40 h-40 mx-auto mb-8 ring-4 ring-primary/20 p-1 bg-background">
                  <AvatarImage
                    src="./image/Profile.JPG"
                    alt="Siddhartha Timalsina"
                    className="object-cover rounded-full"
                  />
                  <AvatarFallback className="text-4xl font-bold bg-muted">ST</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10 animate-pulse" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
                Siddhartha Timalsina
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium max-w-3xl mx-auto leading-tight">
                Crafting <span className="text-foreground">premium</span> digital experiences across mobile and web.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform">
                <a href="/Siddhartha-Resume.pdf" download>
                  View Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-10 h-14 text-lg font-bold hover:bg-muted/50 transition-colors">
                <a href="#contact">
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 relative overflow-hidden">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter text-center">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="grid md:grid-cols-5 gap-12 items-start">
                <div className="md:col-span-3 space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    I'm a dedicated developer focused on creating <span className="text-foreground">seamless user experiences</span> and dependable systems. I work across the stack, specializing in React Native for mobile and Node.js for backend services.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    I care about clean, maintainable code and steady delivery. My goal is to bridge the gap between complex logic and elegant interfaces.
                  </p>
                  <div className="flex items-center gap-3 text-foreground font-medium p-4 bg-muted/30 rounded-2xl w-fit">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Kathmandu, Nepal</span>
                  </div>
                </div>

                <div id="skills" className="md:col-span-2">
                  <Card className="bg-surface-glass border-border/50 backdrop-blur-xl shadow-premium rounded-3xl overflow-hidden">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl font-bold tracking-tight">Daily Stack</CardTitle>
                      <CardDescription>Core technologies I use to build products.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React Native", "React", "Node.js",
                          "JavaScript", "TypeScript", "Tailwind CSS",
                          "Firebase", "PostgreSQL", "Leadership"
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-none hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-1.5 rounded-full text-sm font-semibold"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 relative">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-center">
                My <span className="text-primary">Journey</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-12">
                {[
                  {
                    company: "Techyatra Labs",
                    location: "Kathmandu",
                    role: "Full-Stack Developer",
                    period: "Jan 2025 – Present",
                    description: [
                      "Developed a Kindergarten mobile application (Android & iOS) using React Native.",
                      "Built and deployed a Node.js backend with a multi-tenant architecture.",
                      "Published apps to the Play Store and App Store."
                    ]
                  },
                  {
                    company: "Asha Tech",
                    location: "Kathmandu",
                    role: "Junior Frontend Developer",
                    period: "Oct 2024 – Dec 2024",
                    description: [
                      "Worked on the frontend of setukhabar.com and other web portals."
                    ]
                  },
                  {
                    company: "Sarbatra Inc.",
                    location: "Bhaktapur",
                    role: "Intern",
                    period: "May 2024 – Aug 2024",
                    description: [
                      "Learned API handling, React (frontend), and Firebase."
                    ]
                  }
                ].map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className="bg-surface-glass border-border/50 backdrop-blur-xl shadow-premium rounded-[2rem] p-8 hover:border-primary/50 transition-colors group">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                        <div>
                          <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</CardTitle>
                          <p className="text-lg text-muted-foreground font-medium">{exp.company} • {exp.location}</p>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-none text-sm px-4 py-1.5 rounded-full">
                          {exp.period}
                        </Badge>
                      </div>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                            <span className="text-primary mt-1.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-6 relative bg-muted/20">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-center">
              Learning <span className="text-primary">Path</span>
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  degree: "Bachelor of Computer Application (BCA)",
                  school: "Samriddhi College (TU)",
                  location: "Bhaktapur",
                  period: "2020 – 2025",
                  gpa: "3.4"
                },
                {
                  degree: "Science",
                  school: "Nasa Int’l College",
                  location: "Kathmandu",
                  period: "2018 – 2020",
                  gpa: "3.13"
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-surface-glass border-border/50 backdrop-blur-xl shadow-premium rounded-[2rem] p-8 h-full">
                    <CardTitle className="text-2xl font-bold mb-2">{edu.degree}</CardTitle>
                    <p className="text-primary font-bold mb-2">{edu.school}</p>
                    <p className="text-muted-foreground mb-4">{edu.location} • {edu.period}</p>
                    <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">GPA</span>
                      <span className="text-xl font-black">{edu.gpa}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
                Let's <span className="text-primary">Connect</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                I’m always open to new opportunities, collaborations, or just a friendly chat about tech. Reach out and let's build something amazing together.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
                {[
                  { icon: Mail, label: "siddharthatimalsina@gmail.com", href: "mailto:siddharthatimalsina@gmail.com" },
                  { icon: Phone, label: "+977 9840923187", href: "tel:+9779840923187" }
                ].map((item, i) => (
                  <Button key={i} asChild variant="outline" size="lg" className="rounded-2xl h-16 px-8 text-lg border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group">
                    <a href={item.href}>
                      <item.icon className="mr-3 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      {item.label}
                    </a>
                  </Button>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/siddtim/", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/timalsina2000", label: "GitHub" },
                  { icon: Mail, href: "mailto:siddharthatimalsina@gmail.com", label: "Email" }
                ].map((social, i) => (
                  <Button
                    key={i}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="w-14 h-14 rounded-2xl bg-muted/30 hover:bg-primary/10 hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <a href={social.href} target="_blank" rel="noreferrer">
                      <social.icon className="h-6 w-6" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 px-6 bg-muted/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground font-medium">
            © {new Date().getFullYear()} <span className="text-foreground">Siddhartha Timalsina</span>.
          </p>
          <div className="flex items-center gap-8">
            <p className="text-sm text-muted-foreground font-bold tracking-widest uppercase">Built with Passion</p>
            <div className="w-12 h-0.5 bg-primary/30" />
            <p className="text-sm text-primary font-bold tracking-widest uppercase">2025 Edition</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
