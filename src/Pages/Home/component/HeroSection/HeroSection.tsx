import React from "react";
import styles from "./HeroSection.module.scss";
import heroGIF from "../../../../assets/bannerOne.gif";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background */}
      <div className={styles.bgWrap} aria-hidden="true">
        {/* <img src={heroGIF} className={styles.bgImg} alt="" /> */}
        {/* <video
          className={styles.bg}
          src={heroGIF}
          autoPlay
          loop
          muted
          playsInline
        /> */}
        <div className={styles.bgOverlay} />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <p className={styles.quote}>
          “Mindfulness is simply being aware of what is happening right now
          without wishing it were different; enjoying the pleasant without
          holding on when it changes (which it will); being with the unpleasant
          without fearing it will always be this way (which it won’t).”
          <br />
          ~James Baraz
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
