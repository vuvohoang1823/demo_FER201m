import React from 'react'
import cr from '../asset/images/cr.jpg'
import haaland from '../asset/images/haaland.jpg'
import kane from '../asset/images/kane.jpg'
import kante from '../asset/images/kante.jpg'
import m from '../asset/images/m.jpg'
import messi from '../asset/images/messi.jpg'
import neymar from '../asset/images/neymar.jpg'

const Player = () => {
  return (
    <div className='container'>
        <div className='column'>
            <div className='card'>
                <img src={cr}/>
                <h3>Cristiano Ronaldo</h3>
                <p className='title'>Manchester United</p>
                <p className='btn'><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src={kante}/>
                <h3>Kante</h3>
                <p className='title'>Chalsea</p>
                <p className='btn'><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src={messi}/>
                <h3>Messi</h3>
                <p className='title'>PSG</p>
                <p className='btn'><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src={neymar}/>
                <h3>Neymar</h3>
                <p className='title'>PSG</p>
                <p className='btn'><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src={kane}/>
                <h3>Kane</h3>
                <p className='title'>Tottemham</p>
                <p className='btn'><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src={haaland}/>
                <h3>Haaland</h3>
                <p className='title'>Manchester City</p>
                <p className='btn'><button>Detail</button></p>
            </div>
        </div>
    </div>
  )
}

export default Player