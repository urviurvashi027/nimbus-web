import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContentCard.module.scss";
import { IconType } from "react-icons";

// A flexible interface for different types of card data
export interface CardItem {
  slug: string;
  title: string;
  author: string;
  image: string;
  // Optional fields for different card types
  tagText?: string;
  tagIcon?: IconType;
  metaLine1?: string;
}

interface ContentCardProps {
  item: CardItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  return (
    <Link to={`/content/${item.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.title} />
        {item.tagText && (
          <div className={styles.tag}>
            {item.tagIcon && <item.tagIcon />}
            <span>{item.tagText}</span>
          </div>
        )}
      </div>
      <div className={styles.cardContent}>
        {item.metaLine1 && (
          <div className={styles.metaTop}>
            <span>{item.metaLine1}</span>
          </div>
        )}
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardAuthor}>{item.author}</p>
      </div>
    </Link>
  );
};

export default ContentCard;
