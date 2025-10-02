import React from "react";
import { FaPause, FaChevronRight } from "react-icons/fa";
import styles from "./HelpSection.module.scss"; // Import the SCSS module

const helpOptions = [
  "Sleep better",
  "Reduce stress or anxiety",
  "Meditation",
  "Spirituality",
  "Something else",
];

const HelpSection: React.FC = () => {
  return (
    <div className={styles.helpSection}>
      <div className={styles.card}>
        <div className={styles.contentWrapper}>
          {/* Left Side: Phone Mockup */}
          <div className={styles.phoneMockup}>
            <div className={styles.phoneScreen}>
              <div className={styles.phoneTime}>27:28</div>
              <div className={styles.phoneControls}>
                <div>
                  <h2 className={styles.phoneTitle}>Morning Breathwork</h2>
                  <p className={styles.phoneSubtitle}>Julie Skon</p>
                </div>
                <div className={styles.phonePauseIcon}>
                  <FaPause />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Help Options */}
          <div className={styles.optionsWrapper}>
            <h1 className={styles.mainTitle}>How can we help?</h1>
            <div className={styles.optionsList}>
              {helpOptions.map((option) => (
                <button key={option} className={styles.optionButton}>
                  <span>{option}</span>
                  <FaChevronRight className={styles.optionIcon} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
