import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/sidebar.module.css';


const Sidebar = () => {
  return (
      <ul className={styles.sidebar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
  );
};

export default Sidebar;
