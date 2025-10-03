import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopicsDropdown.module.scss";

// --- Data for the dropdown menu, now with slugs for routing ---
const topicsData = {
  mainTitle: "The world's largest free audio library for everyday wellbeing",
  columns: [
    {
      title: "Sleep Health",
      links: [
        { name: "Sleep", slug: "sleep" },
        { name: "Sleep Music", slug: "sleep-music" },
      ],
    },
    {
      title: "Mental Health",
      links: [
        { name: "Anxiety", slug: "anxiety" },
        { name: "Stress", slug: "stress" },
      ],
    },
    // ... add all other columns and links with slugs
  ],
  sidebar: [
    {
      title: "Popular Search",
      links: [{ name: "Yoga Nidra", slug: "yoga-nidra" }],
    },
    {
      title: "Orientation",
      links: [{ name: "All", slug: "all-topics" }],
    },
  ],
};

interface TopicsDropdownProps {
  onLinkClick?: () => void;
}

const TopicsDropdown: React.FC<TopicsDropdownProps> = ({ onLinkClick }) => {
  return (
    <div className={styles.dropdownPanel}>
      <div className={styles.contentWrapper}>
        <p className={styles.mainTitle}>{topicsData.mainTitle}</p>
        <div className={styles.grid}>
          <div className={styles.mainColumns}>
            {topicsData.columns.map((column) => (
              <div key={column.title} className={styles.column}>
                <h3 className={styles.columnTitle}>{column.title}</h3>
                <ul className={styles.linkList}>
                  {column.links.map((link) => (
                    <li key={link.slug}>
                      <Link to={`/topics/${link.slug}`} onClick={onLinkClick}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.sidebarColumns}>
            {topicsData.sidebar.map((column) => (
              <div key={column.title} className={styles.column}>
                <h3 className={styles.columnTitle}>{column.title}</h3>
                <ul className={styles.linkList}>
                  {column.links.map((link) => (
                    <li key={link.slug}>
                      <Link to={`/topics/${link.slug}`} onClick={onLinkClick}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsDropdown;
