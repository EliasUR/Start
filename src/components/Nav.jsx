import React from 'react';
import HomeIco from '../images/home.png';
import LocationsIco from '../images/locations.png';
import LeaderIco from '../images/leaderboard.png';
import CalendarIco from '../images/calendar.png';
import {A} from 'hookrouter';

    const nav = () => {
      return(
      <nav className="nav">
          <A  className="img"  href="/home"><img height="80%"  src={HomeIco} alt="Home button"></img></A>
          <A  className="img" href="/schedule"> <img height="80%" src={CalendarIco} alt="Calendar button"></img></A>
          <A className="img"  href="/locations"><img height="80%" src={LocationsIco} alt="Locations button"></img></A>
          <A  className="img" href="/"> <img height="80%" src={LeaderIco} alt="Leaderboard button"></img></A>
      </nav>
      );
      }


  export default nav;