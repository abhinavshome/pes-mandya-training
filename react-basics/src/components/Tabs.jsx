import { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const selectTab = (tabNum) => {
    setCurrentTab(tabNum);
  };

  return (
    <div>
      <div className="tabs">
        {[1, 2, 3].map((n) => (
          <span
            className={n == currentTab ? "selected" : ""}
            onClick={() => selectTab(n)}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
