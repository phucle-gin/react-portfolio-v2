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
    time: "May 2025 - Present",
    location: "Melbourne, Vic",
    description:
      "Modernizing a Laravel and React application from the ground up — refactoring the backend, rebuilding the frontend with TypeScript and Redux, and putting proper test coverage in place across the full stack. Set up CI pipelines with linting and static analysis so quality issues get caught before they ship. Also brought in AI tooling to speed up code reviews and debugging, and own the deployment process across multiple environments.",
    tech: [
      "PHP",
      "Laravel",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "MySQL",
      "PHPUnit",
      "Jest",
      "Karma",
      "Cypress",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
  },
  {
    title: "Arcadian Digital",
    position: "Full Stack Developer",
    time: "Nov 2024 - Mar 2025",
    location: "Melbourne, Vic",
    description:
      "Built custom Gutenberg block tooling in React to give content teams more flexibility without needing developer involvement. Set up automated deployments via AWS CodePipeline with proper rollback strategies. Worked across the LAMP stack improving API integrations and tightening up security. Delivered accessible, responsive UI components to WCAG standards.",
    tech: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "React",
      "MySQL",
      "WordPress",
      "CSS/SCSS",
      "Docker",
      "AWS",
      "Git",
    ],
  },
  {
    title: "Newpath Web",
    position: "Full Stack Developer",
    time: "Nov 2023 - Nov 2024",
    location: "Melbourne, Vic",
    description:
      "Worked across PHP, React, TypeScript, and .NET on Drupal and WordPress redesigns for multiple clients. Containerized applications with Docker to streamline local and production environments. Brought in AWS S3 and Cloudflare to improve performance and reduce hosting costs.",
    tech: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "React",
      ".NET",
      "MySQL",
      "WordPress",
      "Drupal",
      "CSS/SCSS",
      "Docker",
      "AWS",
      "Cloudflare",
      "Git",
    ],
  },
  {
    title: "Queen Of My Universe",
    position: "Web Developer",
    time: "2023",
    location: "Melbourne, Vic",
    description:
      "Led the redevelopment of a WordPress site for a life coach, working alongside student designers and marketing experts to significantly enhance responsiveness and engagement. Boosted SEO and streamlined client relations through Mailchimp and PayPal integrations.",
    tech: [
      "PHP",
      "JavaScript",
      "jQuery",
      "MySQL",
      "HTML",
      "CSS/SCSS",
      "SEO",
      "APIs",
      "Cloudflare",
    ],
  },
];
