


import React from 'react';
//import { Card } from 'react-bootstrap';

function Player({ name, team, nationality, shirtNumber, age, imageUrl }) {
  return (
    <div style={{ width: '18rem', margin: '10px' }}>
      <img  src={imageUrl} />
      <body>
        <h1>{name}</h1>
        <h1>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Shirt Number:</strong> {shirtNumber}<br />
          <strong>Age:</strong> {age}
        </h1>
      </body>
    </div>
  );

}
Player.defaultProps = {
  name: 'Unknown',
  team: 'Unknown',
  nationality: 'Unknown',
  shirtNumber: 'Unknown',
  age: 'Unknown',
 imageUrl: 'imageUrl'
};  

export default Player;