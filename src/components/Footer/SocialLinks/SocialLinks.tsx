import React from "react";
import styles from "./SocialLinks.module.scss";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const SocialLinks: React.FC = () => {
  const links = [
    { platform: "Twitter", icon: <FaTwitter />, url: "#" },
    { platform: "Facebook", icon: <FaFacebook />, url: "#" },
    { platform: "Instagram", icon: <FaInstagram />, url: "#" },
    { platform: "Github", icon: <FaGithub />, url: "#" },
    { platform: "WhatsApp", icon: <FaWhatsapp />, url: "#" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>✨ Follow me!</h2>
      {links.map((link, index) => (
        <div key={index} className={styles.linkRow}>
          <a href={link.url} className={styles.linkText}>
            Follow me on <strong>{link.platform}</strong>
          </a>
          <span className={styles.icon}>{link.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
