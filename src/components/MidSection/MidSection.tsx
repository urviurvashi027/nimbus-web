import React from "react";
import styles from "./MidSection.module.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallexComponent from "./ParallexComponent";

const MidSection: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className={styles.productBanner}>
        <ParallexComponent />
      </div>
    </ParallaxProvider>
  );
};

export default MidSection;
