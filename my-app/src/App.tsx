import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './slice/counterSlice';
import { RootState, AppDispatch } from './store/store';
import './style/counter.css';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const [inputValue, setInputValue] = useState<number>(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>
          Incrementt 
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={() => dispatch(incrementByAmount(inputValue))}>
            Increment by
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
