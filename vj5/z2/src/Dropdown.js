import React from "react";

const Dropdown = ({ setter, arr, category = false }) => {
  console.log(arr);
  return (
    <div>
      <select onChange={(e) => setter(e.target.value)}>
        <option value="">Choose city</option>
        {arr.map((key) => (
          <option key={key} value={category ? key.id : key}>
            {category ? key.attributes.name : key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
