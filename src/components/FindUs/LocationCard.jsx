import React from "react";
import "./LocationCard.css";

const LocationCard = ({ location, onDirections, onOrder }) => {
  return (
    <div className="location-card">
      <div className="location-header">
        <div>
          <h2 className="location-name">{location.name}</h2>
          <p className="location-subtitle">{location.subtitle}</p>
        </div>
        <span className="location-status">{location.status}</span>
      </div>

      <div className="location-details">
        <div className="detail-item">
          <svg
            className="detail-icon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M9 1C6.24 1 4 3.24 4 6c0 3.75 5 10 5 10s5-6.25 5-10c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S8.17 4.5 9 4.5s1.5.67 1.5 1.5S9.83 7.5 9 7.5z"
              fill="currentColor"
            />
          </svg>
          <span>{location.address}</span>
        </div>

        <div className="detail-item opening-times">
          <svg
            className="detail-icon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <circle
              cx="9"
              cy="9"
              r="8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M9 5v4l3 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="times-dropdown">
            <span className="times-header">Opening Times</span>
            <div className="times-list">
              {location.openingTimes.map((time, index) => (
                <div key={index} className="time-item">
                  <span className="time-day">{time.day}</span>
                  <span className="time-hours">{time.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-item">
          <svg
            className="detail-icon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M3 3h12c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm0 2l6 4 6-4v2l-6 4-6-4V5z"
              fill="currentColor"
            />
          </svg>
          <a href={`mailto:${location.email}`} className="detail-link">
            {location.email}
          </a>
        </div>
      </div>

      <div className="location-actions">
        <button
          className="action-btn directions-btn"
          onClick={() => onDirections(location.directionsUrl)}
        >
          DIRECTIONS
        </button>
        <button
          className="action-btn order-btn"
          onClick={() => onOrder(location.orderUrl)}
        >
          ORDER
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
