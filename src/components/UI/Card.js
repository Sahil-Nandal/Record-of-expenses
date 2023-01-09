import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  //here we got all the class names that are being used in the formation of container in other file.

  return <div className={classes}>{props.children}</div>;
  //here the "children" prop is a default prop that is passed to every function by default and it just helps to make our custom components behave as the wrapper div in other function where jsx is used.
};

export default Card;
