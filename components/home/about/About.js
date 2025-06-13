import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Henry, if you haven&apos;t already gathered that by
              now. I&apos;m a Full Stack Developer from Melbourne, Australia. I
              specialize in both frontend and backend, primarily LAMP (Linux,
              Apache, MySql, PHP) stack alongside with Drupal and WordPress, but
              love building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work at Brightgreen, where I contribute to an in-house
              project to leverage their product design and aim to build robust,
              flexible, scalable solutions.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love participating in outdoor activities,
              especially soccer. Any given Sunday, you&apos;ll find me showing
              off my footwork and having fun with my friends. ⚽️
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my
              passion for building scalable websites. If you think you&apos;ve
              got an opening that I might interest, I would love to discuss
              about it. ✌🏻
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
