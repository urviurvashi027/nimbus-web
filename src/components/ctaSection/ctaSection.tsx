import React from "react";
import styles from "./CtaSection.module.scss";

const CtaSection: React.FC = () => {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Join 30 million people today to improve your wellbeing
        </h2>
        <p className={styles.description}>
          Build out your own, personalized and effective wellness practice right
          here on Insight Timer today. For free.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </div>
  );
};

export default CtaSection;
