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
function App() {
  return (
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
      <LifeCyclesMethods />
      <PureComponentExmple />
      <RefComponet />
    </div>
  );
}

export default App;
