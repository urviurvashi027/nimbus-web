import React from "react";
import styles from "./HostCard.module.scss";
import { FaCheckCircle, FaComment, FaChalkboardTeacher } from "react-icons/fa";

// Define the structure for a single host's data
export interface Host {
  name: string;
  location: string;
  avatar: string;
  bio: string;
  isCertified: boolean;
  languages: string;
  teachingSince: string;
  joinedDate: string;
}

interface HostCardProps {
  host: Host;
}

const HostCard: React.FC<HostCardProps> = ({ host }) => {
  return (
    <div className={styles.hostCard}>
      <div className={styles.header}>
        <img src={host.avatar} alt={host.name} className={styles.avatar} />
        <div className={styles.headerInfo}>
          <h3>{host.name}</h3>
          <p>{host.location}</p>
        </div>
      </div>
      <p className={styles.bio}>
        {host.bio} <a href="#">Show more</a>
      </p>
      <div className={styles.details}>
        {host.isCertified && (
          <div className={styles.detailItem}>
            <FaCheckCircle />
            <div>
              <strong>Certified Yoga Instructor</strong>
              <span>Accreditation has been verified</span>
            </div>
          </div>
        )}
        <div className={styles.detailItem}>
          <FaComment />
          <div>
            <strong>{host.languages}</strong>
            <span>English</span>
          </div>
        </div>
        <div className={styles.detailItem}>
          <FaChalkboardTeacher />
          <div>
            <strong>{host.teachingSince}</strong>
            <span>{host.joinedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostCard;
