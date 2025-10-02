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

// import Banner from "./components/Banner/Banner";
// import TopRatedPosts from "./components/TopRatedPosts/TopRatedPosts";
// import ProductLaunch from "./components/ProductLaunch/ProductLaunch";
// import HeroSection from "./components/HeroSection/HeroSection";
// import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    // <div className={styles.app}>
    //   <Header />
    //   <HeroSection />
    //   <TopRatedPosts />
    //   <ProductLaunch />
    //   <Footer />
    //   {/* <Banner />
    //   <section className={styles.mainContent}>
    //     // <TopRatedPosts />
    //     // <ProductLaunch />
    //   </section>
    //   <Footer /> */}
    // </div>
    // <ParallaxProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        {/* Route for individual blog posts */}
        {/* <Route path="/blog/:topic/:subtopicId" element={<BlogPost />} /> */}
        {/* Route for paginated subtopics */}
        {/* <Route path="/blog/:topic/all" element={<BlogContent />} /> */}
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
