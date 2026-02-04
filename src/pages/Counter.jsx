import React, { useState, useEffect } from "react";
import Menu from "../Components/Menu";
import SideBar from "../Components/SideBar";

function Counter() {
  const [count, setCount] = useState(0);
  const [islightOn, setIsLightOn] = useState(false);
  const [isdoorOpen, setIsDoorOpen] = useState(false);
  const updateCount = () => {
    setCount(count + 1);
  };
  const lightSwitch = () => {
    setIsLightOn(!islightOn);
  };
  const updateDoor = () => {
    setIsDoorOpen(!isdoorOpen);
  };

  useEffect(() => {
    console.log("counter is updated", count);
    4;
    document.title = `counter ${count}`;
    // Return clalback function ==> used to clean up sideeffects (optional)
    return () => {
      document.title = 'another title'
    }
  }, []);

  useEffect(() => {
    //side effects tp perform === light on / off
    if (isdoorOpen) {
      setIsLightOn(true);
    } else if (isdoorOpen == false) {
      setIsLightOn(false);
    }
  }, [isdoorOpen]);

  return (
    <div className="flex gap-x-5">
      <SideBar />
      <div className="p-10">
        <button
          className="px-4 py-2 rounded-md h-fit bg-blue-500 text-white"
          onClick={updateCount}
        >
          Increment
        </button>
        <p className="text-xl font-bold"> counter : {count}</p>
        <div></div>
        <button onClick={lightSwitch} className="px-10">
          Light Swith{" "}
          <span className="text-yellow-300">{islightOn ? "ON" : "OFF"}</span>
        </button>
        <button onClick={updateDoor}>
          {" "}
          Door{" "}
          <span className="text-amber-950">
            {isdoorOpen ? "OPEN" : "CLOSE"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Counter;
