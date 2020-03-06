import React from 'react';
import './Header.scss';

    const header = (props) => {
      return(
      <nav className="main">
          <img src="user.png"/>
          <h1>{props.title}</h1>
          <p>X</p>
      </nav>
      );
      }


  export default header;