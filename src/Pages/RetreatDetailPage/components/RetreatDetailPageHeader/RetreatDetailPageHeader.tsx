import React from "react";
import { Link } from "react-router-dom";
import styles from "./RetreatDetailPageHeader.module.scss";
import { FaPlay, FaShareSquare, FaTh } from "react-icons/fa";

// Define the structure for the component's props
interface RetreatHeaderProps {
  breadcrumbs: { name: string; link: string }[];
  images: string[];
}

const RetreatDetailPageHeader: React.FC<RetreatHeaderProps> = ({
  breadcrumbs,
  images,
}) => {
  return (
    <header className={styles.retreatHeader}>
      {/* Breadcrumbs and Share Button */}
      <div className={styles.topBar}>
        <nav className={styles.breadcrumbs}>
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              <Link to={crumb.link}>{crumb.name}</Link>
              {index < breadcrumbs.length - 1 && " / "}
            </span>
          ))}
        </nav>
        <button className={styles.shareButton}>
          <FaShareSquare />
          <span>Share</span>
        </button>
      </div>

      {/* Image Gallery */}
      <div className={styles.imageGallery}>
        <div className={styles.mainImage}>
          <img src={images[0]} alt="Main retreat view" />
          <button className={styles.playButton}>
            <FaPlay />
          </button>
        </div>
        <div className={styles.sideImages}>
          <div className={styles.sideImageTop}>
            <img src={images[1]} alt="Retreat view 2" />
          </div>
          <div className={styles.sideImageBottom}>
            <img src={images[2]} alt="Retreat view 3" />
            <button className={styles.showAllButton}>
              <FaTh />
              <span>Show All</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RetreatDetailPageHeader;
