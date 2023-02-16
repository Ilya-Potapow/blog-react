import React, { useEffect } from "react";
import { useState } from "react";
import "./../checkbox/Checkbox.css";

const Checkbox = ({ update, label }) => {
  const [isChecked, setIsChecked] = useState("");

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    update(isChecked);
  }, [isChecked]);

  return (
    <div>
      <span>{label}</span>
      <div>
        <label className="switch">
          <input
            id="infScroll"
            type="checkbox"
            onChange={checkboxHandler}
            checked={isChecked}
          ></input>
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
