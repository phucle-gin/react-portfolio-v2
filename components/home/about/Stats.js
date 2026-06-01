import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">PHP</span>
            <span className="chip">Laravel</span>
            <span className="chip">React.js</span>
            <span className="chip">Redux</span>
            <span className="chip">HTML5</span>
            <span className="chip">CSS/SCSS</span>
            <span className="chip">MySQL</span>
            <span className="chip">WordPress</span>
            <span className="chip">AWS</span>
            <span className="chip">Docker</span>
            <span className="chip">CI/CD</span>
            <span className="chip">Jest</span>
            <span className="chip">Cypress</span>
            <span className="chip">PHPUnit</span>
            <span className="chip">Git</span>
            <span className="chip">Linux</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Next.js</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express</span>
            <span className="chip">Tailwind</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Python</span>
            <span className="chip">FastAPI</span>
            <span className="chip">.NET</span>
            <span className="chip">SQL Server</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
