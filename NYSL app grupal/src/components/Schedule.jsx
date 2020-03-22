import React from 'react';
import FavTeam from './FavTeam.jsx';
import NextMatches from './NextMatches.jsx'

const home = (props) => {
        return(
            <main className="home overflow-hidden">
                {/* <FavTeam></FavTeam> */}
                <h2 className="m-1 h2-bg">Next matches</h2> 
                <div className="overflow-auto" id="matchesContainer">    
                    {Object.values(props.data.matches).map((el, index) =>
                        <NextMatches changeMatch={props.changeMatch} matchNumber={props.matchNumber} index={index} data={props.data}></NextMatches>
                    )}
                </div>
                
            </main>
            );
        }
        
        
        export default home;