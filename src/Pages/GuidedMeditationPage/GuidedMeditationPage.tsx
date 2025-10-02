import React, { useState, useEffect } from "react";
// import d from "../../components/ShareModal/ShareModal"
import styles from "./GuidedMeditationPage.module.scss";
import HelpSidebar from "./components/HelpSidebar/HelpSidebar";
import ShareModal from "../../components/ShareModal/ShareModal";
import QrCodeBanner from "../../components/QrCodeBanner/QrCodeBanner";
import { FaPlay, FaVolumeUp, FaExpand, FaGraduationCap } from "react-icons/fa";
import { useParams } from "react-router-dom";
import MeditationInfo from "./components/MeditationInfo/MeditationInfo";
import TeacherProfile from "./components/TeacherProfile/TeacherProfile";
import ReviewsCarousel from "./components/ReviewCarosuel/ReviewCarosuel";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import RetreatsCarousel from "../../components/RetreatCarousel/RetreatCarousel";

// --- MOCK DATABASE OF MEDITATIONS/COURSES ---
const allMeditations = {
  "soul-connection": {
    title: "Soul Connection",
    author: "davidji",
    videoPlaceholder: "/assets/meditation-video-placeholder.jpg",
    details: {
      // Added details for this course
      rated: "4.8",
      type: "Course",
      activity: "Meditation",
      suitableFor: "Beginners",
      plays: "15.2k",
      description:
        "A 10-day course to help you unwind and release the stress of the day, preparing you for a deep and restful sleep.",
      tags: ["Sleep", "Stress & Anxiety", "Beginner"],
      transcript: "Welcome to your end of day meditation...",
    },
    teacher: {
      name: "davidji",
      location: "Los Angeles, CA, USA",
      avatar: "/assets/retreat-2.png",
      bio: "davidji is the founder of The Meditation Academy where he trains meditators to become RockStar meditation teachers. Many of his certified teachers teach right here on Insight Timer. For the pas...",
    },
    reviews: {
      total: 213,
      average: 4.9,
      items: [
        {
          author: "Anna",
          avatar: "/assets/retreat-2.png",
          date: "6 July 2025",
          rating: 5,
          text: "One of your absolute strongest So powerful ♥️🙏🏻",
        },
        {
          author: "Chelsea",
          avatar: "/assets/review-avatar-2.jpg",
          date: "1 July 2025",
          rating: 5,
          text: "Davidji is my go-to meditation teacher, I love his wisdom, is relaxing energy and calming voice.",
        },
        {
          author: "Maria",
          avatar: "/assets/retreat-2.png",
          date: "28 June 2025",
          rating: 5,
          text: "Absolutely beautiful and just what I needed today. Thank you!",
        },
      ],
    },
    moreFromTeacher: [
      {
        slug: "40-days-transformation",
        title: "The 40 Days Of Transformation",
        author: "davidji",
        image: "/assets/retreat-2.png",
        metaLine1: "5 ★ • 40 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
      {
        slug: "awaken-shakti",
        title: "Awaken The Sacred Power Of Shakti",
        author: "davidji",
        image: "/assets/retreat-2.png",
        metaLine1: "4.9 ★ • 10 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
      {
        slug: "journey-rebirth",
        title: "30-Day Journey To Rebirth",
        author: "davidji",
        image: "/assets/retreat-2.png",
        metaLine1: "4.8 ★ • 30 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
      {
        slug: "healing-sessions",
        title: "The Healing Sessions: Freeing Your Soul Throu...",
        author: "davidji",
        image: "/assets/retreat-2.png",
        metaLine1: "5 ★ • 11 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
    ],
    relatedMeditations: [
      {
        slug: "box-breathing-stress",
        title: "Box Breathing For High Stress Moments",
        author: "Caylin Brie White",
        image: "/assets/retreat-2.png",
        metaLine1: "4.4 ★ • Guided • 7 min",
      },
      {
        slug: "four-soul-questions",
        title: "The Four Soul Questions",
        author: "Hanna Finissi",
        image: "/assets/retreat-2.png",
        metaLine1: "4.6 ★ • Guided • 11 min",
      },
      {
        slug: "healing-non-ordinary",
        title: "Healing With Non-Ordinary States Of...",
        author: "Fred Wood",
        image: "/assets/retreat-2.png",
        metaLine1: "4.8 ★ • Guided • 17 min",
      },
      {
        slug: "love-devotion",
        title: "Love & Devotion",
        author: "Clare Connolly",
        image: "/assets/retreat-2.png",
        metaLine1: "4.8 ★ • Guided • 7 min",
      },
    ],
    upcomingRetreats: {
      title: "Upcoming Retreats 3",
      tags: [
        "All Retreats",
        "Yoga Retreats",
        "Wellness Retreats",
        "Meditation Retreats",
        "Yoga Teacher Training",
        "Women's Retreats",
      ],
      retreats: [
        {
          slug: "sacred-soul-1",
          title: "Sacred Soul: A Journey into...",
          host: "davidji",
          image: "/assets/retreat-1.png",
          price: "$3,999",
          date: "October 21 - 26, 2025",
          location: "Carlsbad, CA,...",
        },
        {
          slug: "ashtanga-yoga-1",
          title: "8 Day Ashtanga Yoga & Personal...",
          host: "Rohil Jethmalani",
          image: "/assets/retreat-2.png",
          price: "$1,225",
          date: "July 14 - 21, 2025",
          location: "Bali, Indonesia",
        },
        {
          slug: "sedona-wellness-1",
          title: "Sedona Women's Wellness Retreat",
          host: "Ashley Schroeder",
          image: "/assets/retreat-1.png",
          price: "$2,100",
          date: "July 16 - 20, 2025",
          location: "Sedona, AZ,...",
        },
        {
          slug: "sedona-wellne-1",
          title: "Sedona Women's Wellness Retreat",
          host: "Ashley Schroeder",
          image: "/assets/retreat-1.png",
          price: "$2,100",
          date: "July 16 - 20, 2025",
          location: "Sedona, AZ,...",
        },
      ],
    },
  },
  "end-of-day-meditations": {
    title: "End Of Day Meditations",
    author: "Fleur Chambers",
    videoPlaceholder: "/assets/course-1.jpg",
    details: {
      // Added details for this course
      rated: "4.9",
      type: "Guided",
      activity: "Yoga Nidra",
      suitableFor: "Everyone",
      plays: "25.1k",
      description:
        "Build resilience and find deep relaxation with the evidence-based practice of iRest Yoga Nidra.",
      tags: ["Yoga Nidra", "Resilience", "Stress & Anxiety"],
      transcript:
        "Find a comfortable position and prepare for the practice of iRest...",
    },
    teacher: {
      name: "davidji",
      location: "Los Angeles, CA, USA",
      avatar: "/assets/retreat-1.png",
      bio: "davidji is the founder of The Meditation Academy where he trains meditators to become RockStar meditation teachers. Many of his certified teachers teach right here on Insight Timer. For the pas...",
    },
    reviews: {
      total: 213,
      average: 4.9,
      items: [
        {
          author: "Anna",
          avatar: "/assets/retreat-2.png",
          date: "6 July 2025",
          rating: 5,
          text: "One of your absolute strongest So powerful ♥️🙏🏻",
        },
        {
          author: "Chelsea",
          avatar: "/assets/retreat-1.png",
          date: "1 July 2025",
          rating: 5,
          text: "Davidji is my go-to meditation teacher, I love his wisdom, is relaxing energy and calming voice.",
        },
        {
          author: "Maria",
          avatar: "/assets/retreat-1.png",
          date: "28 June 2025",
          rating: 5,
          text: "Absolutely beautiful and just what I needed today. Thank you!",
        },
      ],
    },
    moreFromTeacher: [
      {
        slug: "40-days-transformation",
        title: "The 40 Days Of Transformation",
        author: "davidji",
        image: "/assets/retreat-1.png",
        metaLine1: "5 ★ • 40 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
      {
        slug: "awaken-shakti",
        title: "Awaken The Sacred Power Of Shakti",
        author: "davidji",
        image: "/assets/retreat-2.png",
        metaLine1: "4.9 ★ • 10 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
      {
        slug: "journey-rebirth",
        title: "30-Day Journey To Rebirth",
        author: "davidji",
        image: "/assets/retreat-1.png",
        metaLine1: "4.8 ★ • 30 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
      {
        slug: "healing-sessions",
        title: "The Healing Sessions: Freeing Your Soul Throu...",
        author: "davidji",
        image: "/assets/retreat-2.png",
        metaLine1: "5 ★ • 11 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
    ],
    relatedMeditations: [
      {
        slug: "box-breathing-stress",
        title: "Box Breathing For High Stress Moments",
        author: "Caylin Brie White",
        image: "/assets/retreat-1.png",
        metaLine1: "4.4 ★ • Guided • 7 min",
      },
      {
        slug: "four-soul-questions",
        title: "The Four Soul Questions",
        author: "Hanna Finissi",
        image: "/assets/retreat-2.png",
        metaLine1: "4.6 ★ • Guided • 11 min",
      },
      {
        slug: "healing-non-ordinary",
        title: "Healing With Non-Ordinary States Of...",
        author: "Fred Wood",
        image: "/assets/retreat-1.png",
        metaLine1: "4.8 ★ • Guided • 17 min",
      },
      {
        slug: "love-devotion",
        title: "Love & Devotion",
        author: "Clare Connolly",
        image: "/assets/retreat-2.png",
        metaLine1: "4.8 ★ • Guided • 7 min",
      },
    ],
    upcomingRetreats: {
      title: "Upcoming Retreats 2",
      tags: [
        "All Retreats",
        "Yoga Retreats",
        "Wellness Retreats",
        "Meditation Retreats",
        "Yoga Teacher Training",
        "Women's Retreats",
      ],
      retreats: [
        {
          slug: "sacred-soul-2",
          title: "Sacred Soul: A Journey into...",
          host: "davidji",
          image: "/assets/retreat-1.png",
          price: "$3,999",
          date: "October 21 - 26, 2025",
          location: "Carlsbad, CA,...",
        },
        {
          slug: "ashtanga-yoga-2",
          title: "8 Day Ashtanga Yoga & Personal...",
          host: "Rohil Jethmalani",
          image: "/assets/retreat-2.png",
          price: "$1,225",
          date: "July 14 - 21, 2025",
          location: "Bali, Indonesia",
        },
        {
          slug: "sedona-wellness-3",
          title: "Sedona Women's Wellness Retreat",
          host: "Ashley Schroeder",
          image: "/assets/retreat-1.png",
          price: "$2,100",
          date: "July 16 - 20, 2025",
          location: "Sedona, AZ,...",
        },
        {
          slug: "sedona-wellness-21",
          title: "Sedona Women's Wellness Retreat",
          host: "Ashley Schroeder",
          image: "/assets/retreat-1.png",
          price: "$2,100",
          date: "July 16 - 20, 2025",
          location: "Sedona, AZ,...",
        },
      ],
    },
  },
  "irest-yoga-nidra": {
    title: "iRest Yoga Nidra: Resilience for Everyday...",
    author: "Richard Miller",
    videoPlaceholder: "/assets/retreat-1.png",
    details: {
      rated: "4.9",
      type: "Guided",
      activity: "Meditation",
      suitableFor: "Everyone",
      plays: "10.4k",
      description:
        "Join davidji on this gentle yet powerful journey into the serenity of your soul. Through this deep SOUL CONNECTION, you will experience clarity, healing & transformation. Feel free to use this meditation as a way to soothe your sadness, fill your heart, connect you with your higher power - or help you fall asleep.",
      tags: [
        "Sleep",
        "Spiritual",
        "Stress & Anxiety",
        "Energy-Based",
        "Guided Imagery",
        "Spirituality",
        "Visualization",
        "Stress",
      ],
      transcript: "Hello, This is davidji...",
    },
    teacher: {
      name: "davidji",
      location: "Los Angeles, CA, USA",
      avatar: "/assets/retreat-1.png",
      bio: "davidji is the founder of The Meditation Academy where he trains meditators to become RockStar meditation teachers. Many of his certified teachers teach right here on Insight Timer. For the pas...",
    },
    reviews: {
      total: 213,
      average: 4.9,
      items: [
        {
          author: "Anna",
          avatar: "/assets/review-avatar-1.jpg",
          date: "6 July 2025",
          rating: 5,
          text: "One of your absolute strongest So powerful ♥️🙏🏻",
        },
        {
          author: "Chelsea",
          avatar: "/assets/retreat-2.png",
          date: "1 July 2025",
          rating: 5,
          text: "Davidji is my go-to meditation teacher, I love his wisdom, is relaxing energy and calming voice.",
        },
        {
          author: "Maria",
          avatar: "/assets/retreat-1.png",
          date: "28 June 2025",
          rating: 5,
          text: "Absolutely beautiful and just what I needed today. Thank you!",
        },
      ],
    },
    moreFromTeacher: [
      {
        slug: "40-days-transformation",
        title: "The 40 Days Of Transformation",
        author: "davidji",
        image: "/assets/retreat-2.png",
        metaLine1: "5 ★ • 40 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
      {
        slug: "awaken-shakti",
        title: "Awaken The Sacred Power Of Shakti",
        author: "davidji",
        image: "/assets/retreat-1.png",
        metaLine1: "4.9 ★ • 10 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
      {
        slug: "journey-rebirth",
        title: "30-Day Journey To Rebirth",
        author: "davidji",
        image: "/assets/retreat-2.png",
        metaLine1: "4.8 ★ • 30 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
      {
        slug: "healing-sessions",
        title: "The Healing Sessions: Freeing Your Soul Throu...",
        author: "davidji",
        image: "/assets/retreat-1.png",
        metaLine1: "5 ★ • 11 days",
        tagText: "COURSE",
        tagIcon: FaGraduationCap,
      },
    ],
    relatedMeditations: [
      {
        slug: "box-breathing-stress",
        title: "Box Breathing For High Stress Moments",
        author: "Caylin Brie White",
        image: "/assets/retreat-2.png",
        metaLine1: "4.4 ★ • Guided • 7 min",
      },
      {
        slug: "four-soul-questions",
        title: "The Four Soul Questions",
        author: "Hanna Finissi",
        image: "/assets/retreat-1.png",
        metaLine1: "4.6 ★ • Guided • 11 min",
      },
      {
        slug: "healing-non-ordinary",
        title: "Healing With Non-Ordinary States Of...",
        author: "Fred Wood",
        image: "/assets/retreat-2.png",
        metaLine1: "4.8 ★ • Guided • 17 min",
      },
      {
        slug: "love-devotion",
        title: "Love & Devotion",
        author: "Clare Connolly",
        image: "/assets/retreat-1.png",
        metaLine1: "4.8 ★ • Guided • 7 min",
      },
    ],
    upcomingRetreats: {
      title: "Upcoming Retreats 1",
      tags: [
        "All Retreats",
        "Yoga Retreats",
        "Wellness Retreats",
        "Meditation Retreats",
        "Yoga Teacher Training",
        "Women's Retreats",
      ],
      retreats: [
        {
          slug: "sacred-soul-4",
          title: "Sacred Soul: A Journey into...",
          host: "davidji",
          image: "/assets/retreat-1.png",
          price: "$3,999",
          date: "October 21 - 26, 2025",
          location: "Carlsbad, CA,...",
        },
        {
          slug: "ashtanga-yoga-4",
          title: "8 Day Ashtanga Yoga & Personal...",
          host: "Rohil Jethmalani",
          image: "/assets/retreat-2.png",
          price: "$1,225",
          date: "July 14 - 21, 2025",
          location: "Bali, Indonesia",
        },
        {
          slug: "sedona-wellness-4",
          title: "Sedona Women's Wellness Retreat",
          host: "Ashley Schroeder",
          image: "/assets/retreat-1.png",
          price: "$2,100",
          date: "July 16 - 20, 2025",
          location: "Sedona, AZ,...",
        },
      ],
    },
  },
  // ... add data for all other courses
};

const GuidedMeditationPage: React.FC = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const [meditationData, setMeditationData] = useState(
    allMeditations["soul-connection"]
  );
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isQrVisible, setIsQrVisible] = useState(true);

  useEffect(() => {
    // Find the data for the current course slug, or use a default
    const data =
      allMeditations[courseSlug as keyof typeof allMeditations] ||
      allMeditations["soul-connection"];
    setMeditationData(data);
    window.scrollTo(0, 0);
  }, [courseSlug]);

  useEffect(() => {
    const handleScroll = () => {
      setIsQrVisible(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      {isShareModalOpen && (
        <ShareModal onClose={() => setIsShareModalOpen(false)} />
      )}

      <div className={styles.mainLayout}>
        <div className={styles.leftContent}>
          <div className={styles.videoPlayer}>
            <img
              src={meditationData.videoPlaceholder}
              alt={meditationData.title}
            />
            <div className={styles.memberTag}>MEMBER PLUS</div>
            <div className={styles.videoControls}>
              <div className={styles.playIcon}>
                <FaPlay />
              </div>
              <div className={styles.timer}>00:30</div>
              <div className={styles.rightControls}>
                <FaVolumeUp />
                <FaExpand />
              </div>
            </div>
          </div>

          <button
            className={styles.shareButton}
            onClick={() => setIsShareModalOpen(true)}
          >
            Share
          </button>

          <div className={styles.titleSection}>
            <h1>{meditationData.title}</h1>
            <p>by {meditationData.author}</p>
          </div>

          <div className={styles.qrWrapper}>
            <QrCodeBanner isVisible={isQrVisible} />
          </div>

          <div className={styles.moreInfo}>
            {/* Render the new MeditationInfo component with the correct data */}
            <MeditationInfo details={meditationData.details} />
            <TeacherProfile teacher={meditationData.teacher} />
            <ReviewsCarousel
              reviews={meditationData.reviews.items}
              totalReviews={meditationData.reviews.total}
              averageRating={meditationData.reviews.average}
            />
            <CardCarousel
              title={`More from ${meditationData.teacher.name}`}
              items={meditationData.moreFromTeacher}
            />
            <CardCarousel
              title="Related Meditations"
              items={meditationData.relatedMeditations}
            />

            {/* Using the new reusable component */}
            <RetreatsCarousel
              title={meditationData.upcomingRetreats.title}
              tags={meditationData.upcomingRetreats.tags}
              retreats={meditationData.upcomingRetreats.retreats}
            />
          </div>
        </div>

        <aside className={styles.rightSidebar}>
          <HelpSidebar />
        </aside>
      </div>
    </div>
  );
};

export default GuidedMeditationPage;
