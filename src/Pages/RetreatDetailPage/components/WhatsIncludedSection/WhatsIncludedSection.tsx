import React from "react";
import styles from "./WhatsIncludedSection.module.scss";

// Define the structure for the component's props
interface WhatsIncludedProps {
  included: string[];
  notIncluded: string[];
}

const WhatsIncludedSection: React.FC<WhatsIncludedProps> = ({
  included,
  notIncluded,
}) => {
  return (
    <section className={styles.includedSection}>
      <div className={styles.divider}></div>
      <h2>What's Included</h2>
      <ul className={styles.list}>
        {included.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className={styles.subTitle}>Not Included</h3>
      <ul className={styles.list}>
        {notIncluded.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhatsIncludedSection;
