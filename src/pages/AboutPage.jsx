import React from 'react';
import victor from '../images/victor.jpeg'
import kubra from '../images/kubra.jpg'
import styles from "../components/styles/about.module.css"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.intro}>
        <p>Welcome to Cocommerce, an innovative e-commerce platform designed to provide users with a seamless and enjoyable online shopping experience. Our platform offers a diverse range of products, from electronics and fashion to home essentials, all curated to meet the needs and preferences of our valued customers.</p>
        <p>Information about the team members:</p>
      </div>
      <ul>
        <li> <div className={styles.pic}>
          <img src={kubra} alt="victor" />
        </div>
          <div className={styles.content}>
            <div className={styles.teamMember}>Kubra Tokgozlu</div> <p>I'm a Turkish native with a background in mathematics. Transitioning to IT, I've found excitement in problem-solving and coding. Family time is my greatest joy, and come summer, you'll catch me swimming in the Mediterranean. Join me in this journey where family, IT challenges, and seaside adventures intertwine.</p>
            <br />
            <div className={styles.links}>
              <a href="https://github.com/KubraTY" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kubra-tokgozlu/" target="_blank" rel="noopener noreferrer">
                <CiLinkedin />
              </a>
            </div>

          </div>

        </li>
        <li>
          <div className={styles.pic}>
            <img src={victor} alt="victor" />
          </div>
          <div className={styles.content}>
            <div className={styles.teamMember}>Victor Silva</div> <p>I was born in Brazil but came to Portugal when I was five years old, since then I have lived in Lisbon. I have a background in Management, but I have always been interested in technology, which is why I decided not to pursue the area of ​​economics. I really like playing football and playing computer games.</p>
            <br />
            <div className={styles.links}>
              <a href="https://github.com/Vini1602" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/victor-silva-17a53b196" target="_blank" rel="noopener noreferrer">
                <CiLinkedin />
              </a>
            </div>

          </div>

        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
