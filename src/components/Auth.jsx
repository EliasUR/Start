import React, {useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';

export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = useFirebaseApp();
    const user = useUser();
    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }
    const logout = async () => {
        await firebase.auth().signOut();
    }
    return(
        <div>
            {
                !user &&
                <>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={ (event) => setEmail(event.target.value) }></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={ (event) => setPassword(event.target.value) }></input>
                    <button onClick={login}>Login</button>
                    <button onClick={submit}>Create</button>
                </>
            }
            {
                user && <button onClick={logout}>Log out</button>
            }
        </div>
    )
}
