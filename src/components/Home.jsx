import React from 'react';
import News from './News.jsx';

const home = () => {
        return(
            <main className="home overflow-auto">
            <h2>News</h2>
            <div id="matchesContainer">
            <News></News>
            </div>
            
            </main>
            );
        }
        
        
        export default home;