import React from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import "./TeamDetail.scss"

function TeamDetail({team,logoOnRight}) {
    return (<>
        <div className='team-detail-container'>
        <Grid>
            <GridRow className={logoOnRight ? "logo-on-right" : ""}>
                <GridColumn width={10} className={`logo-name-col ${logoOnRight ? "align-start" :""}` }>
                    <div className={"logo-name-container"}>
                        <img height={50} width={50} src={team.logoPath}>
                        </img>
                        <div>
                            {team.shortName}
                        </div>
                    </div>
                </GridColumn>
                <GridColumn width={4}>
                    <div>
                        {team.runs + "/"+ team.out}
                    </div>
                    <div>
                        {"("+team.overs+")"}
                    </div>
                </GridColumn>
            </GridRow>
        </Grid>
        </div>
    </>)
}

export default TeamDetail;