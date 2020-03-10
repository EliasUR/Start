import React from 'react';
// import './Home.scss';

const home = () => {
    const matches = ['MATCH 1', 'MATCH 2', 'MATCH 3'];
    const items = []
    for (const [index, value] of matches.entries()) {
        items.push(<div className="matchDivs" key={index}>{value}</div>)
      }
    return(
    <main>
        <h2>News</h2>
        <div id="matchesContainer">
        {items}
        </div>
        
    </main>
    );
    }


export default home;