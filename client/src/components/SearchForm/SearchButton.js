import React from "react";


export default class SearchButton extends React.Component {
	handleClick(e){
		this.props.searchBooks();
	}
  render() {
    return (
		<span class="input-group-btn">
			<button onClick={this.handleClick.bind(this)} class="btn btn-success" type="submit">
				<i class="fa fa-search"></i>
			</button>
	    </span>
    );
  }
}

