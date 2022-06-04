import React, { useState } from "react";

 const BasicForm = (props) => {

 const [enteredName, setEnteredName] = useState('');
 const [isValid, setIsValid] = useState(false);
 const [enteredLastname, setEnteredLastname] = useState('');
 const [lastIsValid, setLastIsValid] = useState(false);
 const [enteredEmail, setEnteredEmail] = useState('');
 const [IsValidMail, setIsValidEmail] = useState(false);
 const [formIsValid, setFormIsValid] = useState(false);
 
 const nameChangeHandler = (event) => {
    setEnteredName(event.target.value)
   if(enteredName.trim() === ''){
    setIsValid(true);
    return
  }
  
 }

 const lastnameChangeHandler = (event) => {
   setEnteredLastname(event.target.value)
  if(enteredLastname.trim() === ''){
     setLastIsValid(true)
     return
   }
}

const emailChangeHandler = (event) => {
    setEnteredEmail( event.target.value )
    if(enteredEmail.includes('@')){
      setIsValidEmail(true)
      return
    }
    
}

 const formSubmissionHandler = (event) => {
   event.preventDefault()
 };
 
 const nameInputClasses = isValid ? 'form-control invalid' : 'form-control';
 const lastInputClasses = lastIsValid ? 'form-control invalid' : 'form-control';
 const emailInputClasses = IsValidMail ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
      <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameChangeHandler}/>
          {isValid && <p>Name must not be empty</p>}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastnameChangeHandler} />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
