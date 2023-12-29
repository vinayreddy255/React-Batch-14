import { useState, useMemo } from "react";
import { EvenNumbers } from "./Common";
function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);
  const evnData = useMemo(() => {
    EvenNumbers();
  }, []);
  //   console.log(evnData);
  return (
    <div>
      <h2>UseMemoHook</h2>
      <h3>Counter:{count}</h3>
      <h3>age:{age}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setAge(age + 1)}>AgeClick</button>
    </div>
  );
}

export default UseMemoHook;
