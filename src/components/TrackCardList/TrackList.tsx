import React from "react";
import styles from "./TrackList.module.scss";
import TrackCard, { Track } from "../TrackCard/TrackCard";

interface TrackListProps {
  title: string;
  tracks: Track[];
}

const TrackList: React.FC<TrackListProps> = ({ title, tracks }) => {
  return (
    <div className={styles.trackListSection}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <div className={styles.filters}>
          <button>Filters</button>
          <button>Sort</button>
        </div>
      </div>
      <div className={styles.trackGrid}>
        {tracks.map((track) => (
          <TrackCard key={track.slug} track={track} />
        ))}
      </div>
      <div className={styles.browseButtonWrapper}>
        <button className={styles.browseButton}>Browse all</button>
      </div>
    </div>
  );
};

export default TrackList;
