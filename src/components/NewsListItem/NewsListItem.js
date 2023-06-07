import React from 'react';
import "./NewsListItem.scss"

function NewListItem({news}) {

    return (<>
       <div className='new-list-item'>
            <div className='content'>
                <div className='heading'>
                    {news.heading}
                </div>
                <div className='source-time-ago'>
                    <p>
                        {news.source + " " + news.timeAgo}
                    </p>
                </div>
            </div>
            <div className='image'>
                    <img src={news.thumbnail} />
            </div>
       </div>
    </>)
}   

export default NewListItem;