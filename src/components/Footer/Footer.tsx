import React from "react";

import styles from "./Footer.module.scss";

// import CommunityBanner from "./JoinCommunity/CommunityBanner";
import SocialLinks from "./SocialLinks/SocialLinks";
import QuickLinks from "./QuickLinks/QuickLinks";

const Footer: React.FC = () => {
  return (
    <>
      {/* <CommunityBanner /> */}
      <footer className={styles.footer}>
        <div className={styles.bottomSection}>
          <div className={styles.followMe}>
            <SocialLinks />
          </div>

          <QuickLinks />
          <div className={styles.newsletter}>
            <h3>Zento</h3>
            <p>
              Subscribe to our email newsletter and unlock access to{" "}
              <em>members-only</em> content and{" "}
              <strong>exclusive updates</strong>.
            </p>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Enter your email address" />
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
