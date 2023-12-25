import { useEffect, useRef, useContext } from "react";
import { MyContext2 } from "./Context2";
function RefHook() {
  const inputRef = useRef();
  const divRef = useRef();
  const froutes = useContext(MyContext2);
  console.log(froutes);

  const getInputData = () => {
    divRef.current.innerHTML = "<h1>Hello</h1>";
    console.log(inputRef.current.value);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h2>RefHook</h2>
      <div ref={divRef}></div>
      <input ref={inputRef} />
      <button onClick={getInputData}>getInputData</button>
    </div>
  );
}
export default RefHook;
