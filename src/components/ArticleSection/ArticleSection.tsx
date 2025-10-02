import React from "react";
import styles from "./ArticleSection.module.scss";

interface ArticleBlock {
  type: "heading" | "paragraph";
  text: string;
}

interface ArticleSectionProps {
  title: string;
  content: ArticleBlock[];
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ title, content }) => {
  return (
    <section className={styles.articleSection}>
      <h2>{title}</h2>
      <div className={styles.articleBody}>
        {content.map((block, index) => {
          if (block.type === "heading")
            return <h3 key={index}>{block.text}</h3>;
          return <p key={index}>{block.text}</p>;
        })}
      </div>
    </section>
  );
};

export default ArticleSection;
