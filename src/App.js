import React, { Component } from "react";
import "./App.css";
import employees from "./employees.json";
import EmployeeRow from "./components/employeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    employees,
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map((employee) => (
          <EmployeeRow
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
