import React from "react";
import { useNavigate } from "react-router-dom";
import LocationCard from "./LocationCard";
import "./LocationsSidebar.css";

const LocationsSidebar = ({
  locations,
  searchQuery,
  onSearchChange,
  onDirections,
  onOrder,
}) => {
  const navigate = useNavigate();

  return (
    <div className="find-us-sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Find Us</h1>
        <button className="back-button" onClick={() => navigate("/")}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </button>
      </div>

      <div className="search-container">
        <svg
          className="search-icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
          <path
            d="M14 14L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Search by city or postcode..."
          value={searchQuery}
          onChange={onSearchChange}
          className="search-input"
        />
      </div>

      <div className="locations-list">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            onDirections={onDirections}
            onOrder={onOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationsSidebar;
