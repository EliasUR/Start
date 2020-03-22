import React from 'react'
import {useForm} from 'react-hook-form';

const AddUsers = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, element) => {
        props.addUsers(data)

        element.target.reset()
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
            <button>Add new user</button>
        </form>
     );
}
 
export default AddUsers;