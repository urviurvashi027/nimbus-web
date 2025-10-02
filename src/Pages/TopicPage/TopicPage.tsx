import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./TopicPage.module.scss";
// import s from "./components/TopicHeader/TopicHeader"
import TopicHeader from "./components/TopicHeader/TopicHeader";
import ArticleCardList from "./components/ArticleCardList/ArticleCardList";
import HelpSidebar from "./components/HelpSidebar/HelpSidebar";
import LiveEventsList from "./components/LiveEventList/LiveEventList"; // Import the new component
import CourseList from "./components/CourseList/CourseList";
import TrackList from "../../components/TrackCardList/TrackList";
import FeaturedTabContent from "./components/FeaturedTabContent/FeaturedTabContent";

// --- DYNAMIC DATA FOR THE PAGE ---
const allTopicsData = {
  sleep: {
    breadcrumb: "Meditation Topics - Sleep",
    title: "Sleep Meditation",
    description:
      "Battling sleepless nights? Explore Insight Timer's collection of free sleep meditations & expert guided relaxation techniques...",
    filterTags: [
      "Sleep Preparation",
      "Sleep Hygiene",
      "Sleep Quality",
      "Sleep Improvement",
    ],
    tabs: ["Featured", "Tracks", "Courses", "Live Events", "Articles"],
    content: {
      featured: [
        {
          slug: "yoga-nidra-drifting",
          title: "Yoga Nidra: Drifting Into Peaceful Sleep -...",
          author: "Natalie Moon Yoga Nidra",
          image: "/assets/retreat-1.png",
          metaLine1: "4.9 ★ • Guided • 50 min • Plus",
        },
        {
          slug: "soul-connection-featured",
          title: "Soul Connection",
          author: "davidji",
          image: "/assets/retreat-2.png",
          metaLine1: "4.9 ★ • Guided • 20 min • Plus",
        },
        {
          slug: "deep-sleep-affirmations",
          title: "Deep Sleep Meditation With Affirmations:...",
          author: "Kenneth Soares",
          image: "/assets/retreat-1.png",
          metaLine1: "4.9 ★ • Guided • 102 min",
        },
        {
          slug: "grounding-yoga-nidra",
          title: "Grounding Yoga Nidra",
          author: "Ally Boothroyd",
          image: "/assets/retreat-2.png",
          metaLine1: "4.8 ★ • Guided • 30 min",
        },
      ],
      articles: [
        {
          slug: "five-steps-sleep",
          title: "Five Steps To a Better Night's Sleep",
          author: "Linda Hall",
          image: "/assets/retreat-1.png",
        },
        {
          slug: "mindful-steps-sleep",
          title: "3 Mindful Steps To Better Sleep",
          author: "Janice Marturano",
          image: "/assets/retreat-1.png",
        },
      ],
      liveEvents: [
        {
          slug: "yin-yoga-sleep",
          title: "Wind Down Yin Yoga For Sleep",
          host: "Elliott Troupe",
          image: "/assets/retreat-1.png",
          status: "IN 2 HRS",
          time: "6:30AM",
        },
        {
          slug: "music-of-plants",
          title: "The Music of Plants",
          host: "Elliott Troupe",
          image: "/assets/retreat-1.png",
          status: "TODAY",
          time: "5:30PM",
        },
        {
          slug: "mental-massage",
          title: "The Mental Massage - Short Talk and Meditation",
          host: "Elliott Troupe",
          image: "/assets/retreat-1.png",
          status: "TOMORROW",
          time: "4:30AM",
        },
        {
          slug: "sound-bath-oracle",
          title: "Sound Bath + Oracle Card Reading",
          host: "Elliott Troupe",
          image: "/assets/retreat-1.png",
          status: "TOMORROW",
          time: "5:30AM",
        },
      ],
      courses: [
        {
          slug: "end-of-day-meditations",
          title: "End Of Day Meditations",
          author: "Fleur Chambers",
          image: "/assets/retreat-1.png",
          rating: 4.8,
          duration: "11 days",
        },
        {
          slug: "irest-yoga-nidra",
          title: "iRest Yoga Nidra: Resilience for Everyday...",
          author: "Richard Miller",
          image: "/assets/retreat-1.png",
          rating: 4.8,
          duration: "10 days",
        },
        {
          slug: "yoga-nidra-restore",
          title: "Yoga Nidra: Restore Your Energy",
          author: "Kamini Desai, PhD",
          image: "/assets/retreat-1.png",
          rating: 4.9,
          duration: "10 days",
        },
        {
          slug: "rituals-for-sleep",
          title: "10 Rituals For Blissful Sleep",
          author: "Renee Rotkopf",
          image: "/assets/retreat-1.png",
          rating: 4.6,
          duration: "10 days",
        },
      ],
      tracks: [
        {
          slug: "yoga-nidra-sleep",
          title: "Yoga Nidra For Sleep",
          author: "Jennifer Piercy",
          image: "/assets/retreat-1.png",
          rating: 4.7,
          genre: "Guided",
          duration: "22 min",
        },
        {
          slug: "floating",
          title: "Floating",
          author: "James Anthony Walker",
          image: "/assets/retreat-2.png",
          rating: 4.8,
          genre: "Music",
          duration: "59 min",
        },
        {
          slug: "rain-thunder",
          title: "Rain & Thunder Sound Therapy",
          author: "Desh",
          image: "/assets/retreat-1.png",
          rating: 4.8,
          genre: "Music",
          duration: "92 min",
        },
        {
          slug: "breathing-into-sleep",
          title: "Breathing Into Sleep",
          author: "Bethany Auriel-Hagan",
          image: "/assets/retreat-2.png",
          rating: 4.7,
          genre: "Guided",
          duration: "17 min",
        },
      ],
    },
  },
  anxiety: {
    breadcrumb: "Meditation Topics - Anxiety",
    title: "Anxiety Meditation",
    description:
      "Find calm and relief from anxiety with guided meditations designed to soothe a worried mind and relax the nervous system.",
    filterTags: ["Panic Attacks", "Social Anxiety", "Worry", "Stress Relief"],
    tabs: ["Featured", "Tracks", "Courses", "Live Events", "Articles"],
    content: {
      featured: [
        {
          slug: "yoga-nidra-drifting",
          title: "Yoga Nidra: Drifting Into Peaceful Sleep -...",
          author: "Natalie Moon Yoga Nidra",
          image: "/assets/retreat-1.png",
          metaLine1: "4.9 ★ • Guided • 50 min • Plus",
        },
        {
          slug: "soul-connection-featured",
          title: "Soul Connection",
          author: "davidji",
          image: "/assets/retreat-2.png",
          metaLine1: "4.9 ★ • Guided • 20 min • Plus",
        },
        {
          slug: "deep-sleep-affirmations",
          title: "Deep Sleep Meditation With Affirmations:...",
          author: "Kenneth Soares",
          image: "/assets/retreat-1.png",
          metaLine1: "4.9 ★ • Guided • 102 min",
        },
        {
          slug: "grounding-yoga-nidra",
          title: "Grounding Yoga Nidra",
          author: "Ally Boothroyd",
          image: "/assets/retreat-2.png",
          metaLine1: "4.8 ★ • Guided • 30 min",
        },
      ],
      articles: [],
      liveEvents: [],
      courses: [], // Added missing 'courses' property
      tracks: [],
    },
  },
};

