import styles from "./TopicHeader.module.scss";

// Define the types for the props this component will accept
interface TopicHeaderProps {
  breadcrumb: string;
  title: string;
  description: string;
  filterTags: string[];
}

const TopicHeader: React.FC<TopicHeaderProps> = ({
  breadcrumb,
  title,
  description,
  filterTags,
}) => {
  return (
    <header className={styles.pageHeader}>
      <p className={styles.breadcrumb}>{breadcrumb}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.filterTags}>
        {filterTags.map((tag) => (
          <button key={tag}>{tag}</button>
        ))}
      </div>
    </header>
  );
};

export default TopicHeader;
