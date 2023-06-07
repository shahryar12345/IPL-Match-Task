import React from 'react';
import "./HomeContainer.scss"
import MatchDetails from '../../components/MatchDetails/MatchDetails';

function HomeContainer() {
    return (<>
        <div className="home-container">
            <MatchDetails />
        </div>
    </>)
}

export default HomeContainer;
