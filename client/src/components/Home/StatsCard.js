import React from "react";
import "./StatsCard.css";

const StatsCard = ({ view, currentStats, handleViewChange }) => {
  return (
    <div className="stats-card">
      <h2>{view.charAt(0).toUpperCase() + view.slice(1)} Stats</h2>
      <div className="stats-container">
        <div className="stats-item">
          <h3>Completed</h3>
          <p>{currentStats.completed}</p>
        </div>
        <div className="stats-item">
          <h3>In Progress</h3>
          <p>{currentStats.inProgress}</p>
        </div>
        <div className="stats-item">
          <h3>Pending</h3>
          <p>{currentStats.pending}</p>
        </div>
      </div>
      <div className="view-selector">
        <button
          onClick={() => handleViewChange("daily")}
          className={view === "daily" ? "active" : ""}
        >
          Daily
        </button>
        <button
          onClick={() => handleViewChange("weekly")}
          className={view === "weekly" ? "active" : ""}
        >
          Weekly
        </button>
        <button
          onClick={() => handleViewChange("monthly")}
          className={view === "monthly" ? "active" : ""}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default StatsCard;