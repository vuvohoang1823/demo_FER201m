import React from "react";

export default function PlayerDetail({isClosed, player}) {
    let containerClassName = "player-detail-container";
    containerClassName += isClosed ? " close" : "";

    return (
        <div className={containerClassName}>
            <div className="player-detail">
                <img src={"assets/players/" + player.img} alt={player.name} />
                <h3>{player.name}</h3>
                <p>{player.info}</p>
            </div>
        </div>
    );
}