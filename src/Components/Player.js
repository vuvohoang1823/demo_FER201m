import React, { useState } from 'react';
import ListOfPlayer from '../Share/ListOfPlayer';
import { Link } from 'react-router-dom';
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize';

function Player() {
  const [player, setPlayer] = useState([]);

  return (
    <Container className='player-container'>
        {ListOfPlayer.map((playerItem) => (
            <Card className='card'>
              <img src={playerItem.img} alt={playerItem.name} />
              <div className='card-about'>
                <div className='card-info'>
                  <h3>{playerItem.name}</h3>
                  <Icon left>more_vert</Icon>
                </div>
                <Link to={`detail/${playerItem.id}`}>
                    <p><button>Detail</button></p>
                  </Link>
              </div>
            </Card>
        ))}
    </Container>
  );
}

export default Player;