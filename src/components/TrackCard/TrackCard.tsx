import React from "react";
import { Link } from "react-router-dom";
import styles from "./TrackCard.module.scss";
import { FaStar } from "react-icons/fa";

// Define the structure for the track data
export interface Track {
  slug: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  genre: string;
  duration: string;
}

interface TrackCardProps {
  track: Track;
}

const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
  return (
    <Link to={`/track/${track.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={track.image} alt={track.title} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.metaTop}>
          <span>
            <FaStar /> {track.rating}
          </span>
          <span>•</span>
          <span>{track.genre}</span>
          <span>•</span>
          <span>{track.duration}</span>
        </div>
        <h3 className={styles.cardTitle}>{track.title}</h3>
        <p className={styles.cardAuthor}>{track.author}</p>
      </div>
    </Link>
  );
};

export default TrackCard;
