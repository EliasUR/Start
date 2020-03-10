import React, {useState} from 'react';
// import {v4 as uuidv4} from 'uuid';
import Forum from './Forum'


function App() {

  // const userdata = { id: uuidv4(), name: 'Ben', message: '' }
  
  const [message, setMessage] = useState()

  
// añadir usuario
  const addMessage = (data) => {
    setMessage(...message, data)
  }
  console.log(message)

  return (
    <div>
      <div className="container">
        <Forum addMessage={addMessage} user={message}/>
      </div>
    </div>
  );
}

export default App;
