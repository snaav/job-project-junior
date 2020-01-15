import React, { Component } from "react";
import "./employee.css";

export default class Employee extends Component {
  render() {
    const { img, pracownik } = this.props.employee;
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
      <table className="employee">
        <tbody>
          <tr>
            <td>
              <img src={url} alt="employee" className="rounded-circle" />
            </td>
            <td>
              <h5>{pracownik}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
