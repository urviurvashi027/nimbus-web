import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import BlogPage from "./Pages/Blog/BlogPage";
import Footer from "./components/Footer/Footer";
// import BlogContent from "./Pages/BlogContent/BlogContent";
// import BlogPost from "./Pages/BlogContent/component/BlogPost/BlogPost";
import BlogPostPage from "./Pages/PostPage/Post";
import BlogCategoryPage from "./Pages/BlogPostCategoryPage/BlogPostCategoryPage";
import TopicPage from "./Pages/TopicPage/TopicPage";
import GuidedMeditationPage from "./Pages/GuidedMeditationPage/GuidedMeditationPage";
import RetreatDetailPage from "./Pages/RetreatDetailPage/RetreatDetailPage";
import RetreatsListPage from "./Pages/RetreatListPage/RetreatListPage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route
          path="/blog/category/:categorySlug"
          element={<BlogCategoryPage />}
        />
        <Route path="/blog/:articleSlug" element={<BlogPostPage />} />
        <Route path="/retreats/:retreatSlug" element={<RetreatDetailPage />} />
        {/* New dynamic route for topic pages */}
        <Route path="/topics/:topicSlug" element={<TopicPage />} />
        <Route
          path="/guided-meditation/:courseSlug"
          element={<GuidedMeditationPage />}
        />

        {/* New dynamic route for the retreat list pages */}
        <Route
          path="/retreats/category/:categorySlug"
          element={<RetreatsListPage />}
        />
      </Routes>
      <Footer />
    </Router>
    // </ParallaxProvider>
  );
};

export default App;
