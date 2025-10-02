import React from "react";
import styles from "./QrCodeBanner.module.scss";

interface QrCodeBannerProps {
  isVisible: boolean;
}

const QrCodeBanner: React.FC<QrCodeBannerProps> = ({ isVisible }) => {
  return (
    <div className={`${styles.qrBanner} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.text}>
        <strong>Trusted by 32 million people. It's free.</strong>
        <span>Get the app</span>
      </div>
      <img src="/assets/qr-code.png" alt="QR Code" />
    </div>
  );
};

export default QrCodeBanner;
