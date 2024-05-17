import React from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ image, name, role, body }) => {
  return (
    <div className="team-member-card">
      <div className="team-member-card-inner">
        <div className="team-member-card-front">
          <img src={image} alt={name} className="team-member-image" />
        </div>
        <div className="team-member-card-back">
          <div className="team-member-body">{body}</div>
        </div>
      </div>
      <div className="team-member-info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
