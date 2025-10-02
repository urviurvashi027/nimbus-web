import React from "react";
import styles from "./HelpSidebar.module.scss";
import { FaChevronRight } from "react-icons/fa";

const helpOptions = [
  "Sleep better",
  "Reduce stress or anxiety",
  "Meditation",
  "Spirituality",
  "Something else",
];

const HelpSidebar: React.FC = () => {
  return (
    <aside className={styles.helpSidebar}>
      <h3>How can we help?</h3>
      {helpOptions.map((option) => (
        <button key={option}>
          <span>{option}</span>
          <FaChevronRight />
        </button>
      ))}
    </aside>
  );
};

export default HelpSidebar;
