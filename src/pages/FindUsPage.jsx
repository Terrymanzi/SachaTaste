import React, { useState } from "react";
import { Map } from "../components/common";
import { LocationsSidebar } from "../components/FindUs";
import { locationsData } from "../data";
import "./FindUsPage.css";

const FindUsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locationsData.filter(
    (location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.subtitle.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDirections = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleOrder = (url) => {
    window.location.href = url;
  };

  return (
    <div className="find-us-page">
      <div className="find-us-map">
        <Map locations={filteredLocations} zoom={13} center={[-1.95, 30.06]} />
      </div>

      <LocationsSidebar
        locations={filteredLocations}
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        onDirections={handleDirections}
        onOrder={handleOrder}
      />
    </div>
  );
};

export default FindUsPage;
