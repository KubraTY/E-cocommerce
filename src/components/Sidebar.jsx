import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to have react-router-dom installed

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;