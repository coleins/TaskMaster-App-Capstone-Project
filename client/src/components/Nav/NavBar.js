
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory instead of useNavigate
// src/components/Nav/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClock, faBell, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import PomodoroTimer from './Timer';

import '../styles/NavBar.css';

const NavBar = ({ username }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const history = useHistory(); // Use useHistory instead of useNavigate

  const handleLogout = () => {
    // Implement your logout logic here, such as clearing tokens or user data
    // For example:
    // localStorage.removeItem('userToken');
    history.push('/'); // Redirect to the landing page after logout
  };

  const [showTimer, setShowTimer] = useState(false);
  // const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="nav-icons">
        <li className="nav-icon">
          <Link to="/add-dashboard">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </li>
        <li className="nav-icon">
          <button onClick={() => setShowTimer(!showTimer)}>
            <FontAwesomeIcon icon={faClock} />
          </button>
        </li>
        <li className="nav-icon">
          <Link to="/notifications">
            <FontAwesomeIcon icon={faBell} />
          </Link>
        </li>
        <li className="nav-icon">
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </li>
        <li className="nav-icon" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <FontAwesomeIcon icon={faUser} />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/user" className="to-settings">Account Settings</Link>
              <button onClick={handleLogout} className="logout">Log Out</button>
            </div>
          )}
        </li>
      </ul>
      {showTimer && <PomodoroTimer />}
    </nav>
  );
};

export default NavBar;
