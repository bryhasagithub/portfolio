import React from "react";
import "./CreationsCard.css";

export default function CreationsCard({ cardInfo }) {
    function openUrlInNewTab(url) {
        var win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <div className="certificate-card" key={`certificate-${cardInfo.title}`}>
            <div className="certificate-image-div">
                <img
                    src={cardInfo.image}
                    alt="PWA"
                    className="card-image"
                ></img>
            </div>
            <div className="certificate-detail-div">
                <h5 className="card-title">{cardInfo.title}</h5>
                <p className="card-subtitle">{cardInfo.description}</p>
            </div>
            <div className="certificate-card-footer">
                {cardInfo.footer.map((value, index) => {
                    return (
                        <span
                            className="certificate-tag"
                            key={`certificate-${index}`}
                            onClick={() => openUrlInNewTab(value.url)}
                        >
                            {value.name}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
