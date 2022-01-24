import React from 'react';
import randomColor from 'randomcolor';
import { useSelector, useDispatch } from 'react-redux';
import { change_color } from '../Redux/color/colorSlice';
export default function Aside() {
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();
  const changeColor = () => {
    dispatch(
      change_color({
        color: randomColor(),
      })
    );
  };
  return (
    <div className="aside">
      <h2 style={{ color }}> Aside</h2>
      <button onChange={changeColor}>Change Color</button>
    </div>
  );
}
