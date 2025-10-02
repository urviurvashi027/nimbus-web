import React, { useRef } from "react";
import styles from "./CardCarousel.module.scss";
import ContentCard, { CardItem } from "../ContentCard/ContentCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CardCarouselProps {
  title: string;
  items: CardItem[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ title, items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.carouselSection}>
      {/* The header now only contains the title */}
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>

      {/* This new wrapper is the positioning context for the arrows and cards */}
      <div className={styles.carouselContainer}>
        <div className={styles.arrows}>
          <button onClick={() => scroll("left")}>
            <FaChevronLeft color="red" />
          </button>
          <button onClick={() => scroll("right")}>
            <FaChevronRight color="red" />
          </button>
        </div>
        <div className={styles.scrollContainer} ref={scrollRef}>
          {items.map((item) => (
            <ContentCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
