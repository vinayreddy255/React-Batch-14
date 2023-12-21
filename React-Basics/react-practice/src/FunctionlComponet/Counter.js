import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("show");
  const list = ["Mi", "Nokia", "Apple"];
  const incremntCounter = () => {
    setCount(count + 1);
  };
  const showHide = () => {
    if (text == "show") {
      setText("hide");
    } else {
      setText("show");
    }
  };
  return (
    <div>
      <h1>Functional Counter</h1>
      <h2>Count:{count}</h2>
      <button onClick={incremntCounter}>Incrment</button>
      <button onClick={showHide}>{text}</button>
      {list.map((e) => (
        <li>{e}</li>
      ))}
    </div>
  );
}
export default Counter;
