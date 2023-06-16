import React, {useState} from 'react'
import ListOfPlayer from '../Share/ListOfPlayer'



function Player () {
  const [player, setPlayer] = useState([]);

  return (
    <div className='container'>
        {ListOfPlayer.map((player)=>(
        <div className='column'>
            <div className='card'>
                <img src={player.img}/>
                <h3>{player.name}</h3>
                <p className='title'>{player.club}</p>
                <p className='btn'><button onClick={()=>{setPlayer(player)}}><a href='#popup1' id='openPopUp'>Detail</a></button></p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Player