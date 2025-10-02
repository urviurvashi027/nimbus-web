import React, { useState, useRef } from "react";
import styles from "./RetreatCarousel.module.scss";
import RetreatCard, { Retreat } from "../RetreatCard/RetreatCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Define the props that this component will accept
interface RetreatsCarouselProps {
  title: string;
  tags: string[];
  retreats: Retreat[];
}

const RetreatsCarousel: React.FC<RetreatsCarouselProps> = ({
  title,
  tags,
  retreats,
}) => {
  const [activeTag, setActiveTag] = useState(tags[0] || "All Retreats");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // In a real app, you would filter the retreats based on the activeTag
  // For now, we'll just display all of them.
  const filteredRetreats = retreats;

  return (
    <section className={styles.retreatsSection}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>

      <div className={styles.filterTags}>
        {tags.map((tag) => (
          <button
            key={tag}
            className={activeTag === tag ? styles.active : ""}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* This new wrapper is the positioning context for the arrows and cards */}
      <div className={styles.carouselContainer}>
        <div className={styles.arrows}>
          <button onClick={() => scroll("left")} aria-label="Scroll Left">
            <FaChevronLeft />
          </button>
          <button onClick={() => scroll("right")} aria-label="Scroll Right">
            <FaChevronRight />
          </button>
        </div>
        <div className={styles.scrollContainer} ref={scrollRef}>
          {filteredRetreats.map((retreat) => (
            <RetreatCard key={retreat.slug} retreat={retreat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetreatsCarousel;
