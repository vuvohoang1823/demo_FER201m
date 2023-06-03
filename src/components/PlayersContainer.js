import React from "react";
import Player from "./Player";

export default function PlayersContainer({players}) {
    return (
        <div className="players-container">
            {players.map((player) =>
                <Player player={player} />
            )}
        </div>
    );
}