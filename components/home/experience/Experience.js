import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Brightgreen",
    position: "Full Stack Developer",
    time: "2025 - Present",
    location: "Melbourne, Vic",
    description:
      "Build and maintain in-house web applications at Brightgreen, leveraging React.js, TypeScript, MySQL and Laravel. Implemented robust testing frameworks with Jest, Cypress, and Karma to ensure high-quality code. Collaborated with cross-functional teams to deliver scalable solutions, enhancing user experience and operational efficiency.",
    tech: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "React",
      "MySQL",
      "Laravel",
      "Jest",
      "Cypress",
      "PHPUnit",
      "Karma",
      "Git",
      "AWS",
      "Monday",
    ],
  },
  {
    title: "Arcadian Digital",
    position: "Full Stack Developer",
    time: "2024 - 2025",
    location: "Melbourne, Vic",
    description:
      "Revamped web applications at Arcadian Digital, leveraging React.js, WordPress, and the LAMP stack. Led the development of custom Gutenberg blocks, streamlined AWS deployments, and delivered responsive, high-performance websites for notable clients such as Luna Park, Smile Solutions, Brunetti, and Bupa Wellness.",
    tech: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "React",
      "Apache",
      "MySQL",
      "WordPress/Drupal",
      "CSS/SCSS",
      "Docker",
      "Git",
      "AWS",
      "Harvest",
      "ClickUp",
      "Jira",
      "Linux",
    ],
  },
  {
    title: "Newpath",
    position: "Full Stack Developer",
    time: "2023 - 2024",
    location: "Melbourne, Vic",
    description:
      "Transformed web applications with a tech stack of PHP, JavaScript, React, and .NET, leading impactful redesigns in Drupal and WordPress. Enhanced team efficiency by optimizing workflows with Webpack and Docker, and cut costs by integrating AWS S3 and Cloudflare for better performance and savings.",
    tech: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "React",
      ".NET",
      "MySQL",
      "WordPress/Drupal",
      "CSS/SCSS",
      "Docker",
      "Git",
      "AWS",
      "Cloudflare",
      "Jira",
      "Linux",
    ],
  },
  {
    title: "Queen Of My Universe",
    position: "Web Developer",
    time: "2023 - 2023",
    location: "Melbourne, Vic",
    description:
      "Led the redevelopment of a WordPress site for a life coach with other student designers and marketing experts, significantly enhancing responsivity and engagement. Boosted SEO and streamlined client relations through Mailchimp and PayPal integrations, thus enhancing overall site efficiency and user experience. It was truely an amazing experience",
    tech: [
      "PHP",
      "JavaScript",
      "JQuery",
      "MySQL",
      "HTML",
      "CSS/SCSS",
      "XML",
      "SEO",
      "APIs",
      "Cloudflare",
    ],
  },
];