const TopicPage: React.FC = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const [topicData, setTopicData] = useState(allTopicsData.sleep);
  const [activeTab, setActiveTab] = useState("Featured");

  useEffect(() => {
    const currentTopicData =
      allTopicsData[topicSlug as keyof typeof allTopicsData] ||
      allTopicsData.sleep;
    setTopicData(currentTopicData);
    setActiveTab("Featured");
    window.scrollTo(0, 0);
  }, [topicSlug]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Featured":
        return <FeaturedTabContent items={topicData.content.featured} />;
      case "Articles":
        return <ArticleCardList articles={topicData.content.articles} />;
      case "Live Events":
        return <LiveEventsList events={topicData.content.liveEvents} />;
      case "Courses":
        return <CourseList courses={topicData.content.courses} />;
      case "Tracks":
        return (
          <TrackList title="Free library" tracks={topicData.content.tracks} />
        );
      default:
        return (
          <div className={styles.placeholder}>
            Content for {activeTab} goes here.
          </div>
        );
    }
  };

  return (
    <div className={styles.topicPage}>
      <TopicHeader
        breadcrumb={topicData.breadcrumb}
        title={topicData.title}
        description={topicData.description}
        filterTags={topicData.filterTags}
      />

      <nav className={styles.tabNav}>
        {topicData.tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? styles.active : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.contentLayout}>
          <div className={styles.leftColumn}>{renderTabContent()}</div>
          <aside className={styles.rightColumn}>
            <HelpSidebar />
          </aside>
        </div>
      </main>

      <footer className={styles.stickyFooter}>
        <p>Trusted by 32 million people. It's free.</p>
        <button className={styles.getAppButton}>Get the app</button>
      </footer>
    </div>
  );
};

export default TopicPage;
