import React from "react";
import styles from "./ResourcesDropdown.module.scss";
import { Link } from "react-router-dom";

interface ResourcesDropdownProps {
  onLinkClick: () => void;
}

// --- Data for the component ---
const resourcesData = {
  mainTitle: "The world's largest free audio library for everyday wellbeing",
  categories: [
    {
      name: "Mental Health and Wellbeing",
      slug: "mental-health-and-wellbeing",
    },
    { name: "Tips and Guides", slug: "tips-and-guides" },
    { name: "Science and Research", slug: "science-and-research" },
    { name: "Tradition", slug: "tradition" },
    { name: "Spirituality", slug: "spirituality" },
    { name: "At Work", slug: "at-work" },
  ],
  topArticles: [
    {
      title: "5 Tips To Help Alleviate Soreness During...",
      image: "/assets/retreat-1.png",
      slug: "5-tips-for-soreness", // Unique slug for the URL
    },
    {
      title: "What Happens When You Open Your Third Eye?",
      image: "/assets/retreat-2.png",
      slug: "open-your-third-eye",
    },
    {
      title: "Yes, You Can Meditate Lying Down: Here's When...",
      image: "/assets/retreat-1.png",
      slug: "meditate-lying-down",
    },
    {
      title: "What Prana Is And How To Feel It",
      image: "/assets/retreat-2.png",
      slug: "what-is-prana",
    },
    {
      title: "Balancing Your Chakras For Empowering Energy...",
      image: "/assets/retreat-1.png",
      slug: "balancing-chakras",
    },
    {
      title: "Applying The H.A.L.T. Technique To Overcome...",
      image: "/assets/retreat-2.png",
      slug: "halt-technique",
    },
  ],
  howToMeditate: {
    title: "How to Meditate",
    description:
      "Meditation is something everyone can do. Practicing can help improve your health and wellbeing.",
    linkText: "Explore Meditation",
  },
};

const ResourcesDropdown: React.FC<ResourcesDropdownProps> = (onLinkClick) => {
  return (
    <div className={styles.dropdownPanel}>
      <div className={styles.contentWrapper}>
        <p className={styles.mainTitle}>{resourcesData.mainTitle}</p>
        <div className={styles.grid}>
          {/* Blog Categories Column */}
          <div className={styles.categories}>
            <h3 className={styles.columnTitle}>Blog categories</h3>
            <ul className={styles.linkList}>
              {resourcesData.categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/blog/category/${category.slug}`}
                    onClick={onLinkClick}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Articles Column */}
          <div className={styles.topArticles}>
            <h3 className={styles.columnTitle}>Top Articles</h3>
            <div className={styles.articlesGrid}>
              {resourcesData.topArticles.map((article, index) => (
                // Use the Link component to navigate to the blog post page
                <Link
                  to={`/blog/${article.slug}`}
                  key={index}
                  className={styles.card}
                  onClick={onLinkClick} // This will close the dropdown
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className={styles.cardImage}
                  />
                  <h4 className={styles.cardTitle}>{article.title}</h4>
                </Link>
              ))}
            </div>
          </div>

          {/* How to Meditate Column */}
          <div className={styles.howToMeditate}>
            <h3 className={styles.columnTitle}>How to Meditate</h3>
            <p className={styles.description}>
              {resourcesData.howToMeditate.description}
            </p>
            <a href="#" className={styles.exploreLink}>
              {resourcesData.howToMeditate.linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropdown;
