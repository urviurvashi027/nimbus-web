import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./TopicsCarousel.module.scss";

// --- Data for the slides ---
const topics = [
  {
    title: "Sleep",
    description:
      "The world's largest library of free sleep meditations and stories to help you fall asleep faster.",
    images: [
      "/assets/phone-1.png",
      "/assets/phone-2.png",
      "/assets/phone-3.png",
    ],
  },
  {
    title: "Meditation",
    description:
      "The world's largest library of free guided meditations with 270,000 tracks from psychologists, spiritual leaders and mindfulness teachers.",
    images: [
      "/assets/phone-1.png",
      "/assets/phone-2.png",
      "/assets/phone-3.png",
    ],
  },
  {
    title: "Yoga",
    description:
      "Live yoga from the world's best teachers streaming throughout the day. For free.",
    images: [
      "/assets/phone-1.png",
      "/assets/phone-2.png",
      "/assets/phone-3.png",
    ],
  },
];

// --- Custom Arrow Components ---
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slickArrow} ${styles.slickNext}`}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slickArrow} ${styles.slickPrev}`}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const TopicsCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.carouselSection}>
      <Slider {...settings}>
        {topics.map((topic) => (
          <div key={topic.title}>
            <div className={styles.slideContent}>
              <div className={styles.textWrapper}>
                <h2 className={styles.title}>{topic.title}</h2>
                <p className={styles.description}>{topic.description}</p>
              </div>
              <div className={styles.phonesWrapper}>
                {topic.images.map((imgSrc, index) => (
                  <div key={index} className={styles.phoneMockup}>
                    <img
                      src={imgSrc}
                      alt={`${topic.title} app screen ${index + 1}`}
                      className={styles.phoneScreenImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopicsCarousel;
