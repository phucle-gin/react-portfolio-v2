import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [

  {
    title: "Nufarm",
    imgSrc: "/project-imgs/nufarm.png",
    projectLink: "https://nufarm.com/au/",
    tech: ["WordPress", "PHP", "JavaScript", "AWS", "MySQL" ],
    description:
      "While at Newpath I led the redesign of Nufarm’s multisite web platform, implementing WordPress Multisite to manage 50+ regional sites within a single instance.",
    modalContent: (
      <>
        <p>A complex website build, our team managed the regional sites from a customised multi-tenancy CMS on their enterprise AWS infrastructure. </p>
        <p>Utilized PHP, JavaScript, AWS, and MySQL to create a custom multi-tenancy CMS, supporting centralized content management for global brand consistency.</p>
        <p>More specifically, sharing a common set of features and modules, regional digital leads and external creative consultants can manage each of their respective sites efficiently using the same processes and methods. </p>
        <p>This solution drove cost savings, improved operational efficiency, and allowed Nufarm to scale and enter new markets, strengthening their competitive edge.</p>
      </>
    ),
  },
  {
    title: "Middy’s Electrical",
    imgSrc: "/project-imgs/middy.png",
    projectLink: "https://www.middys.com.au/",
    tech: ["React", "TypeScript", ".NET", "Kentico", "AWS", "MySQL"],
    description:
      "At Newpath, I helped Middy’s eCommerce platform by integrating React with Kentico’s .NET7 back-end. Custom solutions enhanced eCommerce, content management, and marketing automation, resulting in a more dynamic, responsive user experience.",
    modalContent: (
      <>
        <p>
          Middy&apos;s is an eCommerce platform that underwent a major transformation to improve user experience and system performance.
          I led the front-end revamp by integrating React into their existing Kentico-based system, while maintaining a robust .NET7 back-end.
        </p>
        <p>
          Kentico&apos;s Digital Experience Platform (DXP) was the core CMS and eCommerce solution, but due to the project&apos;s complex requirements, I worked on building custom functionalities to extend its capabilities.
        </p>
        <p>
          The project also leveraged Kentico&apos;s headless CMS features, eCommerce functionalities, and marketing automation tools, like email journeys and newsletters, which allowed Middy&apos;s marketing team to efficiently manage content updates and campaigns.
        </p>
      </>
    ),
  },
  {
    title: "Brunetti Classico",
    imgSrc: "/project-imgs/brunetti.png",
    code: "",
    projectLink: "https://brunetticlassico.com.au/",
    tech: ["React", "Gutenburg Block", "Woocommerce", "PHP","WordPress","AWS CodePipeline", "AWS S3", "MySQL", "Docker", "Kinsta"],
    description:
      "Led the redesign of Brunetti Classico’s eCommerce platform, building a custom Gutenberg block editor using React.js and integrating WooCommerce for seamless shopping.",
    modalContent: (
      <>
        <p>As part of a complete redesign for Brunetti Classico&apos;s eCommerce platform, I co-led the redesign of their eCommerce platform, where Arcadian Digital developed a custom plugin based on Gutenberg and powered by React.js.</p>
        <p> This plugin enhanced content creation by providing an intuitive interface for page builders, giving marketers greater flexibility to design pages with dynamic content while maintaining consistency across the site.</p>
        <p>The platform was integrated with WooCommerce to provide a seamless shopping experience, offering powerful eCommerce features like product management, customer accounts, and secure checkout.</p>
        <p>To optimize performance and streamline the development process, we used AWS CodePipeline for continuous deployment, AWS S3 for media storage, and Docker for containerization, ensuring smooth and fast website delivery.</p>
        <p>Additionally, the site was hosted on Kinsta, which allowed us to achieve industry-leading performance and reliability. The overall project resulted in a faster, more scalable website that improved both user experience and backend efficiency, helping Brunetti Classico grow its online presence and streamline operations.</p>
      </>
    ),
  },
  {
    title: "Wrest Point",
    imgSrc: "/project-imgs/wrest-point.png",
    projectLink: "https://wrestpoint.com.au/",
    tech: ["React", "Gutenburg Block", "PHP","WordPress","AWS CodePipeline", "AWS S3", "MySQL", "Docker", "Kinsta"],
    description:
      "Redesigned Wrest Point’s website using a custom Gutenberg plugin powered by React.js, enhancing content management and design flexibility. Similar to Brunetti, but with a more complex, visually rich design.",
    modalContent: (
      <>
      <p>The redesign of the Wrest Point website followed a similar approach to Brunetti, but with a more complex design tailored to their unique brand. </p>
      <p>We implemented a custom Gutenberg plugin powered by React.js developed by Arcadian Digital to offer flexible and dynamic content creation, allowing for a high level of customization without the limitations of traditional page builders.</p>
      <p>While Brunetti focused on a more straightforward eCommerce platform, Wrest Point required a more intricate and visually appealing design. The custom Gutenberg blocks empowered the team to create beautiful, engaging pages while maintaining ease of use for the content editors. This approach ensured that the website remained responsive, adaptable, and highly maintainable.</p>
      <p>Like Brunetti, the project was built with AWS CodePipeline for seamless deployment, AWS S3 for storage, and Docker for a consistent development environment. Hosted on Kinsta, the site delivered top-tier performance, providing a fast and reliable user experience.</p>
      <p>This redesign addressed the need for both visual appeal and robust backend performance, making it an essential tool for Wrest Point’s marketing team and their customers.</p>
      </>
    ),
  },
];
