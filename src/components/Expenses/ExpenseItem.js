import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';

// here we can use the css properties by importing the file:
import './ExpenseItem.css';
import Card from '../UI/Card';

// this is the function of the component which has all the properties and code of html and its structure:
const ExpenseItem = (props) => {
  //use state generallly returns an array of two values, first is the initial value and the second is a function that is used to give a new value to the given variable
  // const [title, setTitle] = useState(props.title);

  // here we can use the functionality of the JS as well.
  //these are not in use right now coz data is delivered from app.js file
  // const ExpenseDate = new Date(2022, 2, 28);
  // const ExpenseTitle = 'Car Insurance';
  // const ExpenseAmount = 200.50;

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  //here this return section depicts the use of html and defining the structure of the component
  return (
    // here we can use the {} which can contain the JS code and helps to integrate JS in the return section
    //alsong with the html code.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
