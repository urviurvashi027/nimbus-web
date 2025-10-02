import React from "react";
import styles from "./HeroSection.module.scss";
import GIF from "../Video/Video";
import heroGIF from "../../assets/heroSectionGif.gif";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <div className={styles.leftContent}>
          <p>
            “Mindfulness is simply being aware of what is happening right now
            without wishing it were different; enjoying the pleasant without
            holding on when it changes (which it will); being with the
            unpleasant without fearing it will always be this way (which it
            won’t).” ~James Baraz
          </p>
        </div>
        <div className={styles.rightContent}>
          <GIF videoPath={heroGIF} width="600" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
