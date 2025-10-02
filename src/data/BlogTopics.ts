interface Topic {
  id: number;
  title: string;
  subtopics?: string[];
  slug?: string;
}

const BlogTopics: Topic[] = [
  {
    id: 1,
    title: "Ayurveda",
    subtopics: ["Ayurvedic diets", "Ayurvedic Routine"],
    slug: "ayurveda", // Unique slug for the topic
  },
  {
    id: 2,
    title: "Mindfulness",
    subtopics: ["stress management"],
    slug: "mindfulness",
  },
  { id: 3, title: "Habit Building", slug: "habit-building" },
  { id: 4, title: "Nutrition", slug: "nutrition" },
  { id: 5, title: "Wellness Tech", slug: "wellness-tech" },
];

export default BlogTopics;
