import Counter from "./components/Counter";
import FruitsILove from "./components/FruitsILove";
import Greeting from "./components/Greeting";
import OnOffSwitch from "./components/OnOffSwitch";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div>
      <h2>React Course</h2>
      <Tabs />
      <hr/>
      <OnOffSwitch />
      <hr/>
      <Counter />
      <hr/>
      <Greeting />
      <hr/>
      <FruitsILove />
    </div>
  );
};

export default App;