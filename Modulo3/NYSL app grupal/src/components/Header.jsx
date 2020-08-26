import React from 'react';
import {Link} from 'react-router-dom';
import './Style.scss'
import UserPhoto from '../images/user.png';
import ChatIco from '../images/chat.png';

    const header = (props) => {
      return(
      <header className="header">
          <img className="userphoto" src={props.user.photoURL} alt="user"/>
          <div><button type="button" className="btn btn-danger mr-2" onClick={props.signout}>Logout</button></div>
            {/* <Link to="/forum"><img src={ChatIco} alt="user"/></Link> */}
      </header>
      );
      }


  export default header;