import React from "react";
import styles from "./VenueSection.module.scss";
import { FaStar, FaTh } from "react-icons/fa";
import { GiMeditation, GiSpices, GiPalmTree, GiBed } from "react-icons/gi"; // Example icons

// Define the structure for the venue data
interface Venue {
  name: string;
  reviews: {
    rating: number;
    count: number;
  };
  image: string;
  description: string;
  amenities: {
    name: string;
    icon: React.ElementType;
  }[];
}

interface VenueSectionProps {
  venue: Venue;
}

const VenueSection: React.FC<VenueSectionProps> = ({ venue }) => {
  return (
    <section className={styles.venueSection}>
      <div className={styles.divider}></div>
      <h2>Venue</h2>
      <div className={styles.venueHeader}>
        <h3>{venue.name}</h3>
        <a href="#" className={styles.reviewsLink}>
          <FaStar /> {venue.reviews.rating} ★ {venue.reviews.count} Reviews
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img src={venue.image} alt={venue.name} />
        <button className={styles.showAllButton}>
          <FaTh /> Show All
        </button>
      </div>
      <p className={styles.description}>
        {venue.description} <a href="#">Show more </a>
      </p>
      <div className={styles.amenitiesGrid}>
        {venue.amenities.map((amenity) => (
          <div key={amenity.name} className={styles.amenityItem}>
            <amenity.icon />
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VenueSection;
