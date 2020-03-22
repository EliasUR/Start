import React from 'react';
import {Link} from 'react-router-dom';
import HomeIco from '../images/home.png';
import LocationsIco from '../images/locations.png';
import LeaderIco from '../images/leaderboard.png';
import CalendarIco from '../images/calendar.png';

    const nav = () => {
      return(
        <nav className="nav">
            <Link to="/home"  className="img d-flex align-items-center"><img height="80%"  src={HomeIco} alt="Home button"></img></Link>
            <Link to="/schedule"  className="img d-flex align-items-center"> <img height="80%" src={CalendarIco} alt="Calendar button"></img></Link>
            <Link to="/locations" className="img d-flex align-items-center"><img height="80%" src={LocationsIco} alt="Locations button"></img></Link>
            <Link to="/leaderboard"  className="img d-flex align-items-center"> <img height="80%" src={LeaderIco} alt="Leaderboard button"></img></Link>
        </nav>
      );
}


  export default nav;