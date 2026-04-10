import Timeline from "~/components/timeline/Timeline";
import type { TimelineEntry } from "~/types/TimelineEntry";

const ExperienceView = (): React.ReactNode => {
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
    <div className="flex flex-col items-center w-full justify-center pt-16 pb-32 px-4">
      <div className="w-full max-w-5xl">
        <h1 className="h1 mb-12 text-center">Career Journey</h1>
        <Timeline entries={experienceData} />
      </div>
    </div>
  );
};

export default ExperienceView;
