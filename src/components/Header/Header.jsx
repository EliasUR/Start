import React from 'react';
import './Header.scss';
import {useRoutes, A} from 'hookrouter';

const header = (props) => {
    return(
    <nav className="main">
        <h1>{props.title}</h1>
        <A href="/home"><button>Go to Home</button></A>
    </nav>
    );
}


  export default header;