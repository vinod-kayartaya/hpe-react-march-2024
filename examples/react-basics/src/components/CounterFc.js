import React, { useCallback, useState } from 'react';

const CounterFc = () => {
  console.log('CounterFc() called at', Date.now());

  const [count, setCount] = useState(() => 0); // first time, this will create a state with 0 as the value
  // and subsequent calls (due to setCount() calls) will only fetch the current state (which is modified by setCount)

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <>
      <div className='container'>
        <h1>Counter app (using functional components)</h1>
        <hr />
        <h3>
          <button onClick={decrement} className='btn btn-outline-primary mx-2'>
            Decrement
          </button>
          Count is {count}
          <button onClick={increment} className='btn btn-outline-primary mx-2'>
            Increment
          </button>
        </h3>
      </div>
    </>
  );
};

export default CounterFc;
