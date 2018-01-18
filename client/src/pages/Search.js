import React from "react";
import SearchForm from "../components/SearchForm";



export default (props) =>{

		const {history} = props;
		return (
		  <div>
			<h1>Search Books</h1>
			<div class="row">
				<SearchForm history={history} />
			</div>
		  </div>
		);
}