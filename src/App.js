import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { employeeData } from "./employeeData";
import Employee from "./components/Employee";

//showing vs-code github setup
export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    kwota: "",
    pracownik: "",
    editItem: false,
    showInfo: false,
    employees: employeeData,
    szukaj: ""
  };

  //handle filtering
  handleChange3 = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      this.sortData
    );
  };

  // ----------------funkcja do wyszukiwania na zywo-----------------------
  // sortData = () => {
  //   const { storeProducts, pracownik, szukaj } = this.state;

  //   let tempPrice = parseInt(price);

  //   let tempProducts = [...storeProducts];

  //   if (szukaj.length > 0) {
  //     tempProducts = tempProducts.filter(item => {
  //       let tempSearch = search.toLowerCase();
  //       let tempTitle = item.title.toLowerCase().slice(0, search.length);
  //       if (tempSearch === tempTitle) {
  //         return item;
  //       }
  //     });
  //   }
  //   this.setState({
  //     filteredProducts: tempProducts
  //   });
  // };

  //----------------------------------------------
  handleSelect = idd => {
    console.log(idd);

    // const selectedPracownik = this.state.employees.find(
    //   item => item.idd === idd
    // );

    // this.setState({
    //   pracownik: selectedPracownik.pracownik
    // });
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      title1: this.state.kwota
    };
    if (newItem.title.length > 4 && newItem.title1.length > 0) {
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

  sortAscName = () => {
    // const sortedItems = this.state.items.sort(function (a, b) {
    //   return a.title1 - b.title1;
    // });
    // this.setState({
    //   items: sortedItems
    // });
    const sortedItemsName = this.state.items.sort(function(a, b) {
      const nameA = a.title.toLowerCase(),
        nameB = b.title.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
    this.setState({
      items: sortedItemsName
    });
  };
  sortDescName = () => {
    // const sortedItems = this.state.items.sort(function (a, b) {
    //   return a.title1 - b.title1;
    // });
    // this.setState({
    //   items: sortedItems
    // });
    const sortedItemsName = this.state.items.sort(function(a, b) {
      const nameA = a.title.toLowerCase(),
        nameB = b.title.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
    this.setState({
      items: sortedItemsName.reverse()
    });
  };
  sortAsc = () => {
    const sortedItems = this.state.items.sort(function(a, b) {
      return a.title1 - b.title1;
    });
    this.setState({
      items: sortedItems
    });
  };
  sortDesc = () => {
    const sortedItems = this.state.items.sort(function(a, b) {
      return a.title1 - b.title1;
    });
    this.setState({
      items: sortedItems.reverse()
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto col-md-12 mt-5">
            <div className="card card-body my-3">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                  {/* <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book "></i>
              </div>
            </div> */}
                  <input
                    type="text"
                    name="firma"
                    className=" form-control text-capitalize"
                    placeholder="Nazwa firmy"
                    // value={item}
                    // onChange={handleChange}
                  />
                </div>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    name="pracownik"
                    className="border-right-0 form-control text-capitalize"
                    placeholder="Pracownik"
                    value={this.state.employees.pracownik}
                    onChange={this.handleChange}
                  />

                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-outline-secondary     text-uppercase btn-block"
                      onClick={this.handleInfo}
                    >
                      <i className="fas fa-chevron-down"> </i>
                    </button>
                  </div>
                </div>
                {this.state.showInfo && (
                  <div className="input-group">
                    {/* <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book "></i>
              </div>
            </div> */}
                    <input
                      type="text"
                      name="szukaj"
                      className=" mt-3 border-top-0 border-left-0 border-right-0 form-control text-capitalize"
                      placeholder="Szukaj"
                      // value={item}
                      onChange={this.handleChange3}
                    />
                    <div className="input-group-append">
                      <div className="mt-3 border-top-0 border-left-0 border-right-0 input-group-text  bg-white">
                        <i className="fas fa-search"> </i>
                      </div>
                    </div>
                    <div className="input-group mx-auto mt-3">
                      {this.state.employees.map(employee => (
                        <div
                          className="input-group"
                          onClick={() => this.handleSelect(employee.pracownik)}
                        >
                          <Employee
                            key={employee.idd}
                            employee={employee}
                          ></Employee>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="col-12 mx-auto col-md-12 mt-5">
            <h4
              className="mt-5 text-capitalize 
            text-left"
            >
              Zadania
            </h4>
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
              sortAsc={this.sortAsc}
              sortDesc={this.sortDesc}
              sortAscName={this.sortAscName}
              sortDescName={this.sortDescName}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}
