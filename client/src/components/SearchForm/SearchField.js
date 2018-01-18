import React from "react";


export default class SearchField extends React.Component {
	handleChange(e){
		this.props.fetchBooks(e.target.value);
	}
	render() {
    return (
	  <input onChange={this.handleChange.bind(this)} value={this.props.querytext}  type="text" class="form-control" placeholder="Enter Book Name to Search" />
    );
  }
}

