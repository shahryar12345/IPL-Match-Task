import React, { useEffect, useState } from 'react';
import { Tab } from 'semantic-ui-react';
import "./NewsPane.scss"
import { useNavigate } from "react-router-dom"
import newJson from "../../data/news.json"
import NewListItem from '../NewsListItem/NewsListItem';

function NewsPane() {

    const [newsListState,setNewsListState] = useState([])
    useEffect(() => {
        if(newJson){
            setNewsListState(newJson)
        }
    }, [newJson])

    return (<>
       <div className='new-pane-container'>
            {
                newsListState && newsListState.length > 0 && newsListState.map((news) => {
                    return <>
                        <NewListItem news={news} />
                    </>
                })
            }
       </div>
    </>)
}   

export default NewsPane;