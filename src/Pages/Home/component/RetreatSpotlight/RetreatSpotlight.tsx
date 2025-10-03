import React from "react";
import styles from "./RetreatSpotlight.module.scss";

// --- Data for the retreat cards ---
const spotlightRetreats = [
  {
    title: "4 Day Hiking, Yoga and Stargazing Retreat to Zio...",
    hostedBy: "Kiersten Payge Dolezal",
    price: "$2,575",
    date: "November 9 - 12, 2025",
    location: "Virgin, UT, United States",
    image: "/assets/retreat-1.png", // Placeholder image
  },
  {
    title: "The Well Rested Woman Wintering Retreat -...",
    hostedBy: "Suzi Gibson",
    price: "$1,997",
    date: "November 6 - 10, 2025",
    location: "Scotland, United Kingdom",
    image: "/assets/retreat-2.png",
  },
  {
    title: "Soulstice Yoga Retreat",
    hostedBy: "Nico Hurley",
    price: "$1,500",
    date: "October 31 - November 5...",
    location: "San Marcos La Laguna,...",
    image: "/assets/retreat-1.png",
  },
  // Add more retreat objects here to fill the grid
  {
    title: "Winter Solstice Retreat",
    hostedBy: "Jane Doe",
    price: "$1,800",
    date: "December 20 - 23, 2025",
    location: "Asheville, NC, United States",
    image: "/assets/retreat-2.png",
  },
  {
    title: "Blissful Yoga and Qigong",
    hostedBy: "John Smith",
    price: "$2,200",
    date: "January 10 - 15, 2026",
    location: "Bali, Indonesia",
    image: "/assets/retreat-1.png",
  },
  {
    title: "Winter Vinyasa Retreat",
    hostedBy: "Emily White",
    price: "$1,650",
    date: "February 5 - 9, 2026",
    location: "Quebec, Canada",
    image: "/assets/retreat-2.png",
  },
];

const RetreatSpotlight: React.FC = () => {
  return (
    <div className={styles.spotlightSection}>
      <h2 className={styles.title}>Retreat Spotlight</h2>
      <p className={styles.description}>
        The world's largest library of free sleep meditations and stories to
        help you fall asleep faster.
      </p>
      <div className={styles.grid}>
        {spotlightRetreats.map((retreat, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.imagePlaceholder}
              style={{ backgroundImage: `url(${retreat.image})` }}
            ></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{retreat.title}</h3>
              <p className={styles.hostedBy}>Hosted by {retreat.hostedBy}</p>
              <div className={styles.detailsGrid}>
                <div>
                  <span className={styles.detailLabel}>From</span>
                  <span className={styles.detailValue}>{retreat.price}</span>
                </div>
                <div>
                  <span className={styles.detailLabel}>{retreat.date}</span>
                  <span className={styles.detailValue}>{retreat.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetreatSpotlight;
