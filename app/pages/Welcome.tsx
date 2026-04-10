import GradientBorderCard from "~/components/gradient-border-card/GradientBorderCard";
import Timeline from "~/components/timeline/Timeline";
import type { TimelineEntry } from "~/types/TimelineEntry";
import "./Welcome.css";

const Welcome = (): React.ReactNode => {
  const experienceData: TimelineEntry[] = [
    {
      date: "2021 - Present",
      title: "Senior Full-Stack Engineer",
      company: "Tech Solutions Inc.",
      description:
        "Leading the design and implementation of scalable microservices architecture, managing cloud infrastructure on AWS and OpenShift, and mentoring junior developers.",
      technologies: [
        "Java",
        "Spring Boot",
        "Kubernetes",
        "AWS",
        "Docker",
        "PostgreSQL",
      ],
      achievements: [
        "Designed and implemented event-driven system handling 100k+ messages/day",
        "Reduced API response time by 40% through caching and query optimization",
        "Led migration of monolithic application to microservices (5 services)",
      ],
    },
    {
      date: "2019 - 2021",
      title: "Full-Stack Developer",
      company: "Innovation Labs",
      description:
        "Developed full-stack web applications using React and Node.js, implemented CI/CD pipelines, and managed containerized deployments.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Docker",
        "GitLab CI",
        "MongoDB",
      ],
      achievements: [
        "Built real-time dashboard serving 50k+ daily active users",
        "Implemented automated testing pipeline improving code quality by 35%",
        "Mentored 2 junior developers on best practices and clean code principles",
      ],
    },
    {
      date: "2017 - 2019",
      title: "Junior Backend Developer",
      company: "StartUp Ventures",
      description:
        "Developed RESTful APIs, optimized database queries, and contributed to infrastructure automation using infrastructure-as-code principles.",
      technologies: ["Java", "Spring", "MySQL", "AWS", "Git"],
      achievements: [
        "Developed 10+ REST APIs serving mobile and web applications",
        "Optimized database queries reducing load by 25%",
        "Set up initial CI/CD pipeline using Jenkins",
      ],
    },
    {
      date: "2016 - 2017",
      title: "Software Engineering Intern",
      company: "Digital Dynamics",
      description:
        "Assisted in development of web applications, learned enterprise development practices, and contributed to bug fixes and feature implementations.",
      technologies: ["Java", "JavaScript", "HTML/CSS", "MySQL"],
      achievements: [
        "Completed 20+ feature implementations and bug fixes",
        "Learned enterprise development practices and design patterns",
        "Received full-time offer upon internship completion",
      ],
    },
  ];

  return (
    <main className="flex flex-col items-center pt-16 pb-32 px-4">
      {/* Header Section */}
      <div className="w-full max-w-4xl text-center space-y-4 mb-12">
        <h1 className="h1 pop-in-header">Hi, I'm Tom</h1>
        <p className="pop-in-content text-lg text-surface-300 delay-1">
          Full-stack developer with expertise in cloud infrastructure and
          backend systems. I specialize in building scalable applications using
          modern technologies and containerization.
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="h3 pop-in-content delay-2 text-center mb-6 text-surface-200">
          Core Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GradientBorderCard
            title="Frontend Development"
            className="pop-in-content delay-2"
          >
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-xs font-medium">React</span>
              </div>
              <div>
                <span className="text-xs font-medium">TypeScript</span>
              </div>
              <div>
                <span className="text-xs font-medium">Tailwind CSS</span>
              </div>
              <div>
                <span className="text-xs font-medium">JavaScript</span>
              </div>
            </div>
          </GradientBorderCard>
          <GradientBorderCard
            title="Backend & Dev"
            className="pop-in-content delay-2"
          >
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-xs font-medium">Java</span>
              </div>
              <div>
                <span className="text-xs font-medium">Spring Boot</span>
              </div>
              <div>
                <span className="text-xs font-medium">Node.js</span>
              </div>
              <div>
                <span className="text-xs font-medium">REST APIs</span>
              </div>
            </div>
          </GradientBorderCard>
          <GradientBorderCard
            title="Cloud & DevOps"
            className="pop-in-content delay-2"
          >
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-xs font-medium">Kubernetes</span>
              </div>
              <div>
                <span className="text-xs font-medium">OpenShift</span>
              </div>
              <div>
                <span className="text-xs font-medium">AWS</span>
              </div>
              <div>
                <span className="text-xs font-medium">Helm</span>
              </div>
              <div>
                <span className="text-xs font-medium">Docker</span>
              </div>
              <div>
                <span className="text-xs font-medium">GitLab CI</span>
              </div>
              <div>
                <span className="text-xs font-medium">Jenkins</span>
              </div>
              <div>
                <span className="text-xs font-medium">GitHub Actions</span>
              </div>
              <div>
                <span className="text-xs font-medium">Git</span>
              </div>
            </div>
          </GradientBorderCard>
        </div>
      </div>

      {/* Architecture & Patterns Section */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="h3 pop-in-content delay-2 text-center mb-6 text-surface-200">
          Architecture & Design
        </h2>
        <GradientBorderCard
          title="Design Patterns & Event-Driven Systems"
          className="pop-in-content delay-2"
        >
          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-sm mb-2">
                Event-Driven Architecture
              </h4>
              <p className="text-xs text-surface-400">
                Message queues, event streaming, reactive architectures, and
                asynchronous processing patterns
              </p>
            </div>
            <div className="border-t border-surface-700 pt-3">
              <h4 className="font-bold text-sm mb-2">Design Patterns</h4>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-xs">Microservices</span>
                <span className="text-xs">MVC/MVVM</span>
                <span className="text-xs">CQRS</span>
                <span className="text-xs">Enterprise Patterns</span>
                <span className="text-xs">Clean Code</span>
                <span className="text-xs">SOLID Principles</span>
              </div>
            </div>
          </div>
        </GradientBorderCard>
      </div>

      {/* Certifications Section */}
      <div className="w-full max-w-4xl mb-16">
        <h2 className="h3 pop-in-content delay-2 text-center mb-6 text-surface-200">
          Certifications
        </h2>
        <GradientBorderCard title="" className="pop-in-content delay-2">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-surface-900">
              <div>
                <h4 className="font-bold text-sm">
                  AWS Certified Cloud Practitioner
                </h4>
                <p className="text-xs text-surface-400">Amazon Web Services</p>
              </div>
              <a
                href="https://www.credly.com/badges/67f54b8a-c9af-40ef-a081-4135aadb44ae/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm preset-filled-primary-500"
              >
                Verify
              </a>
            </div>
          </div>
        </GradientBorderCard>
      </div>

      {/* Career Journey Section */}
      <div className="w-full max-w-5xl mb-16">
        <h2 className="h3 pop-in-content delay-2 text-center mb-12 text-surface-200">
          Career Journey
        </h2>
        <div className="pop-in-content delay-3">
          <Timeline entries={experienceData} />
        </div>
      </div>

      {/* CTA Section */}
      <div className="pop-in-content delay-3">
        <a href="/projects" className="btn preset-filled-secondary-500">
          Explore My Work
        </a>
      </div>
    </main>
  );
};

export default Welcome;
