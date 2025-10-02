import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

import styles from "./Sidebar.module.scss";

import topics from "../../../data/BlogTopics.ts";

const Sidebar: React.FC = () => {
  const [expandedTopics, setExpandedTopics] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExpand = (id: number) => {
    setExpandedTopics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className={styles.sidebar}>
      <h3>Topics Index</h3>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <div
              onClick={() => toggleExpand(topic.id)}
              className={styles.topic}
            >
              {topic.id}. {topic.title}{" "}
              {topic.subtopics && (
                <span>
                  {expandedTopics[topic.id] ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
            </div>
            {topic.subtopics && expandedTopics[topic.id] && (
              <ul className={styles.subtopics}>
                {topic.subtopics.map((sub, index) => (
                  <li key={index}>
                    <Link to={`/blog/${topic.slug}/${index + 1}`}>{sub}</Link>
                  </li>
                ))}
                {/* "View All" option */}
                <li>
                  <Link to={`/blog/${topic.slug}/all`}>View All</Link>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
