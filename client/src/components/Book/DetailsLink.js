import React from "react";
import { Link } from "react-router-dom";

export default class DetailsLink extends React.Component {
  render() {
    return (
	  <Link to={`details/${this.props.id}`} >View Details</Link>
    );
  }
}
