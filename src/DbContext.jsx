import React, { createContext, Component} from 'react'
import {useDatabase} from 'reactfire'
export const dbContext = createContext();

class dbContextProvider extends Component {
    state = { 
        data: undefined
     }
     componentDidMount(){
        useDatabase().ref().once("value").then(snapshot => {
            this.setState({data: snapshot.val() })
          })
        }
    render() { 
        return (
            <dbContext.Provider value={{...this.state}}>
                {this.props.children}
            </dbContext.Provider>
         );
    }
}
 
export default dbContextProvider;