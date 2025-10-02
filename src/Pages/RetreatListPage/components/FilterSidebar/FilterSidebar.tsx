import React, { useState } from "react";
import styles from "./FilterSidebar.module.scss";
import { FaChevronDown } from "react-icons/fa";

// Define the structure for the component's props
interface FilterSidebarProps {
  filters: { [key: string]: string[] };
  onFilterChange: (category: string, option: string) => void;
}

// Mock data for filter options
const filterOptions = {
  type: [
    { name: "Meditation", count: 78 },
    { name: "Yoga", count: 79 },
    { name: "Health and Wellness", count: 47 },
    { name: "Spirituality", count: 21 },
    { name: "Emotional Healing", count: 2 },

    // Additional options for "Show more"
    { name: "Wellness", count: 15 },
    { name: "Reiki", count: 10 },
    { name: "Naturopathy", count: 5 },
    { name: "Healing", count: 30 },
  ],
  // Add more filter categories like 'Duration', 'Months', etc. here
};

const INITIAL_VISIBLE_OPTIONS = 5;

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
}) => {
  const [showAllTypes, setShowAllTypes] = useState(false);
  const visibleTypes = showAllTypes
    ? filterOptions.type
    : filterOptions.type.slice(0, INITIAL_VISIBLE_OPTIONS);
  return (
    <aside className={styles.sidebar}>
      {/* Price Range Section */}
      <div className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>Price range</h3>
        <p className={styles.groupSubtitle}>
          Total price for the entire retreat
        </p>
        <div className={styles.priceGraph}></div> {/* Placeholder for graph */}
        <div className={styles.priceInputs}>
          <input type="text" defaultValue="$101 USD" placeholder="Minimum" />
          <input type="text" defaultValue="$10,000 USD" placeholder="Maximum" />
        </div>
      </div>

      {/* Type Section */}
      <div className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>Type</h3>
        <div className={styles.options}>
          {visibleTypes.map((option) => (
            <label key={option.name} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={filters.type?.includes(option.name)}
                onChange={() => onFilterChange("type", option.name)}
              />
              <span>{option.name}</span>
              <span className={styles.count}>{option.count}</span>
            </label>
          ))}
        </div>
        {filterOptions.type.length > INITIAL_VISIBLE_OPTIONS && (
          <button
            className={styles.showMore}
            onClick={() => setShowAllTypes(!showAllTypes)}
          >
            {showAllTypes ? "Show less" : "Show more"}{" "}
            <FaChevronDown
              className={`${styles.chevron} ${showAllTypes ? styles.open : ""}`}
            />
          </button>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;
