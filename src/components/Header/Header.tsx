import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Header.module.scss";
import TopicsDropdown from "./TopicsDropdown/TopicsDropdown";
import RetreatsDropdown from "./RetreatDropdown/RetreatDropdown";
import ResourcesDropdown from "./ResourcesDropdown/ResourcesDropdown";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isTopicsOpen, setIsTopicsOpen] = useState(false);
  const [isRetreatsOpen, setIsRetreatsOpen] = useState(false); // State for the new dropdown
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // State for the new dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeAllDropdowns = () => {
    setIsTopicsOpen(false);
    setIsRetreatsOpen(false);
    setIsResourcesOpen(false);
  };

  const handleNavClick = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    currentState: boolean
  ) => {
    const wasOpen = currentState;
    closeAllDropdowns();
    if (!wasOpen) {
      setter(true);
    }
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeAllDropdowns();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Link to="/" className={styles.navLink}>
          Nimbus
        </Link>
      </div>
      <ul className={styles.navList}>
        <li
          className={styles.dropdownItem}
          onClick={() => handleNavClick(setIsTopicsOpen, isTopicsOpen)}
        >
          <span>Topics</span>
          <FaChevronDown
            className={`${styles.chevron} ${isTopicsOpen ? styles.open : ""}`}
          />
        </li>
        <li
          className={styles.dropdownItem}
          onClick={() => handleNavClick(setIsRetreatsOpen, isRetreatsOpen)}
        >
          <span>Retreats</span>
          <FaChevronDown
            className={`${styles.chevron} ${isRetreatsOpen ? styles.open : ""}`}
          />
        </li>
        <li
          className={styles.dropdownItem}
          onClick={() => handleNavClick(setIsResourcesOpen, isResourcesOpen)}
        >
          <span>Resources</span>
          <FaChevronDown
            className={`${styles.chevron} ${
              isResourcesOpen ? styles.open : ""
            }`}
          />
        </li>
        <li>
          <Link to="/subscribe" className={styles.navLink}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/subscribe" className={styles.navLink}>
            Join Community
          </Link>
        </li>
      </ul>

      {/* The dropdown panel is rendered conditionally below the header */}
      {isTopicsOpen && <TopicsDropdown />}
      {isRetreatsOpen && <RetreatsDropdown />}
      {isResourcesOpen && <ResourcesDropdown onLinkClick={closeAllDropdowns} />}
    </header>
  );
};

export default Header;
