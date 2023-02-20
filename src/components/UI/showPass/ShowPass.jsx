import React from "react";

const ShowPass = ({ passHandler }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <label htmlFor="show">show password</label>
      <input
        style={{ width: "20px", height: "20px" }}
        id="show"
        type="checkbox"
        onChange={passHandler}
      ></input>
    </div>
  );
};

export default ShowPass;
