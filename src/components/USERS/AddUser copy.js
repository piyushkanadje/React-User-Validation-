import React , {useState, Fragment, useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser =  (props) => {
   const enteredUserName = useRef();
   const enteredUserAge = useRef();

   console.log(enteredUserName.current.value);
    const [error , setError] = useState('');
const errorHandler = () =>{
  setError(null);
};


    const addUserHandler =(event) => {
      
        event.preventDefault();
  if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
     setError(
    {
    title: "Invalid Input",
    message: "Please enter a name and age (non-empty Value)"
     }
     );
    return;
  }

             if(+enteredUserAge <1){
                setError({
                    title: "Invalid Age",
                    message: "Age must be greater than 0"
                });
                     return;
                }
        // const data ={
        //     "name": enteredName,
        //     "age": enteredAge

        // };
       console.log("from Add User", data);
        props.onAdd(enteredUserName,enteredUserAge);

     enteredUserAge.current.value = " ";
     enteredUserName.current.value = " ";

    
    };

    return(

<Fragment>

{error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} / >)}




<Card className={classes.input}>

<form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input type="text"  id="username" ref={enteredUserName} />
    <label htmlFor="age">Add Age</label>
    <input type="number "  id="age" ref={enteredUserAge} />
    <Button type="submit">Add user </Button>
</form>

</Card>


</Fragment>
    );

};


export default  AddUserD;

