import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; // Added menu icons
import styles from "./Header.module.scss";
import TopicsDropdown from "./TopicsDropdown/TopicsDropdown";
import RetreatsDropdown from "./RetreatDropdown/RetreatDropdown";
import ResourcesDropdown from "./ResourcesDropdown/ResourcesDropdown";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);
  const [isRetreatsOpen, setIsRetreatsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const headerRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeAllDropdowns();
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      ref={headerRef}
    >
      <div className={styles.logo}>
        <Link to="/" className={styles.navLink}>
          Nimbus
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className={styles.menuIcon}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation List with responsive class */}
      <ul
        className={`${styles.navList} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <li
          className={styles.dropdownItem}
          onClick={() => handleNavClick(setIsTopicsOpen, isTopicsOpen)}
        >
          <span>Topics</span>
          <FaChevronDown
            className={`${styles.chevron} ${isTopicsOpen ? styles.open : ""}`}
          />
        </li>
        {/* <li
          className={styles.dropdownItem}
          onClick={() => handleNavClick(setIsRetreatsOpen, isRetreatsOpen)}
        >
          <span>Retreats</span>
          <FaChevronDown
            className={`${styles.chevron} ${isRetreatsOpen ? styles.open : ""}`}
          />
        </li> */}
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
          <Link to="/about" className={styles.navLink}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/community" className={styles.navLink}>
            Join Community
          </Link>
        </li>
      </ul>

      {/* Dropdown panels */}
      {isTopicsOpen && <TopicsDropdown />}
      {isRetreatsOpen && <RetreatsDropdown />}
      {isResourcesOpen && <ResourcesDropdown onLinkClick={closeAllDropdowns} />}
    </header>
  );
};

export default Header;
