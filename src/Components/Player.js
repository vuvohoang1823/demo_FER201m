import React, {useState} from 'react'
import ListOfPlayer from '../Share/ListOfPlayer'
import { Link } from 'react-router-dom';



function Player () {
  const [player, setPlayer] = useState([]);

  return (
    <div className='player-container'>
        {ListOfPlayer.map((player)=>(
        <div className='column'>
            <div className='card'>
                <img src={player.img}/>
                <h3>{player.name}</h3>
                <p className='title'>{player.club}</p>
                <Link to={`detail/${player.id}`}> 
                <p><button>Detail</button></p>
                </Link>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Player