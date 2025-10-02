import React from "react";
import styles from "./RetreatHighlights.module.scss";
import { FaUsers, FaRegCalendarAlt } from "react-icons/fa";
import InfoSection from "../InfoSection/InfoSection";
import LocationMap from "../LoationMap/LocationMap";
import VenueSection from "../VenueSection/VenueSection";
import MealsSection from "../MealsSection/MealsSection";
import TestimonialsCarousel from "../TestimonialsCarousel/TestimonialsCarousel";
import AccommodationSection from "../AccommodationSection/AccommodationSection";
import HostList from "../HostList/HostList";
import WhatsIncludedSection from "../WhatsIncludedSection/WhatsIncludedSection";
import FaqSection from "../FaqSection/FaqSection";
import CancellationPolicy from "../CancellationPolicy/CancellationPolicy";

// Define the structure for the component's props
interface RetreatContent {
  title: string;
  date: string;
  location: string;
  interestedCount: number;
  host: {
    name: string;
    avatar: string;
    followers: string;
  };
  duration: string;
  groupSize: string;
  highlights: string[];
  details: string; // New property for details text
  locationName: string;
  locationCoords: {
    // New property for map coordinates
    lat: number;
    lng: number;
  };
  venue: {
    // New property for venue data
    name: string;
    reviews: {
      rating: number;
      count: number;
    };
    image: string;
    description: string;
    amenities: {
      name: string;
      icon: React.ElementType;
    }[];
  };
  meals: {
    // New property for meals data
    image: string;
    mealsProvided: string;
    dietsCatered: string;
    description: string;
  };
  testimonials: {
    // New property for testimonials data
    text: string;
    author: string;
    location: string;
  }[];
  accommodation: {
    description: string;
    options: {
      slug: string;
      title: string;
      image: string;
      details: string;
      price: string;
    }[];
  };
  hosts: {
    // Changed from 'host' to 'hosts' to support multiple
    name: string;
    location: string;
    avatar: string;
    bio: string;
    isCertified: boolean;
    languages: string;
    teachingSince: string;
    joinedDate: string;
  }[];
  whatsIncluded: {
    // New property for this section
    included: string[];
    notIncluded: string[];
  };
  faq: {
    faqs: { question: string; answer: string }[];
    guestRequirements: string[];
  };
  cancellationPolicy: {
    policyText: string;
    tags: string[];
  };
}

interface RetreatDetailContentProps {
  content: RetreatContent;
}

const RetreatDetailContent: React.FC<RetreatDetailContentProps> = ({
  content,
}) => {
  return (
    <article className={styles.content}>
      <h1>{content.title}</h1>
      <div className={styles.meta}>
        <p>{content.date}</p>
        <p>{content.location}</p>
        <span>
          <FaUsers /> {content.interestedCount} people are interested
        </span>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.hostInfo}>
        <img src={content.host.avatar} alt={content.host.name} />
        <div>
          <span>HOSTED BY</span>
          <strong>{content.host.name}</strong>
          <p>{content.host.followers} followers</p>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.logistics}>
        <div>
          <FaRegCalendarAlt />
          <span>{content.duration}</span>
        </div>
        <div>
          <FaUsers />
          <span>{content.groupSize}</span>
        </div>
      </div>

      <div className={styles.highlights}>
        <h2>Highlights</h2>
        <ul>
          {content.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Using the new reusable component for Details */}
      <InfoSection title="Details">
        <p className={styles.descriptionText}>{content.details}</p>
        <a href="#" className={styles.showMoreLink}>
          Show more{" "}
        </a>
      </InfoSection>

      {/* Using the new reusable component for Location */}
      <InfoSection title="Location">
        <p className={styles.locationName}>{content.locationName}</p>
        <div className={styles.mapContainer}>
          {/* Render the interactive map instead of a static image */}
          <LocationMap mapCenter={content.locationCoords} />
          <button>View larger map</button>
        </div>
      </InfoSection>

      {/* Using the new reusable component for Venue */}
      <VenueSection venue={content.venue} />

      <AccommodationSection
        accommodations={content.accommodation.options}
        description={content.accommodation.description}
      />

      {/* Using the new reusable component for Meals */}
      <MealsSection meals={content.meals} />

      {/* The new HostList component replaces the old hostInfo div */}
      <HostList hosts={content.hosts} />

      <WhatsIncludedSection
        included={content.whatsIncluded.included}
        notIncluded={content.whatsIncluded.notIncluded}
      />
      {/* Using the new reusable component for Testimonials */}
      <TestimonialsCarousel testimonials={content.testimonials} />

      <FaqSection
        faqs={content.faq.faqs}
        guestRequirements={content.faq.guestRequirements}
      />
      <CancellationPolicy
        policyText={content.cancellationPolicy.policyText}
        tags={content.cancellationPolicy.tags}
      />
    </article>
  );
};

export default RetreatDetailContent;
