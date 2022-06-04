import React, { useState } from "react";
import { useInput } from "../utils/hooks/useInput";

const SimpleInput = (props) => {

  const { 
    value: enteredName, 
    isValid: enteredNameIsValid, 
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangeHandler, 
    inputBlurHandler: nameBlurChangeHandler 
  }  = useInput((value) => value.trim() !== '');
  useInput((value) => value.includes('@'))

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
    
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurChangeHandler}
        />
        {nameInputHasError && <p>Name must not be empty</p>}
        <label htmlFor="name">Your email</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
