import React, {Fragment} from 'react';
import Gextox from '../logos/gextox.png'

const leaderboard = () => {
        return(
            <Fragment>
                <tr>
                    <td scope="col">1</td>
                    <td scope="col">GTX</td>
                    <td scope="col"><div><img src={Gextox} width="35px"/></div></td>
                    <td scope="col">7</td>
                </tr>
            </Fragment>
            );
        }
        
        
        export default leaderboard;