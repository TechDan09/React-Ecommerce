import React, {useRef, useState} from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const Mealitemform = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = Number(amountInputRef.current.value);
    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);

    amountInputRef.current.value = '1';
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
      <button>Add To Cart</button>
    </form>
  );
};

export default Mealitemform;
