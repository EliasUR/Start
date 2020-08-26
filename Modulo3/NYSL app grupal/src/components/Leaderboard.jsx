// import React from 'react';
// import Position from './Position.jsx' 

// const leaderboard = () => {
//         return(
//             <main className="home overflow-auto">
//                 <h2 className="col-10">Leaderboard</h2>
//                 <table className="table table-dark">
//                     <thead>
//                         <tr>
//                             <th scope="col">POS</th>
//                             <th scope="col center" colSpan="2" >TEAM</th>
//                             <th scope="col">PTS</th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         <Position />
//                         <Position />
//                         <Position />
//                         <Position />
//                         <Position />
//                         <Position />
//                         <Position />
//                         <Position />
                        
//                     </tbody>
//                 </table>
            
            
//             </main>
//             );
//         }
        
        
//         export default leaderboard;
import React from 'react';
const leaderboard = (props) => {
        return(
            <main className="home overflow-auto">
                <h2 className="col-12 text-center">Leaderboard</h2>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">POS</th>
                            <th scope="col center" colSpan="2" >TEAM</th>
                            <th scope="col">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(props.data).sort(function(a,b){
                            return parseInt(b.points) - parseInt(a.points)
                        }).map((el, index) =>
                            <tr>
                            <td scope="col">{`Rank: ${index+1}`}</td>
                            <td scope="col">{el.acronym}</td>
                            <td scope="col"><div><img src={el.logo} width="35px"/></div></td>
                            <td scope="col">{el.points}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </main>
            );
        }
        
        
        export default leaderboard;