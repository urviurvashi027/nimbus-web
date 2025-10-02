import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./RetreatDetailPage.module.scss";
import RetreatDetailPageHeader from "./components/RetreatDetailPageHeader/RetreatDetailPageHeader";
import RetreatDetailContent from "./components/RetreatHighlights/RetreatHighlights";
import BookingCard from "./components/BookingCard/BookingCard";
import { GiMeditation, GiSpikes, GiPalmTree, GiBed } from "react-icons/gi";

// --- MOCK DATABASE of all retreats ---
const allRetreatsData = {
  "ashtanga-yoga": {
    header: {
      breadcrumbs: [
        { name: "All Retreats", link: "/retreats" },
        {
          name: "Ashtanga Yoga Retreats in Indonesia",
          link: "/retreats/indonesia",
        },
      ],
      images: [
        "/assets/retreat-1.png",
        "/assets/retreat-2.png",
        "/assets/retreat-1.png",
      ],
    },
    content: {
      title: "8 Day Ashtanga Yoga & Personal Development Course In Bali",
      date: "July 14 - 21, 2025",
      location: "Bali, Indonesia",
      interestedCount: 11,
      host: {
        name: "Rohil Jethmalani",
        avatar: "/assets/teacher-avatar.jpg",
        followers: "3.7k",
      },
      duration: "7 nights, 8 days",
      groupSize: "18 person retreat",
      highlights: [
        "Morning Mysore Practice: Each student practices at their own pace while the teachers are there to give them personalised support.",
        "Personal Development Workshops: To take time to clarify the way you truly want to live and the steps which you need to take to be there.",
        "Nature Excursions & Permaculture Workshop: To reconnect with nature and explore ways of conscious & sustainable living.",
        "3 Delicious Daily Meals: Vegetarian & homemade, using organic produce from the permaculture garden and local farmers.",
      ],
      details:
        "Connect with yourself in a pristine natural environment, while rejuvenating with the highest quality food...",
      locationName: "Bali, Indonesia",
      // Added coordinates for Bali
      locationCoords: { lat: -8.409518, lng: 115.188919 },
      venue: {
        name: "Purna Yoga Bali | Ashtanga Yoga Retreats",
        reviews: { rating: 5, count: 21 },
        image: "/assets/retreat-1.png",
        description:
          "Join us for this transformational week full of Ashtanga yoga practice, meditation & personal development workshops. Experience sustainable living in the middle of nature, surrounded by breathtaking Balinese forests, rivers, and waterfalls!",
        amenities: [
          { name: "Yoga Studio", icon: GiMeditation },
          { name: "Garden", icon: GiPalmTree },
          { name: "Spa", icon: GiBed },
          { name: "Restaurant", icon: GiSpikes },
        ],
      },
      meals: {
        image: "/assets/retreat-2.png",
        mealsProvided: "Breakfast • Lunch • Dinner",
        dietsCatered:
          "Vegan • Vegetarian • Halal • Kosher • Gluten-free • Dairy-free • Raw • Organic • Nut Allergy Friendly • Diabetic Friendly",
        description:
          "Nearly everything consumed during the retreat is grown on-site, using organic ingredients, sustainable practices, and harvested with loving hands before each meal. You will be served delicious vegetarian food straight from our permaculture garden. The ...",
      },
      // Added new testimonials data
      testimonials: [
        {
          text: "Ewelina and Rohil are two of the the most down to earth people I know, they made my time at Purna yoga truly feel like home and I will forever be grateful for the amazing community that they created. Because of this space I’ve met some incredible people and sure will be life long friends....",
          author: "Linda Hayes",
          location: "Australia",
        },
        {
          text: "I did the 8 day Ashtanga & personal dev retreat and it was everything I hoped for and more. With retreats, I believe that the hosts (their energy/personality and how they organize the retreat) and an important aspect, and let me tell you ~ Ewelina and Rohil are amazing hosts!! Their loving and calming...",
          author: "Laura Nguyen",
          location: "Canada",
        },
        {
          text: "This was a life-changing experience. The location was breathtaking and the instruction was top-notch. I left feeling refreshed, renewed, and with a deeper connection to my practice.",
          author: "John Doe",
          location: "USA",
        },
      ],
      accommodation: {
        description:
          "We are located in a truly unique eco-resort in the middle of Balinese nature. When we went there for the first time we simply fell in love with its values and the healing power of nature which the place gives!",
        options: [
          {
            slug: "twin-deluxe",
            title: "Twin Room Deluxe",
            image: "/assets/retreat-2.png",
            details: "2-person shared room",
            price: "$1,225 USD / person",
          },
          {
            slug: "private-shared",
            title: "Private Room Shared Bathroom",
            image: "/assets/retreat-1.png",
            details: "Private room for 1",
            price: "$1,695 USD total",
          },
          {
            slug: "private-shared-1",
            title: "Private Room Shared Bathroom",
            image: "/assets/retreat-2.png",
            details: "Private room for 34",
            price: "$1,695 USD total",
          },
        ],
      },
      // Changed 'host' to 'hosts' and made it an array
      hosts: [
        {
          name: "Rohil Jethmalani",
          location: "Pune, Maharashtra, India",
          avatar: "/assets/retreat-1.png",
          bio: "Rohil is a passionate and inspiring teacher from India. He has been deeply immersed in the Yoga and Ayurveda traditions since childhood. His teachings are non-dogmatic and context relevant. Rohil's v...",
          isCertified: true,
          languages: "1 language",
          teachingSince: "Teaching for 4 years",
          joinedDate: "Joined Insight Timer in Nov 2020",
        },
        {
          name: "Ewelina Zablocka",
          location: "Bali, Indonesia",
          avatar: "/assets/retreat-2.png",
          bio: "Ewelina is a traveling Yoga and Meditation teacher, self-development coach and holistic healing practitioner. During her world travels, she has immersed herself in the science of Yoga, Ayurveda and di...",
          isCertified: true,
          languages: "3 languages",
          teachingSince: "Teaching for 4 years",
          joinedDate: "Joined Insight Timer in Mar 2021",
        },
      ],
      whatsIncluded: {
        included: [
          "7 nights accommodation in one of the eco bungalows (linens, towels, wi-fi, all-natural toiletries, all-natural incense, spring water)",
          "3 nutritious vegetarian meals per day, healthy drink and fruits for snacks throughout the day",
          "Daily ashtanga yoga, pranayama & meditation",
          "Daily workshops & excursions - 1:1 Coaching Session with Ewelina or Rohil",
          "50h Yoga Alliance Continuing Education Certificate",
        ],
        notIncluded: [
          "Flight tickets",
          "Airport Pick Up & Drop Off",
          "Spa Treatments",
        ],
      },
      // Added new data for the FAQ and Cancellation sections
      faq: {
        faqs: [
          {
            question: "Which is the closest airport?",
            answer:
              "The closest airport is Ngurah Rai International Airport (DPS) in Denpasar, Bali. It is approximately a 90-minute drive from our retreat center.",
          },
          {
            question: "Is this program beginner friendly?",
            answer:
              "Absolutely! This retreat is designed to accommodate all levels, from complete beginners to advanced practitioners. Our instructors provide personalized guidance to ensure everyone gets the most out of their practice.",
          },
        ],
        guestRequirements: ["16+ years old"],
      },
      cancellationPolicy: {
        policyText:
          "The remaining balance for the retreat is due 60 days prior to the start date. If this balance is paid earlier than these 60 days, you are eligible to cancel and receive a full refund of this remaining balance, provided you do so at least 60 days before the retreat begins.",
        tags: [
          "Meditation Retreats",
          "Meditation Retreats in Bali",
          "Meditation Retreats in Indonesia",
          "Ashtanga Yoga Retreats",
          "Ashtanga Yoga Retreats in Bali",
          "Ashtanga Yoga Retreats in Indonesia",
          "Self-Discovery Retreats",
          "Self Discovery Retreats in Bali",
        ],
      },
    },
    booking: {
      date: "July 14 - 21, 2025",
      duration: "7 nights, 8 days",
      price: "$1,225 USD",
      spotsLeft: "ONLY 8 SPOTS",
      depositInfo:
        "Secure your spot today with a 10% deposit. The balance can be paid by July 15, 2025.",
    },
  },
  // ... add data for other retreats
};

const RetreatDetailPage: React.FC = () => {
  const { retreatSlug } = useParams<{ retreatSlug: string }>();
  const [retreatData, setRetreatData] = useState(
    allRetreatsData["ashtanga-yoga"]
  );

  useEffect(() => {
    const data =
      allRetreatsData[retreatSlug as keyof typeof allRetreatsData] ||
      allRetreatsData["ashtanga-yoga"];
    setRetreatData(data);
    window.scrollTo(0, 0);
  }, [retreatSlug]);

  if (!retreatData) {
    return <div>Retreat not found.</div>;
  }

  return (
    <div className={styles.page}>
      <RetreatDetailPageHeader
        breadcrumbs={retreatData.header.breadcrumbs}
        images={retreatData.header.images}
      />
      {/* Apply the new layout classes here */}
      <main className={styles.mainLayout}>
        <div className={styles.leftColumn}>
          <RetreatDetailContent content={retreatData.content} />
        </div>
        <aside className={styles.rightColumn}>
          <BookingCard {...retreatData.booking} />
        </aside>
      </main>
    </div>
  );
};

export default RetreatDetailPage;
