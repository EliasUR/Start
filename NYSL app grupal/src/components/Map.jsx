import React , {Fragment} from 'react';


const home = (props) => {
    let place = ""
    const mapsinline = (url,name) => {
        document.querySelector("#modals").style.display = "inline";
        document.querySelector("#iframe").src = url;
        document.querySelector("h3").innerHTML = name;
    }
    const mapsnone = () => {
        document.querySelector("#modals").style.display = "none";
     
    }
        return(
            <Fragment>
                  <div className="matchDivs p-1" onClick={() => mapsinline(props.data[props.index].url , props.data[props.index].name)}>
              <img src={props.data[props.index].img}
              width="100%"
              alt={props.data[props.index].address}
              />
              <p>{props.data[props.index].name}</p>
            
            </div>

                  <div id="modals">
                <div  className="d-flex justify-content-center align-items-center h-100">
                    <div className="loginbutton col-10">
                        <h3></h3>
                        <iframe id="iframe" src="" frameBorder="0" className="col-12"></iframe>
                        <button onClick={mapsnone}>Close</button>
                    </div>
                </div>
            </div>
            </Fragment>
          
            );
        }
        
        
        export default home;
