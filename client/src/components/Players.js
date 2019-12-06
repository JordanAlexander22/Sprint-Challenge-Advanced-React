import React from "react";
import Player from "./Player";

function Players({ players }) {
  if (!players) return <h1>one sec..</h1>;

  return (
    <div>
      {players.map(player => {
        return <Player key={player.id} player={player} />;
      })}
    </div>
  );
}

export default Players;
