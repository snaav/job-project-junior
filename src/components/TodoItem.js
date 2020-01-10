import React, { Component } from "react";
import { findAllByTitle } from "@testing-library/dom";

export default class TodoItem extends Component {
  render() {
    const { title, title1, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item  text-capitalize d-flex justify-content-between my-2">
        <h6>{title} </h6>
        <h6>{title1} PLN</h6>
        <h6>{(title1 / 4.8282).toFixed(2)} EUR</h6>

        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
