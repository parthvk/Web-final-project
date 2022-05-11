import React, { Component } from "react";
import { NavLink } from "react-router-dom";

/** custom NavLink
 *
 */
export default class MyNavLink extends Component {
  render() {
    return <NavLink className="navigation" {...this.props}></NavLink>;
  }
}
