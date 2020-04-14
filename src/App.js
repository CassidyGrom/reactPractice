import React, { Component } from "react";
import "./App.css";
import employees from "./employees.json";
import EmployeeRow from "./components/employeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import DropDown from "./components/DropDown/DropDown.js";

class App extends Component {
  state = {
    employees,
    SortCategory: "",
    //additional state for filter
  };

  handleChange = (event) => {
    // setCategory(event.target.value);
    this.setState({ SortCategory: event.target.value });
  };

  handleList = (event) => {
    // handle the sort from array of employees, sort by category. Have a default sort
    //handle the filter, later
    // const sorted = 
    //



  };

  render() {
    console.log(this.state.SortCategory);
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <table>
          <tbody>
            {this.state.employees.map((employee) => (
              <EmployeeRow
                id={employee.id}
                key={employee.id}
                name={employee.name}
                occupation={employee.occupation}
                location={employee.location}
              />
            ))}
          </tbody>
        </table>
        <DropDown handleChange={this.handleChange} />
      </Wrapper>
    );
  }
}

export default App;
