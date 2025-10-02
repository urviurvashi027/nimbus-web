import React from "react";
import { Link } from "react-router-dom";
import styles from "./RetreatPageHeader.module.scss";
import { FaSearch } from "react-icons/fa";

// Define the structure for the component's props
interface RetreatsPageHeaderProps {
  breadcrumbs: { name: string; link: string }[];
  title: string;
  subtitle: string;
}

const RetreatsPageHeader: React.FC<RetreatsPageHeaderProps> = ({
  breadcrumbs,
  title,
  subtitle,
}) => {
  return (
    <header className={styles.pageHeader}>
      <nav className={styles.breadcrumbs}>
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            <Link to={crumb.link}>{crumb.name}</Link>
            {index < breadcrumbs.length - 1 && " / "}
          </span>
        ))}
      </nav>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.searchWrapper}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search by destination, type, or teacher"
          />
          <FaSearch className={styles.searchIcon} />
        </div>
      </div>
    </header>
  );
};

export default RetreatsPageHeader;
