import React from "react";
import Slider from "react-slick";
import styles from "./ReviewCarousel.module.scss";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Define the structure for a single review
interface Review {
  author: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
  totalReviews: number;
  averageRating: number;
}

const NextArrow = (props: any) => (
  <div className={`${styles.arrow} ${styles.next}`} onClick={props.onClick}>
    <FaChevronRight />
  </div>
);
const PrevArrow = (props: any) => (
  <div className={`${styles.arrow} ${styles.prev}`} onClick={props.onClick}>
    <FaChevronLeft />
  </div>
);

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({
  reviews,
  totalReviews,
  averageRating,
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.titleHeader}>
        <span className={styles.rating}>
          <FaStar /> {averageRating} ({totalReviews})
        </span>
        <h2>Recent Reviews</h2>
      </div>
      <div className={styles.carouselWrapper}>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <img src={review.avatar} alt={review.author} />
                  <div className={styles.authorInfo}>
                    <strong>{review.author}</strong>
                    <span>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </div>
                  <span className={styles.date}>{review.date}</span>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
