import React from "react";
import styles from "./TeacherProfile.module.scss";

// Define the structure for the teacher's data
interface Teacher {
  name: string;
  location: string;
  avatar: string;
  bio: string;
}

// Define the props for the component
interface TeacherProfileProps {
  teacher: Teacher;
}

const TeacherProfile: React.FC<TeacherProfileProps> = ({ teacher }) => {
  return (
    <section className={styles.teacherSection}>
      <h2>Meet your Teacher</h2>
      <div className={styles.profileLayout}>
        <img
          src={teacher.avatar}
          alt={teacher.name}
          className={styles.avatar}
        />
        <div className={styles.info}>
          <h3>{teacher.name}</h3>
          <p className={styles.location}>{teacher.location}</p>
        </div>
        <button className={styles.viewProfileButton}>View Profile</button>
      </div>
      <p className={styles.bio}>
        {teacher.bio} <a href="#">Read more</a>
      </p>
    </section>
  );
};

export default TeacherProfile;
