import React from "react";
import styles from "./AccommodationCard.module.scss";

// Define the structure for the accommodation data
export interface Accommodation {
  slug: string;
  title: string;
  image: string;
  details: string;
  price: string;
}

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({
  accommodation,
}) => {
  return (
    <div className={styles.card}>
      <img
        src={accommodation.image}
        alt={accommodation.title}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3>{accommodation.title}</h3>
        <p>{accommodation.details}</p>
        <span>{accommodation.price}</span>
      </div>
    </div>
  );
};

export default AccommodationCard;
