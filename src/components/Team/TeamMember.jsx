import React from "react";
import "./TeamMember.css";

const TeamMember = ({ name, role, description, image }) => {
  return (
    <div className="team-member">
      <div className="team-member-image">
        <img src={image} alt={name} />
      </div>
      <div className="team-member-info">
        <h3 className="team-member-role">{role}</h3>
        <p className="team-member-description">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
