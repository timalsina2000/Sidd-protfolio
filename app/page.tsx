"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">SIDD</h1>
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Experience
              </a>
              <a
                href="#education"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Education
              </a>
              <a
                href="#skills"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              <div className="w-full  h-full rounded-full overflow-hidden bg-white">
               <Avatar className="w-32 h-32 mx-auto mb-6 ring-2 ring-offset-2 ring-blue-500/40">
                <AvatarImage src="/image/profile.jpg" alt="Siddhartha Timalsina" />
                <AvatarFallback className="text-3xl font-bold">ST</AvatarFallback>
              </Avatar>

              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
              Siddhartha Timalsina
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-6">
              Full-Stack / Mobile App Developer
            </p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
              Building reliable mobile apps and backends. Currently working as a
              Full-Stack Developer at Techyatra Labs, shipping React Native apps
              (Android & iOS) and Node.js backends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="/Siddhartha-Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                I’m a dedicated developer focused on creating seamless user
                experiences and dependable systems. I work across the stack:
                React Native for mobile and Node.js for backend services. I care
                about clean, maintainable code and steady delivery.
              </p>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
            <Card id="skills">
              <CardHeader>
                <CardTitle className="text-xl">Skills & Technologies</CardTitle>
                <CardDescription>What I work with daily</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Techyatra Labs */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Full-Stack Developer</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Techyatra Labs • Kaushaltar, Bhaktapur
                    </CardDescription>
                  </div>
                  <Badge variant="outline">Jan 2025 – Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>
                    Developed a Kindergarten mobile application (Android & iOS)
                    using React Native.
                  </li>
                  <li>
                    Built and deployed a Node.js backend with a multi-tenant
                    architecture.
                  </li>
                  <li>Published apps to the Play Store and App Store.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Asha Tech */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Junior Frontend Developer
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Asha Tech • Sinamangal, Kathmandu
                    </CardDescription>
                  </div>
                  <Badge variant="outline">Oct 2024 – Dec 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>
                    Worked on the frontend of{" "}
                    <Link
                      href="https://setukhabar.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 underline underline-offset-2"
                    >
                      setukhabar.com <ExternalLink className="h-3.5 w-3.5" />
                    </Link>{" "}
                    and other web portals.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sarbatra Inc. */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Intern</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Sarbatra Inc. • Shantinagar, Kathmandu
                    </CardDescription>
                  </div>
                  <Badge variant="outline">May 2024 – Aug 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Learned API handling, React (frontend), and Firebase.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Bachelor of Computer Application (BCA)
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Tribhuvan University — Samriddhi College, Lokanthali, Bhaktapur
                    </CardDescription>
                  </div>
                  <Badge variant="outline">Apr 2020 – Apr 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Cumulative GPA: 3.4</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Science</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Nasa Int’l College — Gairigaun, Tinkune
                    </CardDescription>
                  </div>
                  <Badge variant="outline">Mar 2018 – Mar 2020</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Cumulative GPA: 3.13</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Get In Touch
          </h2>
        <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-slate-600 mb-8">
              I’m open to new opportunities and collaborations. Let’s connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild variant="outline" size="lg">
                <a href="mailto:siddharthatimalsina@gmail.com" aria-label="Send Email">
                  <Mail className="mr-2 h-4 w-4" />
                  siddharthatimalsina@gmail.com
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+9779840923187" aria-label="Call Phone">
                  <Phone className="mr-2 h-4 w-4" />
                  +977 9840923187
                </a>
              </Button>
            </div>
            <div className="flex justify-center space-x-2">
              <Button
                asChild
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <a
                  href="https://www.linkedin.com/in/siddtim/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                aria-label="GitHub"
                title="GitHub"
              >
                <a
                  href="https://github.com/timalsina2000"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                aria-label="Email"
                title="Email"
              >
                <a href="mailto:siddharthatimalsina@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Siddhartha Timalsina. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
