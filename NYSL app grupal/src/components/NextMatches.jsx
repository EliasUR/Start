import React from 'react';
import {Link} from 'react-router-dom';
import chat from '../images/chat.png'

const matches = (props) => {
    const indexMatch = props.index
    const firstTeamId = props.data.matches[indexMatch].team1
    const secondTeamId = props.data.matches[indexMatch].team2
    const changeMatch = () =>{
        props.changeMatch(props.index);
    }
    return (
        <div className="match-container col-10">
            <Link to="/forum" onClick={changeMatch}><img src={chat} width="10%" /></Link>
            <div className="d-flex flex-column">
            <div id="teams" className="d-flex justify-content-around align-items-center">
                <div id="team1" className="d-flex align-items-center justify-content-between col-5">
                    <p>{props.data.teams[firstTeamId].acronym}</p>
                    <img className="float-left ml-2" src={props.data.teams[firstTeamId].logo} alt="team 1 logo"/>
                </div>
                    <p>VS</p>
                <div id="team2" className="d-flex align-items-center justify-content-between col-5">
                    <img className="float-right mr-2" src={props.data.teams[secondTeamId].logo} alt="team 2 logo"/>
                    <p>{props.data.teams[secondTeamId].acronym}</p>
                </div>
            </div>
            <div id="date" className="text-center">
                <p>{props.data.matches[indexMatch].date} {props.data.matches[indexMatch].time}</p>
            </div>
            </div>
            
        </div>
    )
}
 
export default matches;