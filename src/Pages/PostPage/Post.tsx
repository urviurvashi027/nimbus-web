import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaLink,
  FaPlay,
} from "react-icons/fa";
import styles from "./Post.module.scss";

// --- MOCK DATABASE OF ALL ARTICLES ---
// In a real application, this data would come from a database or a headless CMS.
const allArticles = [
  {
    slug: "5-tips-for-soreness",
    title: "What's the Difference Between Stress and Burnout?",
    mainImage: "/assets/retreat-1.png",
    author: {
      name: "Dr. Alisha Rai",
      avatar: "/assets/retreat-1.png",
      bio: "Clinical psychologist specializing in workplace wellbeing and stress management.",
      category: "MENTAL HEALTH AND WELLBEING",
    },
    content: [
      {
        type: "paragraph",
        text: "In our fast-paced, always-on world, the words “stress” and “burnout” are often used interchangeably. We talk about feeling stressed from a long week at work or burned out from juggling too many responsibilities. While they are related, they represent distinct states of being with different causes, symptoms, and, most importantly, different paths to recovery. Understanding this distinction is the first critical step toward effectively managing your mental and emotional health. Stress is an experience we all share, a natural response to demands and pressures. Burnout, however, is a more severe and prolonged state of emotional, physical, and mental exhaustion. Confusing the two can lead to ineffective coping strategies, prolonging suffering and preventing true recovery. This guide will delve deep into the nuances of stress and burnout, helping you identify what you’re experiencing and providing targeted strategies to reclaim your sense of balance and wellbeing.",
      },
      {
        type: "heading",
        text: "Understanding Stress: The Body’s Alarm System",
      },
      {
        type: "paragraph",
        text: 'Stress, in its most basic form, is the body\'s reaction to any change that requires an adjustment or response. The body reacts to these changes with physical, mental, and emotional responses. Think of it as your internal alarm system. When you perceive a threat or a challenge—whether it’s a looming deadline, a difficult conversation, or a physical danger—your nervous system kicks into high gear. This triggers the famous "fight-or-flight" response, a cascade of hormones like adrenaline and cortisol that prepare you to either face the threat or flee from it. Your heart pounds, your muscles tighten, your blood pressure rises, and your senses become sharper. This response is not inherently bad. In short bursts, stress can be beneficial. It can help you stay focused, energetic, and alert. It’s what helps you slam on the brakes to avoid an accident or gives you the adrenaline rush to perform well in a presentation. This is known as acute stress, and it’s a normal part of life. The problems begin when this alarm system doesn’t shut off. When a stressful situation ends, the body is supposed to return to its normal, relaxed state. Chronic stress occurs when the source of stress is constant and you never get a chance to recover. It’s like having that internal alarm blaring continuously. This can be caused by ongoing pressures like a high-pressure job, financial worries, or a difficult relationship. Over time, this sustained state of high alert can have serious consequences for your health, leading to issues like anxiety, insomnia, high blood pressure, and a weakened immune system. The key characteristic of stress is a sense of urgency and hyperactivity. You feel overwhelmed, as if everything is too much and you’re constantly running to catch up. Your emotions are often heightened and over-reactive. It’s a state of over-engagement.',
      },
      {
        type: "track",
        data: {
          title: "Calm The Storm",
          artist: "Mindful Moments",
          plays: "12.3k",
          image: "/assets/retreat-1.png",
        },
      },
      { type: "heading", text: "Defining Burnout: The State of Depletion" },
      {
        type: "paragraph",
        text: 'If stress is characterized by over-engagement, burnout is defined by disengagement. Burnout is a state of complete emotional, physical, and mental exhaustion caused by excessive and prolonged stress. It occurs when you feel overwhelmed, emotionally drained, and unable to meet constant demands. As the stress continues, you begin to lose the interest and motivation that led you to take on a certain role in the first place. The World Health Organization (WHO) now recognizes burnout as an "occupational phenomenon" in its International Classification of Diseases (ICD-11). It’s not classified as a medical condition, but as a syndrome resulting from chronic workplace stress that has not been successfully managed.',
      },
      {
        type: "blockquote",
        text: "Burnout is not just about feeling tired; it’s a deep-seated exhaustion that isn’t relieved by a good night’s sleep or a weekend off. It’s a sense of being completely spent.",
      },
      {
        type: "paragraph",
        text: "The syndrome is characterized by three main dimensions:",
      },
      {
        type: "list",
        items: [
          "Exhaustion: Feeling depleted of one’s emotional and physical resources. This goes beyond simple fatigue. It’s a profound lack of energy that impacts your ability to function in your personal and professional life.",
          "Cynicism and Detachment (Depersonalization): A sense of negativity, cynicism, or detachment from your job and the people you work with. You might feel irritable, impatient, and start to distance yourself emotionally. The passion and engagement you once had are replaced by a feeling of numbness.",
          "Reduced Professional Efficacy: A feeling of incompetence and a lack of achievement and productivity at work. You start to doubt your abilities and may feel that you are no longer effective in your role. This can lead to a crisis of confidence and a sense of failure.",
        ],
      },
      {
        type: "paragraph",
        text: "Unlike stress, where you might still feel a sense of hope that things will get better if you can just get everything under control, burnout is often accompanied by a sense of helplessness and hopelessness. You feel empty, devoid of motivation, and beyond caring. It’s a slow and insidious process, often creeping up until you find yourself in a state of profound depletion.",
      },
      { type: "heading", text: "Key Differences: A Side-by-Side Comparison" },
      {
        type: "paragraph",
        text: "To truly grasp the distinction, let’s compare the two directly:",
      },
      {
        type: "list",
        items: [
          "Engagement vs. Disengagement: Stress involves over-engagement. Your emotions are heightened, and you have a sense of urgency. Burnout involves disengagement. Your emotions are blunted, and you feel detached and helpless.",
          "Hyperactivity vs. Helplessness: A stressed person is often frantic and hyperactive, trying to solve problems. A burned-out person feels paralyzed and hopeless, unable to muster the energy to care.",
          "Physical Toll vs. Emotional Toll: While both have physical symptoms, stress primarily manifests as energy and urgency (at first), while burnout leads to emotional exhaustion, detachment, and a loss of motivation.",
          "Cause: Stress is caused by too many pressures that demand too much of you physically and mentally. Burnout is caused by feeling empty, devoid of motivation, and beyond caring about the consequences.",
          "Awareness: Often, people under stress are aware of their state. They know they are stressed. Burnout can be more insidious, and individuals might not recognize it in themselves until it reaches a critical stage.",
        ],
      },
      {
        type: "heading",
        text: "The Path to Recovery: Tailoring Your Approach",
      },
      {
        type: "paragraph",
        text: 'Because stress and burnout are different, the strategies for recovery must also be different. Trying to "push through" burnout with the same energy you might use to tackle a stressful project will only deepen the exhaustion.',
      },
      { type: "paragraph", text: "For Managing Stress:" },
      {
        type: "list",
        items: [
          "Active Coping: Engage in problem-solving. Break down large tasks into smaller, manageable steps. Practice time management techniques like the Pomodoro Technique.",
          "Physical Activity: Regular exercise is one ofthe most effective ways to combat the effects of stress. It helps burn off anxious energy and releases endorphins.",
          "Relaxation Techniques: Actively engage in practices like deep breathing, meditation, and yoga to calm the nervous system. Apps like Insight Timer offer thousands of guided meditations for stress relief.",
          "Set Boundaries: Learn to say no to new commitments when your plate is already full. Protect your time and energy.",
        ],
      },
      { type: "paragraph", text: "For Recovering from Burnout:" },
      {
        type: "list",
        items: [
          "Prioritize Rest: This is non-negotiable. Recovery from burnout requires intentional and deep rest. This may mean taking time off work, reducing your hours, or simply scheduling unscheduled time with no obligations.",
          "Disconnect: It’s crucial to detach from the source of the burnout. This means setting firm boundaries around work, such as not checking emails after hours and taking your full lunch break.",
          "Seek Support: Talk to a trusted friend, family member, or a mental health professional. A therapist can provide a safe space to explore the root causes of your burnout and develop strategies for recovery.",
          "Reconnect with Your Values: Burnout often occurs when your work is misaligned with your core values. Take time to reflect on what truly matters to you. What gives you a sense of purpose and meaning? Re-engaging with hobbies and activities you love outside of work can help rekindle your sense of self.",
          "Re-evaluate Your Role: Sometimes, recovery requires a significant change. This could mean discussing a role change with your manager, shifting your responsibilities, or in some cases, finding a new job or career path that is more sustainable and fulfilling.",
        ],
      },
      {
        type: "paragraph",
        text: "In conclusion, while stress is a normal and often unavoidable part of life, burnout is a serious condition that requires deliberate and compassionate intervention. By learning to recognize the signs of each, you can move from a state of frantic over-engagement or numb disengagement toward a place of balance, purpose, and genuine wellbeing. Acknowledging the difference is not just a matter of semantics; it’s the key to unlocking the right path to a healthier, more sustainable life.",
      },
    ],
    relatedPosts: [
      {
        slug: "8-tips-yoga-retreat",
        title: "8 Tips to Market Your Yoga Retreat and Fill Every Spot",
        category: "TIPS AND GUIDES",
        image: "/assets/retreat-1.png",
      },
      {
        slug: "what-is-prana",
        title: "What Prana Is And How To Feel It",
        category: "SPIRITUALITY",
        image: "/assets/retreat-1.png",
      },
    ],
  },
  // ... other articles
];

