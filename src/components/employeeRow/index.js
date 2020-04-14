import React from "react";
import "./style.css";

function employeeRow(props) {
  return (
    <tr>
      <td>
        <strong>Name:</strong> {props.name}
      </td>
      <td>
        <strong>Occupation</strong> {props.occupation}
      </td>
      <td>
        <strong>Location</strong> {props.location}
      </td>
    </tr>
  );
}

export default employeeRow;
