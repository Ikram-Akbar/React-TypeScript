import { useState } from "react";


function Counter() {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  const handleStepsCount = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const value  = Number(e.target.value)
    if(!isNaN(value) && value >= 1){
        setStep(value)
    }
  }

  return ( 
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((pre)=> pre + step)}>Increment</button>
      <button onClick={() => setCount((pre)=> pre - step)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={handleStepsCount}
          />
        </label>
      </div>
    </div>
  );
}

export default Counter;
