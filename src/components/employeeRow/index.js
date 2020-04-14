import React from "react";
import "./style.css";

function employeeRow(props) {
  return (
    <table className="table">
      <tbody>
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
      </tbody>
    </table>
  );
}

export default employeeRow;
