import React, { useState } from "react";
import styles from "./FaqSection.module.scss";
import { FaPlus } from "react-icons/fa";

// Define the structure for the FAQ data
interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  guestRequirements: string[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs, guestRequirements }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.divider}></div>
      <h2>FAQs</h2>
      <div className={styles.accordion}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.accordionItem}>
            <button
              className={styles.question}
              onClick={() => handleToggle(index)}
            >
              <span>{faq.question}</span>
              <FaPlus
                className={`${styles.icon} ${
                  openIndex === index ? styles.open : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <h3 className={styles.subTitle}>Guest requirements</h3>
      <ul className={styles.requirementsList}>
        {guestRequirements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default FaqSection;
