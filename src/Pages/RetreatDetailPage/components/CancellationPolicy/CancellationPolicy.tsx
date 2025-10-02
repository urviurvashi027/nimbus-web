import React from "react";
import styles from "./CancellationPolicy.module.scss";

interface CancellationPolicyProps {
  policyText: string;
  tags: string[];
}

const CancellationPolicy: React.FC<CancellationPolicyProps> = ({
  policyText,
  tags,
}) => {
  return (
    <section className={styles.policySection}>
      <div className={styles.divider}></div>
      <h2>Cancellation policy</h2>
      <p>{policyText}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <button key={tag}>{tag}</button>
        ))}
      </div>
    </section>
  );
};

export default CancellationPolicy;
