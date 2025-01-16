import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    let num = -count;
    dispatch(incrementByAmount(num))
  }

  return (
    <div className='container'>
      <button onClick={handleIncrement}> + </button>
      <p>Count : {count}</p>
      <button onClick={handleDecrement}> - </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
