import React from "react";
import { showPassword } from "../../../utils/showPassword";

const ShowPass = ({ visiblePass, setVisiblePass }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <label htmlFor="show">show password</label>
      <input
        style={{ width: "20px", height: "20px" }}
        id="show"
        type="checkbox"
        onChange={() => showPassword(visiblePass, setVisiblePass)}
      ></input>
    </div>
  );
};

export default ShowPass;
