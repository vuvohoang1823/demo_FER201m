import React, { Component } from "react";
import { Players } from "../shared/PlayersData";
import PlayersContainer from "./PlayersContainer";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: Players
        }
    }

    render() {
        return (
            <main>
                <PlayersContainer players={this.state.players} />
            </main>
        );
    }
}