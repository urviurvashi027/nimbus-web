import React from "react";
import styles from "./BookingCard.module.scss";
import { FaShieldAlt, FaTag, FaPercentage } from "react-icons/fa";

interface BookingCardProps {
  date: string;
  duration: string;
  price: string;
  spotsLeft: string;
  depositInfo: string;
}

const BookingCard: React.FC<BookingCardProps> = ({
  date,
  duration,
  price,
  spotsLeft,
  depositInfo,
}) => {
  return (
    <div className={styles.bookingContainer}>
      <div className={styles.bookingCard}>
        <div className={styles.detailRow}>
          <strong>Date</strong>
          <span>{date}</span>
        </div>
        <div className={styles.detailRow}>
          <strong>Duration</strong>
          <span>{duration}</span>
        </div>
        <div className={styles.priceRow}>
          <strong>From {price}</strong>
          <span>{spotsLeft}</span>
        </div>
        <button className={styles.reserveButton}>Reserve now</button>
        <p className={styles.depositInfo}>{depositInfo}</p>
      </div>
      <div className={styles.guaranteeCard}>
        <div>
          <FaShieldAlt /> Trusted Insight Timer Teachers
        </div>
        <div>
          <FaTag /> Best Price Guaranteed
        </div>
        <div>
          <FaPercentage /> 10% deposit to reserve
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
