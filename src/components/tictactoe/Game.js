import React, { Component } from "react";
import { Board } from "./Board";
import "./Tictactoe.css";

export class Game extends Component {
  constructor(props) {
    super(props);
    console.log("Game constructor");
  }

  render() {
    return (
      <div className="game">
        <Board></Board>
      </div>
    );
  }
}