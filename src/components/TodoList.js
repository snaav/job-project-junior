import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const {
      sortAsc,
      sortDesc,
      sumAll,
      items,
      clearList,
      handleDelete,
      handleEdit
    } = this.props;
    return (
      <ul className="list-group my-5">
        <li className="list-group-item  text-capitalize d-flex justify-content-between my-0">
          <div className="todo-icon ">
            Nazwa
            <span className="ml-1 text-success" onClick={sortDesc}>
              <i className="fas fa-arrow-circle-down"></i>{" "}
            </span>
            <span className="mx-0 text-danger" onClick={sortAsc}>
              <i className="fas fa-arrow-circle-up"></i>{" "}
            </span>
            PLN
            <span className="ml-0 text-success" onClick={sortDesc}>
              <i className="fas fa-arrow-circle-down"></i>{" "}
            </span>
            <span className="mx-0 text-danger" onClick={sortAsc}>
              <i className="fas fa-arrow-circle-up"></i>{" "}
            </span>
            EUR
            <span className="ml-1 text-success" onClick={sortDesc}>
              <i className="fas fa-arrow-circle-down"></i>{" "}
            </span>
            <span className="mx-0 text-danger" onClick={sortAsc}>
              <i className="fas fa-arrow-circle-up"></i>{" "}
            </span>
            {/* <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
          <div className="todo-icon">
            <span className="mx-2" onClick={handleDelete}>
              PLN
              <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
          <div className="todo-icon">
            <span className="mx-2" onClick={handleDelete}>
              EUR <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash"></i>
            </span> */}
          </div>
          <h6>Opcje</h6>
        </li>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              title1={item.title1}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            ></TodoItem>
          );
        })}
        <h5 className="text-capitalize text-left mt-4">
          Suma: {sumAll} PLN ({(sumAll / 4.8282).toFixed(2)} EUR)
        </h5>
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-3"
          onClick={clearList}
        >
          Wyczyść wszystko
        </button>
      </ul>
    );
  }
}
