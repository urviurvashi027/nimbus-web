import React from "react";
import Card from "./components/Card";
import styles from "./TopRatedPosts.module.scss";

interface Article {
  id: number;
  title: string;
  category: string;
  author: string;
  timeToRead: string;
  difficulty: number;
  color: string;
  buttonText: string;
  imageUrl: string;
  buttonColor: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Ayurvedic diets",
    category: "Ayurveda",
    author: "Urvashi Urvi",
    timeToRead: "1 Min Read",
    difficulty: 2,
    color: "#D68465",
    buttonText: "Read More",
    imageUrl: "",
    buttonColor: "#965e48",
  },
  {
    id: 2,
    title: "stress management",
    category: "Wellness",
    author: "Urvashi Urvi",
    timeToRead: "1 Min Read",
    difficulty: 3,
    color: "#F9DCC6",
    buttonText: "Read More",
    imageUrl: "",
    buttonColor: "#ffcaa3",
  },
  {
    id: 3,
    title: "Morning Routines",
    category: "Wellness",
    author: "Urvashi Urvi",
    timeToRead: "1 Min Read",
    difficulty: 4,
    color: "#a4ab8a",
    buttonText: "Read More",
    imageUrl: "",
    buttonColor: "#868c70",
  },
];

const TopRatedPosts: React.FC = () => {
  return (
    <section className={styles.featuredSection}>
      <h2>🌟 Featured Articles</h2>
      <div className={styles.articleGrid}>
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default TopRatedPosts;
