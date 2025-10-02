import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./TestimonialsCarousel.module.scss";
import { FaChevronLeft, FaChevronRight, FaInfoCircle } from "react-icons/fa";

// Define the structure for a single testimonial
interface Testimonial {
  text: string;
  author: string;
  location: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Custom arrow components
  const NextArrow = ({ onClick }: any) => (
    <button className={styles.arrow} onClick={onClick}>
      <FaChevronRight />
    </button>
  );
  const PrevArrow = ({ onClick }: any) => (
    <button className={styles.arrow} onClick={onClick}>
      <FaChevronLeft />
    </button>
  );

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.divider}></div>
      <div className={styles.header}>
        <h2>
          Testimonials <FaInfoCircle />
        </h2>
        <div className={styles.controls}>
          <span>
            {currentSlide + 1} / {testimonials.length}
          </span>
          <div className={styles.arrows}>
            <Slider
              {...settings}
              ref={(slider) => (slider as any)?.slickPrev()}
            >
              <PrevArrow />
            </Slider>
            <Slider
              {...settings}
              ref={(slider) => (slider as any)?.slickNext()}
            >
              <NextArrow />
            </Slider>
          </div>
        </div>
      </div>
      <div className={styles.carouselWrapper}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.card}>
                <p className={styles.text}>"{testimonial.text}"</p>
                <span className={styles.author}>
                  {testimonial.author}, {testimonial.location}
                </span>
                <a href="#" className={styles.readMore}>
                  Read more
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
