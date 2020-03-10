import React from 'react';
import DownArrow from '../images/down.png';

const news = () => {
    const matches = ['New 1', 'New 2', 'New 1' , 'New 4' , 'New 5'];
    const items = [];
    for (const [index, value] of matches.entries()) {
        items.push(
            <div className="matchDivs p-1" key={index}>
                
                <div className="d-flex justify-content-around align-items-center">
                    <div className="matchDivsImg">
                        <img src="https://picsum.photos/536/354" alt="random"></img>
                    </div>
                    <div className="d-flex flex-column matchDivsText">
                        <div>
                            <h3>{value}</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p>Subtitle</p>
                            </div>
                            <div className="downArrow" >
                            <a data-toggle="collapse" href="#ID1" role="button" aria-expanded="false" aria-controls="ID1"><img width="100%" src={DownArrow} alt="expand button"></img></a>
                            </div>
                                
        
                        </div>
                    </div>
                  
     
                </div>
                  <div className="collapse multi-collapse" id="ID1">
                        Extra 
                    </div>  
            </div>
            )
        }
    return items;
}
 
export default news;