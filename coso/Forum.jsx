import React from 'react';
import {useForm} from 'react-hook-form'

const Forum = (props) => {

    const { register, errors, handleSubmit } = useForm()

    const onSubmit = (data, element) => {
        props.addMessage(data)

        element.target.reset()
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label >
                    Msj:
                    <input type="text" name="mesagge" ref={
                        register({
                            required: {value:true, message:'No escribiste nada u.u'}
                        })
                    }/>
                </label>
                <span>{errors?.message?.message}</span>
                <button>Send</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Msj</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr key={props.user.id}>
                        <td>{props.user.name}</td>
                        <td>{props.user.message}</td>
                    </tr>
                </tbody> */}
            </table>
        </div>
     );
}
 
export default Forum;