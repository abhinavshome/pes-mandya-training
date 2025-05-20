import { useState } from "react";
import './OnOffSwitch.css';

const OnOffSwitch = () => {
  const [switchState, setSwitchState] = useState(false);

  const switchOn = () => {
    setSwitchState(true);
  };

  const switchOff = () => {
    setSwitchState(false);
  };

  return (
    <div>
      <div className={`switch ${switchState ? 'on' : 'off'}`}></div>
      <div>
        <button onClick={switchOn}>ON</button>
        <button onClick={switchOff}>OFF</button>
      </div>
    </div>
  );
};

export default OnOffSwitch;
