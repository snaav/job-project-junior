import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { kwota, item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            {/* <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book "></i>
              </div>
            </div> */}
            <input
              type="text"
              name="item"
              className="form-control text-capitalize"
              placeholder="Nazwa zadania (Min. 5 znaków)"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mt-3">
            {/* <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div> */}
            <input
              type="number"
              name="kwota"
              className="form-control text-capitalize"
              placeholder="Kwota w PLN"
              value={kwota}
              onChange={handleChange}
            />
          </div>
          <h6 className="mt-3">1 euro = 4.8282</h6>
          <button
            type="submit"
            // disabled={kwota && item ? false : true}
            className={
              editItem
                ? "btn btn-block btn-success mt-3 text-uppercase "
                : "btn btn-block btn-primary mt-3 text-uppercase "
            }
          >
            {editItem ? "edytuj" : "dodaj"}
          </button>
        </form>
      </div>
    );
  }
}
