import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./BlogPostCategoryPage.module.scss";

// --- MOCK DATA (In a real app, this would come from an API) ---
const allPosts = [
  // Populate with more posts for different categories
  {
    slug: "stress-vs-burnout",
    title: "What's the Difference Between Stress and Burnout?",
    category: "Mental Health and Wellbeing",
    image: "/assets/retreat-1.png",
    excerpt:
      "In our fast-paced world, the words “stress” and “burnout” are often used interchangeably. Learn the critical differences...",
    author: "Dr. Alisha Rai",
  },
  {
    slug: "8-tips-yoga-retreat",
    title: "8 Tips to Market Your Yoga Retreat and Fill Every Spot",
    category: "Tips and Guides",
    image: "/assets/retreat-1.png",
    excerpt:
      "This article was created using insights from Insight Timer’s yoga and meditation experts. Learn how to market a yoga retreat...",
    author: "Insight Timer Editorial Team",
  },
  {
    slug: "navigating-spirituality",
    title: "How to Navigate the Path to Spiritual Enlightenment",
    category: "Spirituality",
    image: "/assets/retreat-1.png",
    excerpt:
      "Spirituality is a personal journey of discovery. This guide helps you navigate the complex and rewarding path to enlightenment...",
    author: "Jane Doe",
  },
  {
    slug: "voo-breathing",
    title: "Voo Breathing Method: Regulating the Nervous System",
    category: "Mental Health and Wellbeing",
    image: "/assets/retreat-1.png",
    excerpt:
      "The Voo breathing method is a powerful technique for calming the mind and regulating your nervous system. Discover how to practice it...",
    author: "John Smith",
  },
  {
    slug: "journey-spirituality",
    title: "How to Navigate the Path to Spiritual Enlightenment",
    category: "Spirituality",
    image: "/assets/retreat-1.png",
    excerpt:
      "Spirituality is a personal journey of discovery. This guide helps you navigate the complex and rewarding path to enlightenment...",
    author: "Jane Doe",
  },
  {
    slug: "box-breathing",
    title: "Voo Breathing Method: Regulating the Nervous System",
    category: "Mental Health and Wellbeing",
    image: "/assets/retreat-1.png",
    excerpt:
      "The Voo breathing method is a powerful technique for calming the mind and regulating your nervous system. Discover how to practice it...",
    author: "John Smith",
  },
  {
    slug: "first-breathing",
    title: "Voo Breathing Method: Regulating the Nervous System",
    category: "Mental Health and Wellbeing",
    image: "/assets/retreat-1.png",
    excerpt:
      "The Voo breathing method is a powerful technique for calming the mind and regulating your nervous system. Discover how to practice it...",
    author: "John Smith",
  },
  {
    slug: "heart-breathing",
    title: "Voo Breathing Method: Regulating the Nervous System",
    category: "Mental Health and Wellbeing",
    image: "/assets/retreat-1.png",
    excerpt:
      "The Voo breathing method is a powerful technique for calming the mind and regulating your nervous system. Discover how to practice it...",
    author: "John Smith",
  },
  {
    slug: "third-breathing",
    title: "Voo Breathing Method: Regulating the Nervous System",
    category: "Mental Health and Wellbeing",
    image: "/assets/retreat-1.png",
    excerpt:
      "The Voo breathing method is a powerful technique for calming the mind and regulating your nervous system. Discover how to practice it...",
    author: "John Smith",
  },
  {
    slug: "fourth-breathing",
    title: "Voo Breathing Method: Regulating the Nervous System",
    category: "Mental Health and Wellbeing",
    image: "/assets/retreat-1.png",
    excerpt:
      "The Voo breathing method is a powerful technique for calming the mind and regulating your nervous system. Discover how to practice it...",
    author: "John Smith",
  },
  // Add 10+ more dummy posts for pagination to work well
];

const categoryInfo = {
  "mental-health-and-wellbeing": {
    title: "Mental Health and Wellbeing",
    description:
      "Meditation and mindfulness benefit our mental health in infinite ways. Trauma, anxiety, depression, and unhelpful psychological patterns are each soothed through awareness.",
  },
  "tips-and-guides": {
    title: "Tips and Guides",
    description:
      "Practical advice and step-by-step guides to help you integrate mindfulness and meditation into your daily life for greater peace and clarity.",
  },
  // Add descriptions for other categories
};

const POSTS_PER_PAGE = 5;

// --- The Main Component ---
const BlogCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  const categoryDetails = categoryInfo[
    categorySlug as keyof typeof categoryInfo
  ] || { title: "Category", description: "" };
  const filteredPosts = allPosts.filter(
    (p) => p.category.toLowerCase().replace(/ /g, "-") === categorySlug
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on category change
    window.scrollTo(0, 0);
  }, [categorySlug]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.categoryPage}>
      <div className={styles.header}>
        <h1>{categoryDetails.title}</h1>
        <p>{categoryDetails.description}</p>
      </div>

      <div className={styles.postsList}>
        {paginatedPosts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.slug}
            className={styles.postCard}
          >
            <img
              src={post.image}
              alt={post.title}
              className={styles.postImage}
            />
            <div className={styles.postContent}>
              <h2>{post.title}</h2>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <span className={styles.postAuthor}>{post.author}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? styles.active : ""}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogCategoryPage;
