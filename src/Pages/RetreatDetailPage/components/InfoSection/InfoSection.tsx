import React from "react";
import styles from "./InfoSection.module.scss";

// Define the props for the component
interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, children }) => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.divider}></div>
      <h2>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default InfoSection;
