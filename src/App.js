import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
//showing vs-code github setup
export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    console.log("handle change");
  };
  handleSubmit = e => {
    console.log("handle Submit ");
  };
  clearList = () => {
    console.log("clear list ");
  };
  handleDelete = id => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            ></TodoInput>

            <TodoList
              items={this.state.items}
              clearList={this.state.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}
