import React, { useEffect , useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import NavigationTabs from '../../components/NavigationTabs/NavigationTabs';
import NewsPane from '../../components/NewsPane/NewsPane';
import PlayersPane from '../../components/PlayersPane/PlayersPane';
import matchDetailJson from "../../data/matchDetails.json"
import "./DetailContainer.scss"

function DetailContainer(props) {

    let location = useLocation()
    let navigate = useNavigate();

    const [activeIndexState,setActiveIndexState] = useState(0)
    useEffect(()=>{
        console.log(location)
        if(location){
            if(location.pathname.includes("news")){
                setActiveIndexState(1)
            }else if(location.pathname.includes("players")){
                setActiveIndexState(2)
            }
        }
    },[location])

    return (<>
        <div className="content-detail-container">
            <div className='heading-container'>             
                <div className='heading' onClick={() => navigate("/")}>
                    <Icon name='arrow left'></Icon>
                    {matchDetailJson.tournament}
                </div>
                <div className='nav-tab-container'>
                    <NavigationTabs activeIndex={activeIndexState} />
                </div>
            </div>
            <div className='content-container'>
                <div className='content-pane'> 
                    {
                        location.pathname.includes("news") && <NewsPane />
                    }
                    {
                        location.pathname.includes("players") && <PlayersPane />
                    }
                </div>
            </div>
        </div>
    </>)
}

export default DetailContainer;
