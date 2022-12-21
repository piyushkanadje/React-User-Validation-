import React, {useState, useRef} from 'react';
import AddUser from './components/USERS/AddUser';
import UserList from './components/USERS/UsersList';

function App() {

  
  const [usersList, setUsersList] = useState([]);
  const addUserHandler =(uName , uAge) => {
    
    setUsersList((prevUserList)=> {
      // console.log(uName,uAge);
      // return [...prevUserList, {name: uName, age: uAge , id : Math.round(Math.random()).toString()}];
      const updatedList = [...prevUserList];
      updatedList.unshift({ name: uName, age: uAge , id : Math.round(Math.random()*1000).toString() });
      console.log(updatedList);      
      return updatedList;
    });
  };


   const deleteItemHandler =(id)=>{
    console.log("deleteItemHandler" ,id);
    setUsersList(prevUserList => {
      const updatedList = prevUserList.filter(user => user.id !== id);
      return updatedList;
    });
   };

  let content = (
    <p style={{ textAlign: 'center',  color:'white ' }}>No goals found. Maybe add one?</p>
  );

  if (usersList.length > 0) {
    content = (
      <UserList users={usersList} onDeleteItem={deleteItemHandler}   />
    );
  }
  return (
    <div>
       <AddUser onAdd={addUserHandler} />
      
      <section>

        {content}
      </section>

          
    </div>
  );
}

export default App;
