import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./todolist.css";

export default class TodoList extends Component {
  render() {
    const {
      sortDescName,
      sortAscName,
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                Nazwa zadania
                <span
                  className="filterek mx-1 text-success"
                  onClick={sortAscName}
                >
                  <i className="fas fa-arrow-circle-up"></i>
                </span>
                <span
                  className="filterek mx-0 text-danger"
                  onClick={sortDescName}
                >
                  <i className="fas fa-arrow-circle-down"></i>
                </span>
              </th>
              <th scope="col">
                Kwota w PLN
                <span className="filterek mx-1 text-success" onClick={sortAsc}>
                  <i className="fas fa-arrow-circle-up"></i>
                </span>
                <span className="filterek mx-0 text-danger" onClick={sortDesc}>
                  <i className="fas fa-arrow-circle-down"></i>
                </span>
              </th>
              <th scope="col">
                Kwota w EUR
                <span className="filterek mx-1 text-success" onClick={sortAsc}>
                  <i className="fas fa-arrow-circle-up"></i>
                </span>
                <span className="filterek mx-0 text-danger" onClick={sortDesc}>
                  <i className="fas fa-arrow-circle-down"></i>
                </span>
              </th>
              <th scope="col">Opcje</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>

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