// Define a type for your article for better TypeScript support
type Article = (typeof allArticles)[0];

// --- Reusable Components (Now with full implementation) ---

const AuthorSidebar: React.FC<{ author: Article["author"] }> = ({ author }) => (
  <aside className={styles.leftSidebar}>
    <div className={styles.authorInfo}>
      <img
        src={author.avatar}
        alt={author.name}
        className={styles.authorAvatar}
      />
      <strong>{author.name}</strong>
      <p>{author.bio}</p>
      <span>{author.category}</span>
    </div>
    <div className={styles.socialLinks}>
      <a href="#">
        <FaFacebookF />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
      <a href="#">
        <FaLinkedinIn />
      </a>
      <a href="#">
        <FaEnvelope />
      </a>
      <a href="#">
        <FaLink />
      </a>
    </div>
  </aside>
);

const EnergyResetCard: React.FC<{ track: any }> = ({ track }) => (
  <div className={styles.energyResetCard}>
    <img src={track.image} alt={track.title} />
    <div className={styles.trackInfo}>
      <strong>{track.title}</strong>
      <span>{track.artist}</span>
      <p>{track.plays} plays</p>
    </div>
    <button className={styles.playButton} aria-label="Play track">
      <FaPlay />
    </button>
  </div>
);

const RelatedPosts: React.FC<{ posts: Article["relatedPosts"] }> = ({
  posts,
}) => (
  <section className={styles.relatedPostsSection}>
    <h2 className={styles.relatedTitle}>Related posts</h2>
    <div className={styles.relatedGrid}>
      {posts.map((post, index) => (
        <Link
          to={`/blog/${post.slug}`}
          key={index}
          className={styles.relatedCard}
        >
          <img src={post.image} alt={post.title} />
          <p className={styles.relatedCategory}>{post.category}</p>
          <h3 className={styles.relatedCardTitle}>{post.title}</h3>
        </Link>
      ))}
    </div>
  </section>
);

