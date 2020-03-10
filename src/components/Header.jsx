import React from 'react';
import './Style.scss'
import UserPhoto from '../images/user.png';
import ChatIco from '../images/chat.png';

    const header = (props) => {
      return(
      <header className="header">
          <img src={UserPhoto} alt="user"/>
          <h1>{props.title}</h1>
          <img src={ChatIco} alt="user"/>
      </header>
      );
      }


  export default header;