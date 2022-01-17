import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index';


const App = () => {
  const myState = useSelector((state) => state.changeNum);
  const dispatch = useDispatch();


  return (
    <>
      <div className="container">
        <h1>Increment Decrement</h1>

        <button className="btn btn-danger" onClick={() => dispatch(decrement())}>-</button>
        <input type="number" value={myState} />
        <button className="btn btn-success" onClick={() => dispatch(increment())}>+</button>
      </div >
    </>
  )
}

export default App;
