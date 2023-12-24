import Header from "./ClassComponents/Header";
import Continer from "./ClassComponents/Continer";
import EventsAndState from "./ClassComponents/EventsAndState";
import Parent from "./ClassComponents/Parent";
import CondationalRender from "./ClassComponents/CondationalRender";
import Rectangle from "./ClassComponents/Rectangle";
import CondationalStyle from "./ClassComponents/CondationalStyle";
import FromHandling from "./ClassComponents/FromHandling";
import LifeCyclesMethods from "./ClassComponents/LifeCyclesMethods";
import PureComponentExmple from "./ClassComponents/PureComponentExmple";
import RefComponet from "./ClassComponents/RefComponet";
import BtnCounter from "./ClassComponents/BtnCounter";
import HoverCounterCompoent from "./ClassComponents/HoverCounterCompoent";
import ProtalRootComponet from "./ClassComponents/ProtalRootComponet";
import Counter from "./FunctionlComponet/Counter";
import UseEffectHook from "./FunctionlComponet/UseEffectHook";
import RefHook from "./FunctionlComponet/RefHook";
import { MyContext } from "./FunctionlComponet/Context1";
import { MyContext2 } from "./FunctionlComponet/Context2";
function App() {
  const empObj = {
    name: "Kiran",
    age: 25,
    city: "Bangalore",
    phone: 9110237846,
  };
  return (
    <>
      <MyContext.Provider value={empObj}>
        <MyContext2.Provider value={["Apple", "Orange", "Mango"]}>
          <div className="my-app">
            {/* <Header ></Header> */}
            <Header />
            {/* <Continer /> */}
            {/* <EventsAndState /> */}
            {/* <Parent /> */}
            {/* <CondationalRender /> */}
            {/* <Rectangle /> */}

            {/* 19-12-2023 */}
            {/* <CondationalStyle /> */}
            {/* <FromHandling /> */}

            {/* 20-12-2023 */}

            {/* <LifeCyclesMethods />
      <PureComponentExmple />
      <RefComponet /> */}

            {/* 21-12-2023 */}
            {/* <BtnCounter />
        <HoverCounterCompoent /> */}
            {/* <Counter /> */}
          </div>
          {/* <ProtalRootComponet /> */}

          {/* 24-122023 */}
          <UseEffectHook address={{ pincode: "2433", stree: "near temaple" }} />
          <RefHook />
        </MyContext2.Provider>
      </MyContext.Provider>
    </>
  );
}

export default App;
