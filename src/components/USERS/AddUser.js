import React , {useState, Fragment, useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser =  (props) => {
   const enteredUserName = useRef();
   const enteredUserAge = useRef();

    const [enteredName , setEnteredName] = useState('');
    const [enteredAge , setEnteredAge] = useState('');
    const [error , setError] = useState('');



     const nameChangeHandler = (event) =>{
         setEnteredName(event.target.value);
     };
     const ageChangeHandler = (event) =>{

        setEnteredAge(event.target.value);
     };



const errorHandler = () =>{
  setError(null);
};


    const addUserHandler =(event) => {
      
        event.preventDefault();
  if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
     setError(
    {
    title: "Invalid Input",
    message: "Please enter a name and age (non-empty Value)"
     }
     );
    return;
  }

             if(+enteredAge <1){
                setError({
                    title: "Invalid Age",
                    message: "Age must be greater than 0"
                });
                     return;
                }
        const data ={
            "name": enteredName,
            "age": enteredAge

        };
       console.log("from Add User", data);
        props.onAdd(enteredName,enteredAge);

        setEnteredAge('');
        setEnteredName('');

    
    };

    return(

<Fragment>

{error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} / >)}




<Card className={classes.input}>
<form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input type="text" value={enteredName} onChange={nameChangeHandler} id="username"  />
    <label htmlFor="age">Add Age</label>
    <input type="number" value={enteredAge} onChange={ageChangeHandler}  id="age" />
    <Button type="submit">Add user </Button>
</form>
{/* <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input type="text"  id="username" ref={enteredUserName} />
    <label htmlFor="age">Add Age</label>
    <input type="number "  id="age" ref={enteredUserAge} />
    <Button type="submit">Add user </Button>
</form> */}

</Card>


</Fragment>
    );

};


export default  AddUser;

