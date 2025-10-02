import React from "react";
import BlogCard from "./BlogCard";
import BlogPosts from "../../../data/BlogPosts";
import styles from "./BlogList.module.scss";

const BlogList: React.FC = () => {
  return (
    <section className={styles.blogList}>
      <h3>Latest Articles</h3>
      {BlogPosts.map((article) => (
        // <div>{article.id}</div>
        <BlogCard key={article.id} article={article} />
      ))}
    </section>
  );
};

export default BlogList;
