import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseList.module.scss";
import { FaGraduationCap, FaStar } from "react-icons/fa";

// Define the structure for a single course
interface Course {
  slug: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  duration: string;
}

// Define the props for the component
interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className={styles.courseSection}>
      <div className={styles.courseGrid}>
        {courses.map((course) => (
          <Link
            to={`/guided-meditation/${course.slug}`}
            key={course.slug}
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{course.title}</h3>
            <div className={styles.metaTop}>
              <span>
                <FaStar /> {course.rating}
              </span>
              <span>{course.duration}</span>
            </div>
            <p className={styles.cardAuthor}>by {course.author}</p>
            <div className={styles.imageWrapper}>
              <img src={course.image} alt={course.title} />
              <div className={styles.tag}>
                <FaGraduationCap />
                <span>COURSE</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.browseButtonWrapper}>
        <button className={styles.browseButton}>Browse all</button>
      </div>
    </div>
  );
};

export default CourseList;
