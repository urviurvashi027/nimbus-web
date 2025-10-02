import React from "react";
import styles from "./CommunityBanner.module.scss";

const CommunityBanner: React.FC = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.leftSection}>
        <h1>
          Join to our community{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p>
          Unlock full access to <strong>Zento</strong> and see the entire
          library of <strong>paid-members</strong> only posts.
        </p>
      </div>
      <div className={styles.rightSection}>
        <p>
          Subscribe to our <strong>Newsletter</strong>, cancel at{" "}
          <strong>anytime</strong>.
        </p>
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default CommunityBanner;
