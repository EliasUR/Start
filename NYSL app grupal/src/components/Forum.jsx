import React , {Fragment} from 'react';
import db from '../firebaseConfig'
import {useForm} from 'react-hook-form'//npm install react-hook-form
import send from '../images/send.png'

const Forum = (props) => {
    const { register, errors, handleSubmit } = useForm()
    //register obliga a que se rellene el campo antes de enviar el form.
    //errors manda el mensaje que da register en caso de no escribir en el input.
    //handlesubmit agarra todos los datos y los envia a la funcion asignada.

    const userdata = {name: props.user.displayName, userId: props.user.uid} //Supuesto usuario

    const indexMatch = props.index

    const forum = db.ref('matches/' + props.index + '/forum')

    const writeUserMsg = (username, msg) => {
        let key = Object.values(props.data[indexMatch].forum).length
        let data = {
            user: username,
            userId: userdata.userId,
            message: msg
        }
        forum.update({ [key]: data });
    }
    const onSubmit = (data, element) => {

        writeUserMsg(userdata.name, data.msg)
        document.querySelector("#message").value="" 
    }

    const deleteMessage = (keyMessage) => {
        db.ref('matches/' + props.index + '/forum/' + keyMessage).update({
            userId: null,
            user: userdata.name,
            message:"mensaje borrado"
        })
    }

    return ( 
        <Fragment>
        <div className="home overflow-auto">
           
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Msj</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(props.data[indexMatch].forum).map((el, index) => 
                        <tr key={index}>
                            <td>{el.user}</td>
                            {el.userId== userdata.userId?
                            (<td>{el.message}<button onClick={() => deleteMessage(index)}>Delete</button></td>)
                            :(<td>{el.message}</td>)}
                        </tr>
                    )}
                </tbody>
            </table>
          </div>
           <div className="message d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="col-10">
                    <input type="text" name="msg" id="message" ref={
                        register({
                            required: {value:true, message: 'no pusiste nada owo'}
                        })
                    }/>
                </label>
                {/* <span style={{color: 'blue'}}>{errors?.msg?.message}</span> */}
                <a className="col-2 p-0" onClick={handleSubmit(onSubmit)}><img src={send} width="13%" /></a>
            </form>
            </div>
      
        </Fragment>
     );
}
 
export default Forum;