import React from "react";
import "./Creations.css";
import CreationsCard from "../../components/creationsCard/CreationsCard";
import { creationSection } from "../../portfolio";

export default function Creations() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div className="main" id="projects">
      <div className="creation-main-div">
        <div className="creation-header">
          <h1 className="heading creation-heading">{creationSection.title}</h1>
          <p className="subTitle creation-subtitle">{creationSection.subtitle}</p>
        </div>
        <div className="creation-cards-div">
          {creationSection.achivementsCards.map((card,index) => {
            return (
              <CreationsCard
                key={`creations-${index}`}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
