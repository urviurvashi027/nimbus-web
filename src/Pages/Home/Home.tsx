import React, { useState } from "react";

import styles from "./Home.module.scss";
import HelpSection from "./component/HelpSection/HelpSection";
import TopicsCarousel from "./component/TopicsCarousel/TopicsCarousel";
import HeroSection from "./component/HeroSection/HeroSection";
import RetreatsCarousel from "../../components/RetreatCarousel/RetreatCarousel";
import RetreatSpotlight from "./component/RetreatSpotlight/RetreatSpotlight";
import CtaSection from "../../components/ctaSection/ctaSection";

const Home: React.FC = () => {
  return (
    <div className={styles.app}>
      <HeroSection />
      <HelpSection />
      <TopicsCarousel />
      {/* Using the new reusable component */}
      {/* <RetreatsCarousel
        title={meditationData.upcomingRetreats.title}
        tags={meditationData.upcomingRetreats.tags}
        retreats={meditationData.upcomingRetreats.retreats}
      /> */}
      {/* <RetreatsCarousel /> */}
      {/* <RetreatSpotlight /> */}
      <CtaSection />
      {/* <TopRatedPosts /> */}
      {/* <MidSection /> */}
    </div>
  );
};

export default Home;
