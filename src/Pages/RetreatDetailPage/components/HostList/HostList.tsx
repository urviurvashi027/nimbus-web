import React from "react";
import styles from "./HostList.module.scss";
import HostCard, { Host } from "../HostCard/HostCard";

interface HostListProps {
  hosts: Host[];
}

const HostList: React.FC<HostListProps> = ({ hosts }) => {
  return (
    <section className={styles.hostListSection}>
      <div className={styles.divider}></div>
      <h2>Host</h2>
      <div className={styles.list}>
        {hosts.map((host) => (
          <HostCard key={host.name} host={host} />
        ))}
      </div>
    </section>
  );
};

export default HostList;
