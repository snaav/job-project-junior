import React, { Component } from "react";
export default class Employee extends Component {
  render() {
    const { id, img, name, surname } = this.props.employee;

    return (
      <article className="employee">
        <div className="employee-info">
          <h3>
            {`${name} 
            ${surname}`}
          </h3>
        </div>
      </article>
    );
  }
}
