import React from "react";
import TeamMember from "./TeamMember";
import { teamData } from "../../data";
import "./Team.css";

const Team = () => {
  return (
    <section className="team">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">
            <span className="team-title-light">MEET THE</span>{" "}
            <span className="team-title-bold">TEAM</span>
          </h2>
        </div>
        <div className="team-members">
          {teamData.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
