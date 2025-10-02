import React from "react";
import styles from "./ShareModal.module.scss";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
  FaLink,
  FaCode,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter, FaFacebookMessenger } from "react-icons/fa6";

// Define the props for the component
interface ShareModalProps {
  onClose: () => void;
}

const shareOptions = [
  { icon: <FaFacebookF />, name: "Facebook" },
  { icon: <FaFacebookMessenger />, name: "Messenger" },
  { icon: <FaWhatsapp />, name: "Whatsapp" },
  { icon: <FaXTwitter />, name: "X" },
  { icon: <FaLinkedinIn />, name: "LinkedIn" },
  { icon: <FaEnvelope />, name: "Email" },
  { icon: <FaLink />, name: "Copy Link" },
  { icon: <FaCode />, name: "Embed" },
];

const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Share with your friends and family</h2>
        <div className={styles.shareGrid}>
          {shareOptions.map((option) => (
            <button key={option.name} className={styles.optionButton}>
              {option.icon}
              <span>{option.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
