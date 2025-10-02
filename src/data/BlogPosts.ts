type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  difficulty: number;
  author: string;
  subtopics?: { title: string; content: string }[];
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "introduction-to-react",
    title: "Introduction to React",
    excerpt: "Learn the basics of React and how to build dynamic UIs.",
    date: "2023-10-01",
    readTime: "5 min",
    difficulty: 2,
    author: "John Doe",
    subtopics: [
      {
        title: "What is React?",
        content: "React is a JavaScript library for building user interfaces.",
      },
      {
        title: "Why use React?",
        content:
          "React allows you to create reusable components and manage state efficiently.",
      },
      {
        title: "React Basics",
        content: "Learn about JSX, components, and props in React.",
      },
    ],
  },
  {
    id: "2",
    slug: "advanced-react",
    title: "Advanced React",
    excerpt: "Explore advanced React concepts to build scalable applications.",
    date: "2023-10-05",
    readTime: "8 min",
    difficulty: 3,
    author: "Jane Smith",
    subtopics: [
      {
        title: "Hooks",
        content: "Learn about useState, useEffect, and custom hooks.",
      },
      {
        title: "Context API",
        content: "Manage global state using the Context API.",
      },
      {
        title: "Performance Optimization",
        content: "Optimize React apps using memoization and lazy loading.",
      },
    ],
  },
];

export default blogPosts;