// --- The Main Component ---
const BlogPostPage: React.FC = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const [articleData, setArticleData] = useState<Article | undefined>();

  useEffect(() => {
    const foundArticle = allArticles.find((p) => p.slug === articleSlug);
    setArticleData(foundArticle);
    window.scrollTo(0, 0);
  }, [articleSlug]);

  if (!articleData) {
    return (
      <div className={styles.blogPage}>
        <h1 className={styles.articleTitle}>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.blogPage}>
      <div className={styles.pageLayout}>
        <AuthorSidebar author={articleData.author} />
        <main className={styles.mainContent}>
          <h1 className={styles.articleTitle}>{articleData.title}</h1>
          <img
            src={articleData.mainImage}
            alt={articleData.title}
            className={styles.mainImage}
          />

          <div className={styles.articleBody}>
            {articleData.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return <p key={index}>{block.text}</p>;
                case "heading":
                  return <h2 key={index}>{block.text}</h2>;
                case "blockquote":
                  return <blockquote key={index}>{block.text}</blockquote>;
                case "list":
                  return (
                    <ul key={index}>
                      {block.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                case "track":
                  return <EnergyResetCard key={index} track={block.data} />;
                default:
                  return null;
              }
            })}
          </div>
        </main>
      </div>
      <RelatedPosts posts={articleData.relatedPosts} />
    </div>
  );
};

export default BlogPostPage;
