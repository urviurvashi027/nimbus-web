import React from "react";
import styles from "./Footer.module.scss";
import { FaGlobe, FaCookieBite, FaChevronDown } from "react-icons/fa";

// --- Data for the footer links ---
const footerData = {
  insightTimer: {
    version: "v2.419.20",
    copyright: "© Copyright 2025 Silent Bonus. All rights reserved.",
  },
  browse: {
    title: "Browse",
    links: [
      "Yoga",
      "Live Events",
      "Popular Meditations",
      "Meditation Music",
      "Meditation Playlists",
      "Meditation Courses",
      "Meditation Topics",
      "Meditation Teachers",
      "Meditation Meet-ups",
      "Meditate Near You",
    ],
  },
  resources: {
    title: "Resources",
    links: [
      "Member Plus",
      "Meditation Timer",
      "Become a Teacher",
      "Better sleep guide",
      "How to meditate guide",
      "Anxiety's Effects On Our Health",
      // "Course Directory",
      "Guided Meditations Directory",
      "Playlists Directory",
      // "Retreats Directory",
      // "Add an Embeddable Player",
      // "AI Safety",
    ],
  },
  company: {
    title: "Company",
    links: [
      "About us",
      "Blog",
      // "diWork Blog",
      "Support",
      "Media",
      "Careers",
      "Terms of Service",
      "Privacy Policy",
      // "CA Notice at Collection",
      // "Accessibility Statement",
    ],
  },
  crisisSupport: {
    title: "Crisis support",
    text: "If you are in a crisis or any other person may be in danger - don't use this site. Use these resources.",
  },
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Column 1: InsightTimer Info */}
        <div className={styles.infoColumn}>
          <h3 className={styles.logo}>Nimbus</h3>
          <p className={styles.version}>{footerData.insightTimer.version}</p>
          <p className={styles.copyright}>
            {footerData.insightTimer.copyright}
          </p>
          <button className={styles.downloadButton}>Download our App</button>

          <div className={styles.settings}>
            <a href="#" className={styles.settingLink}>
              {/* <FaGlobe /> USA <FaChevronDown size={12} /> */}
            </a>
            <a href="#" className={styles.settingLink}>
              <FaCookieBite /> Cookie Setting
            </a>
          </div>

          <div className={styles.crisisSupport}>
            <strong>{footerData.crisisSupport.title}</strong>
            <p>{footerData.crisisSupport.text}</p>
          </div>
        </div>

        {/* Column 2: Browse */}
        <div className={styles.linksColumn}>
          <h4>{footerData.browse.title}</h4>
          <ul>
            {footerData.browse.links.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className={styles.linksColumn}>
          <h4>{footerData.resources.title}</h4>
          <ul>
            {footerData.resources.links.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Company */}
        <div className={styles.linksColumn}>
          <h4>{footerData.company.title}</h4>
          <ul>
            {footerData.company.links.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
