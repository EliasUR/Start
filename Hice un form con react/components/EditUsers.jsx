import React from 'react';
import {useForm} from 'react-hook-form';


const EditUsers = (props) => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues:props.cambiarUsuario
    });

    setValue('name', props.cambiarUsuario.name)
    setValue('username', props.cambiarUsuario.username)

    const onSubmit = (data, element) => {
        data.id = props.cambiarUsuario.id
        props.usuarioCambiado(props.cambiarUsuario.id, data)
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={
                register({
                    required: {value:true, message:'campo requerido'}
                })
            }/>
            <span>{errors?.name?.message}</span>
            <label>Username</label>
            <input type="text" name="username" ref={
                register({
                    required: {value:true, message:'campo requerido'}
                })
            }/>
            <span>{errors?.username?.message}</span>
            <button>Edit user</button>
        </form>
     );
}
 
export default EditUsers;