import { useEffect, useState, useContext } from "react";
import { MyContext } from "./Context1";
import { MyContext2 } from "./Context2";
function UseEffectHook(props) {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(4);
  const contextData = useContext(MyContext);
  const froutes = useContext(MyContext2);

  console.log("useEffect hook calling context2>>>>", froutes);
  console.log("props...", props);
  useEffect(() => {
    console.log(" Component did mount...");
    return () => {
      // un mounting
    };
  }, []);

  useEffect(() => {
    console.log("Component did update...");
  }, [age]);

  const incremntCounter = () => {
    setCount(count + 1);
  };
  const ageIncremnt = () => {
    setAge(age + 2);
  };
  //   useEffect(function () {}, []);
  return (
    <div>
      <div>Name:{contextData.name}</div>
      <div>Age:{contextData.age}</div>
      <div>City:{contextData.city}</div>
      <div>Phone:{contextData.phone}</div>
      <h2>UseEffectHook</h2>
      <h2>Counter: {count}</h2>
      <h3>Age:{age}</h3>
      <button onClick={incremntCounter}>IncrmentCounter</button>
      <button onClick={ageIncremnt}>AgeIncremnt</button>
    </div>
  );
}
export default UseEffectHook;
