import React from 'react';
import UserPhoto from '../images/user.png';

const news = () => {
    return (
        <div className="match-container col-10 bg-light">
            <div id="teams" className="d-flex justify-content-around align-items-center">
                <div id="team1" className="d-flex align-items-center justify-content-between">
                    <p>XXX</p>
                    <img className="float-left ml-2" src={UserPhoto} alt="team 1 logo"/>
                </div>
                    <p>VS</p>
                <div id="team2" className="d-flex align-items-center justify-content-between">
                    <img className="float-right mr-2" src={UserPhoto} alt="team 2 logo"/>
                    <p>XXX</p>
                </div>
            </div>
            <div id="date" className="text-center">
                <p>00 / 00 / 0000 - 00:00</p>
            </div>

        </div>
    )
}
 
export default news;