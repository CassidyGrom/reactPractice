import React, { Component } from "react";
import "./App.css";
import employees from "./employees.json";
import EmployeeRow from "./components/employeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import BasicTextField from "./components/field/Field.js";

class App extends Component {
  state = {
    employees,
    SortCategory: "",
    textFieldValue: "",
    //additional state for filter
  };

  handleTextFieldChange = (e) => {
    this.setState({ textFieldValue: e.target.value });
    this.filterList();
  };

  filterList = () => {
    const currentList = [...this.state.employees];
    const filteredList = currentList.filter((el) => {
      return el.name.includes(this.state.textFieldValue);
    });
    console.log(filteredList);
    this.setState({ employees: filteredList });
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

  handleTableSort = (colName) => {
    const currentList = [...this.state.employees];
    currentList.sort((employeeA, employeeB) => {
      if (employeeA[colName] < employeeB[colName]) {
        return -1;
      }
    });

    console.log(currentList);
    this.setState({
      employees: currentList,
    });
  };

  render() {
    return (
      <div>
        <Title>Employee List</Title>
        <div>
          <BasicTextField handleTextFieldChange={this.handleTextFieldChange} />
        </div>
        <Wrapper>
          <table>
            <thead>
              <tr>
                <td onClick={() => this.handleTableSort("name")}>name</td>
                <td onClick={() => this.handleTableSort("occupation")}>
                  occupation
                </td>
                <td onClick={() => this.handleTableSort("location")}>
                  location
                </td>
              </tr>
            </thead>
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
          {/* <DropDown handleChange={this.handleChange} /> */}
        </Wrapper>
      </div>
    );
  }
}

export default App;
