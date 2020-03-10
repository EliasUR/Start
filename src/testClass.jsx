import React, {Component} from 'react'
import DbContext from './DbContext'

class test extends Component {
    static contextType = DbContext;
    render() { 
        console.log(this.context)
        return ( 'testeando la db' );
    }
}
 
export default test;