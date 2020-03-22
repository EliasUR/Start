import React from 'react'
import FlipCard from 'react-flipcard-2'; // Metodo que da vuelta las cartas. Se instala con "npm install --save react-flipcard"
const Carta = (props) => {
    return ( 
        <div className="carta">
            <FlipCard>
                <div className="dorso">
                    <h2>?</h2>
                </div>
                <div>
                    <img className="cara" src={props.carta.url} alt={props.carta.name}></img>
                </div>
            </FlipCard>
        </div>
     );
}
 
export default Carta;