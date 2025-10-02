import React from "react";
import { Link } from "react-router-dom";
import styles from "./LiveEventList.module.scss";
import { FaVideo } from "react-icons/fa";

// Define the structure for a single event
interface LiveEvent {
  slug: string;
  title: string;
  host: string;
  image: string;
  status: string;
  time: string;
}

// Define the props for the component
interface LiveEventsListProps {
  events: LiveEvent[];
}

const LiveEventsList: React.FC<LiveEventsListProps> = ({ events }) => {
  return (
    <div className={styles.liveEventsSection}>
      <h2 className={styles.sectionTitle}>Live Events</h2>
      <div className={styles.eventsGrid}>
        {events.map((event) => (
          <Link
            to={`/events/${event.slug}`}
            key={event.slug}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <img src={event.image} alt={event.title} />
              <div className={styles.timeTag}>
                <FaVideo />
                <span>
                  {event.status}・{event.time}
                </span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{event.title}</h3>
              <p className={styles.cardHost}>{event.host}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LiveEventsList;
