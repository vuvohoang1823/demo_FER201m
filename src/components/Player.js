import React, { useState } from "react";
import PlayerDetail from "./PlayerDetail";

export default function Player({player}) {
    const [isClosed, setIsClosed] = useState(true);

    return (
        <div className="player-card" onClick={() => {setIsClosed(!isClosed)}}>
            <img src={"assets/players/" + player.img} alt={player.name} />
            <h3>{player.name}</h3>
            <p className="club-name">{player.club}</p>
            <p className="player-detail-toggle" onClick={() => {setIsClosed(!isClosed)}}>
                <a href="#home">Details</a>
            </p>

            <PlayerDetail isClosed={isClosed} player={player} />
        </div>
    );
}