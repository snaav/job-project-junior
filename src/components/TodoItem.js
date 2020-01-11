import React, { Component } from "react";
import { findAllByTitle } from "@testing-library/dom";

export default class TodoItem extends Component {
  render() {
    const { title, title1, handleDelete, handleEdit } = this.props;
    return (
      // <li className="list-group-item  text-capitalize d-flex justify-content-between my-0">

      //   <div className="todo-icon">
      //     <span className="mx-2 text-success" onClick={handleEdit}>
      //       <i className="fas fa-pen"></i>
      //     </span>
      //     <span className="mx-2 text-danger" onClick={handleDelete}>
      //       <i className="fas fa-trash"></i>
      //     </span>
      //   </div>
      // </li>
      <tr>
        <td>{title}</td>
        <td> {title1}</td>
        <td>
          <h6>{(title1 / 4.8282).toFixed(2)} EUR</h6>
        </td>
        <td>
          {" "}
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </td>
      </tr>
    );
  }
}
