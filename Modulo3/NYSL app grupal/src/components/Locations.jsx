import React from 'react';
import Map from './Map.jsx'


const home = (props) => {
  
        return(
            <main className="home overflow-auto d-flex flex-column align-items-center">
                <h2>Locations</h2>
                {Object.values(props.data.locations).map((el, index) =>

                        <Map data={props.data.locations} index={index} iframe={props.iframe}/>
                        
                    )}
            </main>
            );
        }
        
        
        export default home;