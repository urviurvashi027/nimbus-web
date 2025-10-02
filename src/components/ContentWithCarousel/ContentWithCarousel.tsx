import React from "react";
import styles from "./ContentWithCarousel.module.scss";
import CardCarousel from "../CardCarousel/CardCarousel";
import { CardItem } from "../ContentCard/ContentCard";

interface ContentWithCarouselProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  items: CardItem[];
}

const ContentWithCarousel: React.FC<ContentWithCarouselProps> = ({
  title,
  description,
  linkText,
  linkHref,
  items,
}) => {
  return (
    <section className={styles.contentCarouselSection}>
      <div className={styles.textColumn}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={linkHref} className={styles.readMoreLink}>
          {linkText}
        </a>
      </div>
      <div className={styles.carouselColumn}>
        <CardCarousel title="" items={items} />
      </div>
    </section>
  );
};

export default ContentWithCarousel;
