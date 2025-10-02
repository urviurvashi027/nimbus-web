import React, { useState, useRef } from "react";
import Slider from "react-slick";
import styles from "./AccommodationSection.module.scss";
import AccommodationCard, {
  Accommodation,
} from "../AccommodationCard/AccommodationCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface AccommodationSectionProps {
  accommodations: Accommodation[];
  description: string;
}

const AccommodationSection: React.FC<AccommodationSectionProps> = ({
  accommodations,
  description,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // We use custom external arrows
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  // Calculate the total number of "pages" or views in the carousel
  const totalPages =
    accommodations.length > 0
      ? accommodations.length - settings.slidesToShow + 1
      : 1;

  return (
    <section className={styles.accommodationSection}>
      <div className={styles.divider}></div>
      <div className={styles.header}>
        <h2>Accommodation</h2>
        <div className={styles.controls}>
          <span>
            {currentSlide + 1} / {totalPages}
          </span>
          <div className={styles.arrows}>
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.carouselWrapper}>
        <Slider ref={sliderRef} {...settings}>
          {accommodations.map((item) => (
            <div key={item.slug} className={styles.slide}>
              <AccommodationCard accommodation={item} />
            </div>
          ))}
        </Slider>
      </div>
      <p className={styles.description}>
        {description} <a href="#">Show more </a>
      </p>
    </section>
  );
};

export default AccommodationSection;
