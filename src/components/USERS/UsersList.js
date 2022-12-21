import React from "react";
import classes  from "./UsersList.module.css";
import Card from "../UI/Card";



const UserList = (props) => {



    const deleteHandler =(props)=>{
        console.log("deleteHandler");
        console.log(props.id);
        props.onDeleteItem(props.id);
    };

 
  return (
    <Card className={classes.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id} onClick={deleteHandler}>
         
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>

  );


};


export default UserList;



// const UsersList = (props) => {
//   return (
  
//     </Card>
//   );
// };

// export default UsersList;