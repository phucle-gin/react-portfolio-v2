import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Link from "next/link";
export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Henry<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Full Stack Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <div className={styles.aboutCopy}>
            I&apos;ve spent the last 2 years building and scaling software for innovative startups and <Link href="https://www.newpathweb.com.au/" className={styles.aboutLinks} target="_blank" rel="nofollow">
              a well-known digital agency
            </Link> and <Link href="https://www.arcadiandigital.com.au/" className={styles.aboutLinks} target="_blank" rel="nofollow"> another leading marketing agency
            </Link> in Melbourne. My focus is on creating pixel-perfect, engaging, and accessible digital experiences.  
            Let&apos;s connect!
          </div>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
