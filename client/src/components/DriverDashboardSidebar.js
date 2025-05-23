import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../styles/DriverDashboardSidebar.css';


const DriverDashboardSidebar = () => {
  return (
    <div className="driver-dashboard">
      <aside className="driver-sidebar">
        <h2>Driver Dashboard</h2>
        <nav className="driver-nav">
          <NavLink to="/driver-dashboard" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/driver-dashboard/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink>
          <NavLink to="/driver-dashboard/trips" className={({ isActive }) => isActive ? "active" : ""}>Trips</NavLink>
        </nav>
      </aside>
      <main className="driver-main">
        <Outlet />
      </main>
    </div>
  );
};

export default DriverDashboardSidebar;