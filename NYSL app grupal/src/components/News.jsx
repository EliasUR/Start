import React from 'react';
import DownArrow from '../images/down.png';
const news = (props) => {
    let news = props.data
    const items = [];
    for (let i = 0 ; i<news.length ; i++) {
        items.push(
            <div className="matchDivs p-1" key={i}>
                <div className="newsContainer">
                    <h5 className="newsTitle">{news[i].title}</h5>
                    <p className="newsDate">{news[i].date}</p>
                    <div className="newsImage">
                        <img src={news[i].img} alt="random" alt={news[i].alt}></img>
                    </div>
                    <div className="newsSubtitle">
                        <p>{news[i].subtitle}</p>
                    </div>
                    <div  className="newsButton">
                        <a data-toggle="collapse" href={"#"+news[i].id} role="button" aria-expanded="false" aria-controls={news[i].id}><img src={DownArrow} alt="expand button"></img></a>
                    </div>
                
                </div>
                <div className="newsText collapse multi-collapse" id={news[i].id}>
                    <p>{news[i].body}</p> 
                </div>  
            </div>
            )
        }
    return items.reverse();
}
 
export default news;