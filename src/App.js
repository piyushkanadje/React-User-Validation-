import React, {useState} from 'react';
import AddUser from './components/USERS/AddUser';
import UserList from './components/USERS/UsersList';

function App() {


  const [usersList, setUsersList] = useState([]);
  const addUserHandler =(uName , uAge) => {
    
    setUsersList((prevUserList)=> {
      console.log(uName,uAge);
      return [...prevUserList, {name: uName, age: uAge , id : Math.round(Math.random()).toString()}];
    });
  };
  return (
    <div>
       <AddUser onAdd={addUserHandler} />
       <UserList users={usersList} />
    </div>
  );
}

export default App;
