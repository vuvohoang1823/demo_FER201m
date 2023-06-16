import React from 'react'
import ListOfPlayer from '../Share/ListOfPlayer'



function Player () {
  return (
    <div className='container'>
        {ListOfPlayer.map((player)=>(
        <div className='column'>
            <div className='card'>
                <img src={player.img}/>
                <h3>{player.name}</h3>
                <p className='title'>{player.club}</p>
                <p className='btn'><button>Detail</button></p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Player