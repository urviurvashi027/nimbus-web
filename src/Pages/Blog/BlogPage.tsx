import React from "react";
import Sidebar from "./components/Sidebar";
import BlogList from "./components/BlogList";
import styles from "./BlogPage.module.scss";

const BlogPage: React.FC = () => {
  return (
    <div className={styles.main}>
      {/* <div> */}
      <Sidebar />
      <BlogList />
      {/* </div> */}
    </div>
  );
};

export default BlogPage;
