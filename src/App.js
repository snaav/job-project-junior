import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
//showing vs-code github setup
export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    kwota: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      title1: this.state.kwota
    };
    if (newItem.title.length > 0 && newItem.title1.length > 0) {
      const updatedItems = [...this.state.items, newItem];
      this.setState({
        items: updatedItems,
        item: "",
        kwota: "",
        id: uuid(),
        editItem: false
      });
    }
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      kwota: selectedItem.title1,

      id: id,
      editItem: true
    });
  };
  sumAll = () => {
    return this.state.items.reduce(function(prev, cur) {
      return prev + Number(cur.title1);
    }, 0);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h4 className="text-capitalize text-left">Zadania</h4>
            <TodoInput
              item={this.state.item}
              kwota={this.state.kwota}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            ></TodoInput>

            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              sumAll={this.sumAll()}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}
