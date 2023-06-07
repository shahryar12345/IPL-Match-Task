import React, { useEffect, useState } from 'react';
import "./PlayersPane.scss"
import playersJson from "../../data/players.json"
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import PlayerListItem from '../PlayerListItem/PlayerListItem';

function PlayersPane() {
    const [playersListState,setPlayersListState] = useState([])
    useEffect(() => {
        if(playersJson){
            setPlayersListState(playersJson)
        }
    }, [playersJson])

    return (<>
       <div className='players-pane-container'>
            {
                <Grid>
                    <GridRow>
                        {
                            playersListState && playersListState.length > 0 && playersListState.map((player) => {
                                return <>
                                    <GridColumn width={2}>
                                        <PlayerListItem player={player} />
                                    </GridColumn>
                                </>
                            })
                        }
                    </GridRow>
                </Grid>  
            }
       </div>
    </>)
}   

export default PlayersPane;