import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./RetreatListPage.module.scss";
import RetreatsPageHeader from "./components/RetreatPageHeader/RetreatPageHeader";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import { FaTimes } from "react-icons/fa";
import RetreatCard from "../../components/RetreatCard/RetreatCard";
// import RetreatCard, { Retreat } from "../../components/RetreatCard/RetreatCard";

// --- MOCK DATABASE of all retreats ---
const allRetreats = [
  {
    slug: "sacred-soul",
    title: "Sacred Soul: A Journey into...",
    host: "davidji",
    image: "/assets/retreat-1.png",
    price: "$3,999",
    date: "October 21 - 26, 2025",
    location: "Carlsbad, CA,...",
    category: "all",
  },
  {
    slug: "ashtanga-yoga",
    title: "8 Day Ashtanga Yoga & Personal...",
    host: "Rohil Jethmalani",
    image: "/assets/retreat-2.png",
    price: "$1,225",
    date: "July 14 - 21, 2025",
    location: "Bali, Indonesia",
    category: "yoga-retreats",
  },
  {
    slug: "sedona-wellness",
    title: "Sedona Women's Wellness Retreat",
    host: "Ashley Schroeder",
    image: "/assets/retreat-1.png",
    price: "$2,100",
    date: "July 16 - 20, 2025",
    location: "Sedona, AZ,...",
    category: "wellness-retreats",
  },
  // ... add more retreats with different categories
];

// Define the shape of the pageData state to fix the TypeScript error
interface PageData {
  breadcrumbs: { name: string; link: string }[];
  title: string;
  subtitle: string;
}

const RetreatsListPage: React.FC = () => {
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({
    type: ["Meditation", "Yoga"],
  });

  const handleFilterChange = (category: string, option: string) => {
    setFilters((prev) => {
      const current = prev[category] || [];
      const newFilters = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [category]: newFilters };
    });
  };

  const activeFilters = useMemo(() => Object.values(filters).flat(), [filters]);

  const filteredRetreats = useMemo(() => {
    return allRetreats.filter((retreat) => {
      const typeMatch =
        filters.type.length === 0 || filters.type.includes(retreat.type);
      // Add more filter logic here as you add more categories
      return typeMatch;
    });
  }, [filters]);

  console.log(filteredRetreats, "filteredRetreats");

  return (
    <div className={styles.page}>
      <RetreatsPageHeader
        breadcrumbs={[{ name: "Retreats", link: "#" }]}
        title="Meditation Retreats"
        subtitle="Real people. Real life. Real time."
      />
      <div className={styles.pageContent}>
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        <main className={styles.main}>
          <div className={styles.resultsHeader}>
            <div className={styles.activeFilters}>
              <span>{filteredRetreats.length} Retreats</span>
              {activeFilters.map((filter: any) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange("type", filter)}
                >
                  {filter} <FaTimes />
                </button>
              ))}
            </div>
            <select className={styles.sortDropdown}>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className={styles.retreatsGrid}>
            {filteredRetreats.map((retreat) => (
              <RetreatCard key={retreat.slug} retreat={retreat} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default RetreatsListPage;
