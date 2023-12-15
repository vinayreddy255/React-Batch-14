import Header from "./ClassComponents/Header";
import Continer from "./ClassComponents/Continer";
import EventsAndState from "./ClassComponents/EventsAndState";
import Parent from "./ClassComponents/Parent";
import CondationalRender from "./ClassComponents/CondationalRender";
import Rectangle from "./ClassComponents/Rectangle";
function App() {
  return (
    <div className="my-app">
      {/* <Header ></Header> */}
      <Header />
      {/* <Continer /> */}
      {/* <EventsAndState /> */}
      {/* <Parent /> */}
      <CondationalRender />
      <Rectangle />
    </div>
  );
}

export default App;
