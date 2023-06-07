import React from 'react';
import "./PlayerListItem.scss"

function PlayerListItem({player}) {

    return (<>
       <div className='player-list-item'>
            <div className='image'>
                <img src={player.image}></img>
            </div>
            <div className='content'>
                <div className='name'>{player.name}</div>
                <div className='type'>{player.type}</div>
                <div className='team'>{player.team}</div>
            </div>
       </div>
    </>)
}   

export default PlayerListItem;