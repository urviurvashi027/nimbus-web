import React from "react";
import styles from "./MeditationInfo.module.scss";
import { FaStar } from "react-icons/fa";

// Define the structure for the meditation details
interface MeditationDetails {
  rated: string;
  type: string;
  activity: string;
  suitableFor: string;
  plays: string;
  description: string;
  tags: string[];
  transcript: string;
}

// Define the props for the component
interface MeditationInfoProps {
  details: MeditationDetails;
}

const MeditationInfo: React.FC<MeditationInfoProps> = ({ details }) => {
  return (
    <div className={styles.infoSection}>
      {/* Metadata Grid */}
      <div className={styles.metaGrid}>
        <div className={styles.metaItem}>
          <span className={styles.label}>Rated</span>
          <span className={styles.value}>
            <FaStar /> {details.rated}
          </span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>Type</span>
          <span className={styles.value}>{details.type}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>Activity</span>
          <span className={styles.value}>{details.activity}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>Suitable for</span>
          <span className={styles.value}>{details.suitableFor}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>Plays</span>
          <span className={styles.value}>{details.plays}</span>
        </div>
      </div>

      {/* Description */}
      <p className={styles.description}>{details.description}</p>

      {/* Tags */}
      <div className={styles.tags}>
        {details.tags.map((tag) => (
          <button key={tag} className={styles.tag}>
            {tag}
          </button>
        ))}
      </div>

      {/* Transcript */}
      <div className={styles.transcript}>
        <h3>Transcript</h3>
        <p>{details.transcript}</p>
      </div>
    </div>
  );
};

export default MeditationInfo;
