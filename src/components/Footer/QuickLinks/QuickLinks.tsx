import React from "react";
import styles from "./QuickLinks.module.scss";
import { Link } from "react-router-dom";

const QuickLinks: React.FC = () => {
  const links = [
    { name: "Home", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Features", url: "#" },
    { name: "Join Community", url: "#" },
    { name: "Term & Condition", url: "#" },
    { name: "Privacy Policy", url: "#" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>✨ Follow me!</h2>
      {links.map((link, index) => (
        <div key={index} className={styles.linkRow}>
          <Link to={link.url} className={styles.navLink}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
