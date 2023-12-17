import React from 'react';
import styles from './styles/navbar.module.css';
import logo from '../images/Coconut-4.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to="/">
      <nav className={styles.navbar}>

        <img src={logo} alt='logo' />
        <h1>co-commerce</h1>

      </nav></Link>
  );
};

export default Navbar;