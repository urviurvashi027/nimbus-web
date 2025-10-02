import React from "react";
import { FaStopwatch } from "react-icons/fa6";
import styles from "./Card.module.scss";

interface BlogCardProps {
  article: BlogCard;
}

interface BlogCard {
  id: number;
  title: string;
  category: string;
  author: string;
  timeToRead: string;
  difficulty: number;
  buttonText: string;
  imageUrl: string;
  color: string;
  buttonColor: string;
}

const Card: React.FC<BlogCardProps> = ({ article }) => {
  const {
    title,
    category,
    author,
    timeToRead,
    difficulty,
    buttonText,
    imageUrl,
    buttonColor,
    color,
  } = article;
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <div className={styles.categoryBadge}>{category}</div>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          {/* <img src={imageUrl} alt={author} className={styles.authorImage} /> */}
          <p className={styles.authorName}>{author}</p>
          <p className={styles.readTime}>
            <FaStopwatch color="#fff" /> {timeToRead}
          </p>
          <p className={styles.difficulty}>
            🎯 Difficulty:{" "}
            <p className={styles.stars}>
              {"★".repeat(difficulty)}
              {"☆".repeat(5 - difficulty)}
            </p>
          </p>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.title}>{title}</div>
          <button
            className={styles.readMoreButton}
            style={{ backgroundColor: buttonColor }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
