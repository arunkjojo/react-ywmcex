import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase_count, decrease_count } from '../Redux/count/countSlice';
export default function Counter() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch(
      increase_count({
        count: count + 1,
      })
    );
  };
  const decreaseCount = () => {
    dispatch(
      decrease_count({
        count: count - 1,
      })
    );
  };
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>Count is : {count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
