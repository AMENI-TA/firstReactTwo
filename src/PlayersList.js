

import React from 'react';
import Player from './player';
import players from './players';

function PlayersList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          shirtNumber={player.shirtNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
}

export default PlayersList;