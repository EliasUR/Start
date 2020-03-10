import React from 'react';
import FavTeam from './FavTeam.jsx';
import NextMatches from './NextMatches.jsx'

const home = () => {
        return(
            <main className="home overflow-hidden">
                <FavTeam></FavTeam>
                <h2 className="bg-secondary m-0">Next matches</h2> 
                <div className="overflow-auto" id="matchesContainer">    
                    <NextMatches></NextMatches>
                    <NextMatches></NextMatches>
                    <NextMatches></NextMatches>
                    <NextMatches></NextMatches>
                    
                </div>
                
            </main>
            );
        }
        
        
        export default home;