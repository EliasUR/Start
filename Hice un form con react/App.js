import React, {useState} from 'react';
import AddUsers from './components/AddUsers';
import UsersTable from './components/UsersTable';
import EditUsers from './components/EditUsers';
import {v4 as uuidv4} from 'uuid';


function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
  const [users, setUsers] = useState(usersData)


// añadir usuario
  const addUsers = (user) => {
    user.id = uuidv4()
    setUsers([...users, user])
  }


// borrar usuario
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }


// editar usuario
  const [editUsersOn, setEditUsersOn] = useState (false)

  const formVacio = { id: null, name: '', username: '' }

  const [cambiarUsuario, setCambiarUsuario] = useState(formVacio)

  const editUser = (user) => {
    setEditUsersOn(true)
    setCambiarUsuario({id:user.id, name:user.name, username:user.username})
  }

  const usuarioCambiado = (id, usuarioCambiado) => {
    setEditUsersOn(false)

    setUsers(users.map(user => id === user.id? usuarioCambiado : user))
  }

  return (
    <div>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          {editUsersOn?(
            <div className="flex-large">
            <h2>Edit user</h2>
            <EditUsers cambiarUsuario={cambiarUsuario} usuarioCambiado={usuarioCambiado}/>
          </div>
          ):(
          <div className="flex-large">
            <h2>Add user</h2>
            <AddUsers addUsers={addUsers}/>
          </div>
          )}
          <div className="flex-large">
            <h2>View users</h2>
            <UsersTable users= {users} deleteUser={deleteUser} editUser={editUser}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
