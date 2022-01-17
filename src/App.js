import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index';


const App = () => {
  const myState = useSelector((state) => state.changeNum);

  // passing useDispatch to trigger my action
  const dispatch = useDispatch();


  return (
    <>
      <div className="container">
        <h1>Increment Decrement</h1>

        <button className="btn btn-danger" onClick={() => dispatch(decrement(3))}>-</button>
        <input type="number" value={myState} />
        <button className="btn btn-success" onClick={() => dispatch(increment(5))}>+</button>
      </div >
    </>
  )
}

export default App;
