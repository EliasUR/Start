import React, {Fragment} from 'react';


const iframe = (props) => {
    let index =  props.index
        return(
            <div id="modals">
                <div  className="d-flex justify-content-center align-items-center h-100">
                    <div className="loginbutton col-10">
                        <h2>{props.data[index].name}</h2>
                        <iframe src={props.data[index].url} frameBorder="" className="col-12"></iframe>
                    </div>
                </div>
            </div>
            );
        }
        
        export default iframe;
