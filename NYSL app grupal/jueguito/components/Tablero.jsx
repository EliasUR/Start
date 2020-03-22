import React from 'react';
import Carta from './Carta';
import Eze from './images/eze.jpg';
import Gabi from './images/gabi.jpg';
import Gian from './images/gian.jpg';
import Ro from './images/ro.jpg';
import Yo from './images/yo.jpg';
import shuffle from 'lodash.shuffle'; //Metodo que mezcla. Se instala como "npm install --save lodash.shuffle"

const Tablero = () => {

    const cartas = [
        {
            name:"Eze",
            url:Eze,
            fueAdivinado:false,
            estaSiendoComparada:false,
        },
        {
            name:"Gabi",
            url:Gabi,
            fueAdivinado:false,
            estaSiendoComparada:false,
        },
        {
            name:"Gian",
            url:Gian,
            fueAdivinado:false,
            estaSiendoComparada:false,
        },
        {
            name:"Rocío",
            url:Ro,
            fueAdivinado:false,
            estaSiendoComparada:false,
        },
        {
            name:"Elías",
            url:Yo,
            fueAdivinado:false,
            estaSiendoComparada:false,
        },
    ]

    for(var i=0; cartas.length<10; i++){
        cartas.push({...cartas[i]})
    }
    
    // const seleccionarCarta = (carta) => {
    //     carta.estaSiendoComparada = true
    // }

    return (
        <div className="tablero">
            {shuffle(cartas.map((carta) => <Carta carta={carta}/>))}
        </div>
        );
}
 
export default Tablero;