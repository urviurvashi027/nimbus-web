import React from "react";
import styles from "./BlogCard.module.scss";
import { Link } from "react-router-dom";

interface ArticleProps {
  article: {
    id: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    difficulty: number;
    author: string;
    excerpt: string;
    slug?: string;
  };
}

const BlogCard: React.FC<ArticleProps> = ({ article }) => {
  return (
    <Link
      to={`/blog/${article.slug}/${article.id}`}
      className={styles.cardLink}
    >
      {" "}
      {/* Add Link here */}
      <div className={styles.card}>
        <div className={styles.category}>{article.category}</div>
        <h4>{article.title}</h4>
        <p>{article.excerpt}</p>
        <div className={styles.meta}>
          <span>📅 {article.date}</span>
          <span>⏰ {article.readTime}</span>
          <span>⭐ Difficulty: {Array(article.difficulty).fill("⭐")}</span>
          <span>👤 {article.author}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
