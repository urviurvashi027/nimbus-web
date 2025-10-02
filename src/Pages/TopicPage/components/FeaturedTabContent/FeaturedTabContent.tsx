import React from "react";
import styles from "./FeaturedTabContent.module.scss";
import CardCarousel from "../../../../components/CardCarousel/CardCarousel";
import { CardItem } from "../../../../components/ContentCard/ContentCard"; // Import the type for our data
import ContentWithCarousel from "../../../../components/ContentWithCarousel/ContentWithCarousel";
import ArticleSection from "../../../../components/ArticleSection/ArticleSection";

// Define the props for the component
// interface FeaturedTabContentProps {
//   items: CardItem[];
// }

// --- TYPE DEFINITIONS TO FIX THE ERROR ---
// This tells TypeScript the exact shape of an article block
interface ArticleBlock {
  type: "heading" | "paragraph";
  text: string;
}

// This defines the shape of the entire featuredData object
interface FeaturedData {
  topCarousel: CardItem[];
  musicSection: {
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    items: CardItem[];
  };
  article: {
    title: string;
    content: ArticleBlock[]; // Use the strict ArticleBlock type here
  };
}

// --- Data for this specific tab ---
const featuredData: FeaturedData = {
  topCarousel: [
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
  musicSection: {
    title: "Sleep Music",
    description:
      "Fall asleep to the soothing sounds of ambient music, nature sounds, and binaural beats. Our extensive library of sleep music is designed to calm your nervous system and guide you into a state of deep, restorative rest.",
    linkText: "Explore Sleep Music",
    linkHref: "/topics/sleep-music",
    items: [
      {
        slug: "dreaming-963hz",
        title: "Dreaming 963Hz",
        author: "Pure Sleep Tones",
        image: "/assets/retreat-1.png",
        metaLine1: "4.8 ★ • Music • 59 min",
      },
      {
        slug: "healing-sleep-theta",
        title: "Healing Sleep - Theta 432Hz",
        author: "Pure Sleep Tones",
        image: "/assets/retreat-2.png",
        metaLine1: "4.8 ★ • Music • 60 min",
      },
      {
        slug: "741hz-heal-sleep",
        title: "741Hz - Heal While Sleep",
        author: "Pure Sleep Tones",
        image: "/assets/retreat-1.png",
        metaLine1: "4.8 ★ • Music • 62 min",
      },
    ],
  },
  article: {
    title: "About Sleep Meditation",
    content: [
      {
        type: "paragraph",
        text: "In the ceaseless hum of the modern world, where demands on our attention are constant and the pace of life seems to accelerate daily, a good night’s sleep has become an elusive treasure for many. Millions of people worldwide lie awake each night, their minds racing with the worries of the day, the plans for tomorrow, and an ever-present hum of anxiety. This modern epidemic of sleeplessness has led to a desperate search for solutions, from prescription medications to complex sleep-hacking gadgets. Yet, one of the most ancient, simple, and profoundly effective remedies is found not in a pill or a device, but within the quiet sanctuary of our own minds: sleep meditation. Sleep meditation is not about forcing sleep to come; rather, it is the gentle art of creating the ideal inner conditions for sleep to arise naturally. It is a collection of techniques and practices designed to calm the overactive mind, release physical tension from the body, and guide the nervous system from a state of high alert into one of deep relaxation and peace. Unlike sedatives, which can often lead to grogginess and dependency, sleep meditation is a skill that, once cultivated, empowers you for a lifetime of better rest. It addresses the root cause of most sleep issues—a mind that refuses to switch off.",
      },
      { type: "heading", text: "The Science Behind a Quiet Mind" },
      {
        type: "paragraph",
        text: "To understand how sleep meditation works, one must first understand why we fail to sleep. The primary culprit is an overactive sympathetic nervous system, our body’s “fight-or-flight” response. When we are stressed, anxious, or mentally overstimulated, our body is flooded with hormones like cortisol and adrenaline. Our heart rate increases, our muscles tense, and our brain remains on high alert, scanning for potential threats. This state is antithetical to sleep. Sleep meditation directly counteracts this by activating the parasympathetic nervous system, the “rest-and-digest” response. Practices like deep diaphragmatic breathing, body scans, and guided imagery send powerful signals to the brain that the perceived danger has passed and it is safe to power down. Deep, slow breathing lowers the heart rate and blood pressure. Consciously relaxing the muscles, one body part at a time, releases stored physical tension. Guided visualizations provide the racing mind with a soothing, non-threatening narrative to follow, gently luring it away from anxious thought loops. Scientific studies using fMRI have visualized these effects, showing that meditation can decrease activity in the amygdala, the brain’s fear center, while increasing activity in the prefrontal cortex, which is associated with emotional regulation and calmness. This neurological shift is the physical manifestation of the peace that meditators experience, creating a fertile ground for sleep to take root and flourish.",
      },
      {
        type: "heading",
        text: "A Toolkit for Restful Nights: Common Sleep Meditation Techniques",
      },
      {
        type: "paragraph",
        text: "The beauty of sleep meditation lies in its diversity; there is no single right way to do it. Instead, there is a rich toolkit of techniques that can be adapted to individual needs and preferences. One of the most accessible methods for beginners is the guided sleep meditation. In this practice, a narrator’s calm and steady voice leads the listener through a specific exercise. This could be a body scan, where you systematically bring awareness to each part of your body and consciously release tension. It could be a visualization, inviting you to imagine yourself in a place of profound safety and tranquility, such as a secluded beach or a quiet forest. The guide’s voice acts as an anchor, giving the mind a single, peaceful point of focus and preventing it from getting caught in the whirlpool of daily worries.",
      },
      {
        type: "paragraph",
        text: "Another powerful technique is Yoga Nidra, often called “yogic sleep.” This is a systematic method of inducing complete physical, mental, and emotional relaxation while maintaining a state of subtle awareness. Practiced while lying down, Yoga Nidra guides the practitioner through several stages, including a rotation of consciousness through different body parts and breath awareness. It is said to be so restorative that a single session can feel like several hours of deep sleep, making it particularly effective for those suffering from sleep debt and chronic fatigue. For individuals who are sensitive to sound, or who prefer a non-verbal approach, sleep music and soundscapes offer another effective pathway to rest. Ambient music, characterized by its slow tempos and lack of jarring changes, can help to soothe the nervous system. Nature sounds, such as gentle rain, ocean waves, or a crackling fire, tap into our primal sense of safety and calm. Binaural beats, which involve playing slightly different frequencies in each ear, can also be used to entrain the brain into the slower delta and theta brainwave states associated with deep sleep and relaxation.",
      },
      {
        type: "heading",
        text: "Cultivating the Habit: Creating Your Pre-Sleep Ritual",
      },
      {
        type: "paragraph",
        text: "While a single session of sleep meditation can provide immediate relief, its true power is unlocked through consistent practice. Creating a nightly wind-down ritual is crucial for signaling to your body and mind that it is time to prepare for sleep. This ritual should begin at least an hour before your desired bedtime. The first step is to create a sleep sanctuary. Your bedroom should be a haven for rest, meaning it should be dark, cool, and quiet. Banish screens from the bedroom, as the blue light they emit can suppress the production of melatonin, the hormone that governs our sleep-wake cycles. Instead of scrolling through social media or watching television, engage in calming activities. This could include reading a physical book (not on a backlit device), journaling to offload the day’s thoughts, gentle stretching, or taking a warm bath. The final step in your ritual is the meditation itself. Find a comfortable position, typically lying down in your bed. You can use headphones to immerse yourself in a guided track without disturbing a partner. Choose a meditation that appeals to you—don’t feel pressured to stick with one if it doesn’t resonate. The key is to approach the practice with an attitude of gentle curiosity and self-compassion. There is no need to “try” to fall asleep; that effort is often what keeps us awake. The goal is simply to rest your attention on the practice. If you fall asleep during the meditation, that’s a wonderful outcome. If you don’t, you have still given your body and mind a period of profound rest and relaxation, which is deeply restorative in its own right. By consistently engaging in this practice, you are not just fighting insomnia; you are fundamentally retraining your brain. You are teaching it that the night is a time for letting go, for release, and for rejuvenation. You are building a new neural pathway, one that leads not into a spiral of anxiety, but into a state of deep and peaceful slumber. In a world that constantly pulls us outward, sleep meditation is a radical act of turning inward, a reclaiming of our most fundamental human need for rest. It is a journey home to the quiet, still center that exists within all of us, waiting to offer us the peace we so desperately seek.",
      },
    ],
  },
};

const FeaturedTabContent: React.FC = () => {
  return (
    <div className={styles.featuredContent}>
      <CardCarousel title="Featured" items={featuredData.topCarousel} />
      <ContentWithCarousel
        title={featuredData.musicSection.title}
        description={featuredData.musicSection.description}
        linkText={featuredData.musicSection.linkText}
        linkHref={featuredData.musicSection.linkHref}
        items={featuredData.musicSection.items}
      />
      <ArticleSection
        title={featuredData.article.title}
        content={featuredData.article.content}
      />
    </div>
  );
};

export default FeaturedTabContent;
