import React from "react";
import { Link } from "react-router-dom";
import styles from "./RetreatCard.module.scss";

// Define the structure for the retreat data
export interface Retreat {
  slug: string;
  title: string;
  host: string;
  image: string;
  price: string;
  date: string;
  location: string;
}

interface RetreatCardProps {
  retreat: Retreat;
}

const RetreatCard: React.FC<RetreatCardProps> = ({ retreat }) => {
  return (
    <Link to={`/retreats/${retreat.slug}`} className={styles.card}>
      <img
        src={retreat.image}
        alt={retreat.title}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{retreat.title}</h3>
        <p className={styles.cardHost}>Hosted by {retreat.host}</p>
        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <span className={styles.label}>From</span>
            <span className={styles.value}>{retreat.price}</span>
          </div>
          <div className={styles.partition}></div>
          <div className={styles.detailItem}>
            <span className={styles.label}>{retreat.date}</span>
            <span className={styles.value}>{retreat.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RetreatCard;
