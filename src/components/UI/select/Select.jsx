import React from "react";
import "./Select.css";

const SortItem = ({ options, defaultValue, value, onChange }) => {
  return (
      <select
        className="custom-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.name}
          </option>
        ))}
      </select>

  );
};

export default SortItem;
