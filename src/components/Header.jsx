import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'; 

export default function Header() {
  return (
    <header className="header">
      <h1 style={{ color: 'white', margin: 0 }}>John Doe</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          HOME
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          PORTFOLIO
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          CONTACT
        </NavLink>
        <NavLink
          to="/mentions"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          MENTIONS LÉGALES
        </NavLink>
      </nav>
    </header>
  );
}
