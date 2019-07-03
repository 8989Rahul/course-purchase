import React, { Component } from "react";
import Course from "./Course";

export default class CourseSales extends Component {
  state = {
    total: 0
  };
  summession = price => {
    this.setState({ total: this.state.total + price });
  };

  render() {
    var courses = this.props.items.map((item, i) => {
      return (
        <Course
          key={i}
          name={item.name}
          price={item.price}
          summession={this.summession}
          active={item.active}
        />
      );
    });
    return (
      <div>
        <h3 className="course">This is your courses</h3>
        {courses}
        <p className="course">
          Total : <b>{this.state.total}</b>{" "}
        </p>
      </div>
    );
  }
}
