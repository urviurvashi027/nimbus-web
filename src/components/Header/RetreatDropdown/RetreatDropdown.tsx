import React from "react";
import styles from "./RetreatDropdown.module.scss";
import { Link } from "react-router-dom";

// --- Data for the component ---
const retreatData = {
  title: "Real people. Real life. Real time.",
  categories: [
    { name: "All Retreats", slug: "all" },
    { name: "Yoga Retreats", slug: "yoga-retreats" },
    { name: "Wellness Retreats", slug: "wellness-retreats" },
    { name: "Meditation Retreats", slug: "meditation-retreats" },
    { name: "Yoga Teacher Training", slug: "yoga-teacher-training" },
    { name: "Women's Retreats", slug: "womens-retreats" },
    { name: "Yoga Retreats in Bali", slug: "yoga-retreats-in-bali" },
  ],
  topRetreats: [
    {
      title: "4 Day Hiking, Yoga and Stargazing...",
      hostedBy: "Kiersten Payge Dolezal",
      price: "$2,575",
      date: "November 9 - 12, 2025",
      location: "Virgin, UT, United...",
    },
    {
      title: "The Well Rested Woman Wintering...",
      hostedBy: "Suzi Gibson",
      price: "$1,997",
      date: "November 6 - 10,...",
      location: "Scotland, United...",
    },
    {
      title: "Soulstice Yoga Retreat",
      hostedBy: "Nico Hurley",
      price: "$1,500",
      date: "October 31 - Nov...",
      location: "San Marcos La...",
    },
  ],
  findPerfectRetreat: {
    title: "Find Your Perfect Retreat",
    description:
      "Discover transformative Retreats led by Insight Timer's best teachers. Reconnect, recharge, and return renewed.",
  },
};

// The component now accepts a prop to close itself after a link is clicked
interface RetreatsDropdownProps {
  onLinkClick: () => void;
}

const RetreatsDropdown: React.FC<RetreatsDropdownProps> = ({ onLinkClick }) => {
  return (
    <div className={styles.dropdownPanel}>
      <div className={styles.contentWrapper}>
        <p className={styles.mainTitle}>{retreatData.title}</p>
        <div className={styles.grid}>
          {/* Categories Column */}
          <div className={styles.categories}>
            <h3 className={styles.columnTitle}>Retreat categories</h3>
            <ul className={styles.linkList}>
              {retreatData.categories.map((category) => (
                <li key={category.slug}>
                  {/* Use Link component for navigation */}
                  <Link
                    to={`/retreats/category/${category.slug}`}
                    onClick={onLinkClick}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Retreats Column */}
          <div className={styles.topRetreats}>
            <h3 className={styles.columnTitle}>Top Retreats</h3>
            <div className={styles.retreatsGrid}>
              {retreatData.topRetreats.map((retreat, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.imagePlaceholder}></div>
                  <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>{retreat.title}</h4>
                    <p className={styles.hostedBy}>
                      Hosted by {retreat.hostedBy}
                    </p>
                    <div className={styles.detailsGrid}>
                      <div>
                        <span className={styles.detailLabel}>From</span>
                        <span className={styles.detailValue}>
                          {retreat.price}
                        </span>
                      </div>
                      <div>
                        <span className={styles.detailLabel}>
                          {retreat.date}
                        </span>
                        <span className={styles.detailValue}>
                          {retreat.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Find Perfect Retreat Column */}
          <div className={styles.findPerfect}>
            <h3 className={styles.columnTitle}>Find Your Perfect Retreat</h3>
            <p className={styles.description}>
              {retreatData.findPerfectRetreat.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetreatsDropdown;
