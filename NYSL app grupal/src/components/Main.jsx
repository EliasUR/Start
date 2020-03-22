import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import db from '../firebaseConfig'
import Home from './Home'
import Schedule from './Schedule'
import Locations from './Locations'
import Forum from './Forum'
import Leaderboard from './Leaderboard'

class main extends Component {
    
    constructor(){
        super()
        this.state = { 
            data:'',
            matchNumber: null,
            flag: false
         }
    }
    componentWillMount(){
        db.ref().on('value', snap => {
            this.setState({
                data: snap.val(),
                flag: true,
                
            })
        })
    }
    changeMatchNumber = (number) => {
        this.setState({
            matchNumber: number
        })
    }

    render(){
        return this.state.flag ? (
            <Switch>
                <Route path="/home">
                    <Home data={this.state.data}/>
                </Route>
                <Route path="/schedule">
                    <Schedule data={this.state.data} changeMatch={this.changeMatchNumber}/>
                </Route>
                <Route path="/locations">
                    <Locations data={this.state.data}/>
                </Route>
                <Route path="/leaderboard">
                    <Leaderboard data={this.state.data.teams}/>
                </Route>
                <Route path="/forum">
                    <Forum data={this.state.data.matches} index={this.state.matchNumber} user={this.props.user} />
                </Route>
            </Switch>
            )
            : <h1>Loading...</h1>
    }
}
export default main;