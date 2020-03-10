import React from 'react';
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx';
// import Home from './components/Home.jsx';
import './App.scss';
// //GABI
// import {useRoutes} from 'hookrouter';
// import Routes from './Routes'
import {useDatabase} from 'reactfire'
import Forum from './components/Forum'

function App() {

  
  let data;
  useDatabase().ref().once("value").then(snapshot => {
    data = snapshot.val();
    console.log(data);
  })
  // const data = useDatabaseObjectData();

  // const routeResult = useRoutes(Routes)
  const title = "Upcoming Events"
  return (
    <div className="App">
        <Header title={title}></Header>
        <Forum/>
        {/* {console.log(data)} */}
        {/* {routeResult} */}
        <Nav></Nav>
    </div>
  );
}

export default App;