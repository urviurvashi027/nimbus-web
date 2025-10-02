import React from "react";
import { Link } from "react-router-dom";
import styles from "./ArticleCardList.module.scss";

// Define the structure for a single article
interface Article {
  slug: string;
  title: string;
  author: string;
  image: string;
}

// Define the props for the component
interface ArticleCardListProps {
  articles: Article[];
}

const ArticleCardList: React.FC<ArticleCardListProps> = ({ articles }) => {
  return (
    <div className={styles.articleSection}>
      <h2 className={styles.sectionTitle}>From the blog</h2>
      <div className={styles.articlesGrid}>
        {articles.map((article) => (
          <Link
            to={`/blog/${article.slug}`}
            key={article.slug}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <img src={article.image} alt={article.title} />
              <span className={styles.tag}>BLOG POST</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{article.title}</h3>
              <p className={styles.cardAuthor}>by {article.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleCardList;
