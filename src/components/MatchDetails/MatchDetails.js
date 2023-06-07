import React, { useEffect, useState } from 'react';
import "./MatchDetails.scss"
import matchDetailJson from "../../data/matchDetails.json"
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import TeamDetail from '../TeamDetail/TeamDetail';
import NavigationTabs from '../NavigationTabs/NavigationTabs';

function MatchDetails() {
    const [matchDetailState,setMatchDetailState] = useState(null)
    useEffect(() => {
        if(matchDetailJson){
            setMatchDetailState(matchDetailJson)
        }
    }, [matchDetailJson])

    return (<>
        <div className='match-details-container'>
            {
                matchDetailState &&  <>
                <div className='heading-container'>
                    <h4 className='tournament'>{matchDetailState.tournament}</h4>
                    <h3 className='matchNo'>{matchDetailState.matchNo}</h3>
                    <NavigationTabs activeIndex={0} />
                </div>
                <div className='detail-container'>
                    <Grid>
                        <GridRow className='short-name-row'>
                            <h6 className='short-name'>{matchDetailState.shortName + " " + matchDetailState.matchDate}</h6>                     
                        </GridRow>
                        <GridRow className='team-detail-row'>
                            <GridColumn width={8} textAlign={"right"}>
                                <TeamDetail team={matchDetailState.teamA} />  
                            </GridColumn>    
                            <GridColumn width={8}>
                                <TeamDetail team={matchDetailState.teamB} logoOnRight />
                            </GridColumn>                 
                        </GridRow>

                        <GridRow className='description-row'>
                            <GridColumn width={16} textAlign={"center"}>
                                {matchDetailState.resultDescription} 
                            </GridColumn>     
                       
                            <GridColumn width={16} textAlign={"center"}>
                                {matchDetailState.matchDescription}   
                            </GridColumn>      
                        </GridRow>

                        {matchDetailState.highlightsImages && matchDetailState.highlightsImages.length > 0 && 
                            <GridRow className='highlight-row'>
                            {
                                matchDetailState.highlightsImages.map((highlight) => {
                                    return <>
                                     <GridColumn width={6}>
                                        <img src={highlight}></img>
                                    </GridColumn>  
                                    </>
                                })
                            } 
                            </GridRow>
                        }
                    </Grid>
                </div>
                </>  
            }
        </div>
    </>)
}

export default MatchDetails;
