import React, { useEffect, useState } from 'react';
import { Tab } from 'semantic-ui-react';
import "./NavigationTabs.scss"
import { useNavigate } from "react-router-dom"

function NavigationTabs({activeIndex}) {

    const navigate = useNavigate();
    const [activeIndexState,setActiveIndexState] = useState(0)

    const tabPanes = [{
        menuItem:"Match"
    },
    {
        menuItem:"News"
    },
    {
        menuItem:"Players"
    }]

    
    useEffect(() => {
        setActiveIndexState(activeIndex ? activeIndex : 0)
    } , [activeIndex])


    const handleTabChange = (e,data) => {
        setActiveIndexState(data.activeIndex)
        if(data.activeIndex == 0){
            navigate('/');
        }else if(data.activeIndex == 1){
            navigate('/news');
        }else if(data.activeIndex == 2){
            navigate('/players');
        }
    }

    return (<>
        <div className='nav-tabs-container'>
                <Tab onTabChange={(e,data) => handleTabChange(e,data)} 
                activeIndex={activeIndexState} className={"nav-tabs"} panes={tabPanes}></Tab>
        </div>
    </>)
}   

export default NavigationTabs;