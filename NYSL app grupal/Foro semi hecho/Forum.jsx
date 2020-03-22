import React, {useState} from 'react';
import {useForm} from 'react-hook-form'//npm install react-hook-form
import {v4 as uuidv4} from 'uuid';//npm install uuid

const Forum = (props) => {

    const { register, errors, handleSubmit } = useForm()
    //register obliga a que se rellene el campo antes de enviar el form.
    //errors manda el mensaje que da register en caso de no escribir en el input.
    //handlesubmit agarra todos los datos y los envia a la funcion asignada.

    const userdata = { id: uuidv4(), name: 'Yo'} //Supuesto usuario

    const [messages, setMessage] = useState([])// array para almacenar mensajes
    console.log(messages)
    const addMessage = (msg) => {
        setMessage([...messages, {id: uuidv4(), user:userdata.name, message:msg}])
        //añade un mensaje con el usuario y un id propio a "messages"
    }
    

    const onSubmit = (data, element) => {
        addMessage(data.msg)

        element.target.reset()
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label >
                    Msj:
                    <input type="text" name="msg" ref={
                        register({
                            required: {value:true, message:'No escribiste nada u.u'}
                        })
                    }/>
                </label>
                <span style={{color: 'blue'}}>{errors?.msg?.message}</span>
                <button>Send</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Msj</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.length > 0?(
                        messages.map(msg => 
                            <tr key={msg.id}>
                                <td>{msg.user}</td>
                                <td>{msg.message}</td>
                            </tr>))
                            :(
                                <tr>
                                    <td>No messages</td>
                                </tr>
                            )}
                </tbody>
                    
            </table>
        </div>
     );
}
 
export default Forum;