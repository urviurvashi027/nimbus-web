import React from "react";
import styles from "./MealsSection.module.scss";
import { FaTh, FaUtensils, FaLeaf } from "react-icons/fa";

// Define the structure for the meals data
interface MealsData {
  image: string;
  mealsProvided: string;
  dietsCatered: string;
  description: string;
}

interface MealsSectionProps {
  meals: MealsData;
}

const MealsSection: React.FC<MealsSectionProps> = ({ meals }) => {
  return (
    <section className={styles.mealsSection}>
      <div className={styles.divider}></div>
      <h2>Meals</h2>
      <div className={styles.imageContainer}>
        <img src={meals.image} alt="Healthy retreat meal" />
        <button className={styles.showAllButton}>
          <FaTh /> Show All
        </button>
      </div>
      <div className={styles.infoRow}>
        <FaUtensils />
        <div>
          <strong>Meals provided</strong>
          <p>{meals.mealsProvided}</p>
        </div>
      </div>
      <div className={styles.infoRow}>
        <FaLeaf />
        <div>
          <strong>Diets catered</strong>
          <p>{meals.dietsCatered}</p>
        </div>
      </div>
      <p className={styles.description}>{meals.description}</p>
    </section>
  );
};

export default MealsSection;
