import React, { useEffect, useRef } from "react";
import styles from "./LocationMap.module.scss";

// Define the props for the component
interface LocationMapProps {
  mapCenter: {
    lat: number;
    lng: number;
  };
}

const LocationMap: React.FC<LocationMapProps> = ({ mapCenter }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the Google Maps script has loaded
    if (window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: mapCenter,
        zoom: 12,
        disableDefaultUI: true, // Hides default controls for a cleaner look
      });

      // Add a marker to the map
      new window.google.maps.Marker({
        position: mapCenter,
        map: map,
      });
    }
  }, [mapCenter]); // Rerun this effect if the map center changes

  return <div ref={mapRef} className={styles.map}></div>;
};

// We need to declare the 'google' object on the window for TypeScript
declare global {
  interface Window {
    google: any;
  }
}

export default LocationMap;
