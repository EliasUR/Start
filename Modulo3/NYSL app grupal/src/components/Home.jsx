import React from 'react';
import News from './News.jsx';

const home = (props) => {
        return(
            <main className="home overflow-auto d-flex justify-content-center flex-wrap">
            <h2 className="col-10">News</h2>
            <div id="matchesContainer">
            <News data={props.data.news}></News>
            </div>
            
            </main>
            );
        }
        
        
        export default home;