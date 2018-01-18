import React from "react";
import SearchField from './SearchForm/SearchField';
import SearchButton from './SearchForm/SearchButton';
import { connect } from "react-redux"
import BookListSuggestion from "./BookListSuggestion";

import { fetchBooks,hideSuggestions } from "../actions/booksActions"

@connect((store) => {
  return {
	querytext : store.books.queryText
  };
})
export default class SearchForm extends React.Component {
	constructor(){
		super();
		var elm = this;
		window.addEventListener('click', function(e){   
		  if (!document.getElementById('searchFormBox').contains(e.target)){
			elm.props.dispatch({type: "HIDE_SUGGESTION",showSuggestions: false})
		  }
		});
	}
	fetchBooks(text) {
		const {dispatch} = this.props;
		if(text !== ""){
			dispatch(fetchBooks(text,1))
		}else{
			dispatch({type: "EMPTY_QUERY",payload: { books: [],queryText:""}})
		}
		
	}
	searchBooks(){
		 const { querytext} = this.props;
		 this.props.history.push('/results/'+querytext);
	}
	render() {
		const { querytext} = this.props;
		return (
			 <div class="col-md-8" id="searchFormBox">
				<div class="input-group">
					<SearchField fetchBooks = {this.fetchBooks.bind(this)}q uerytext ={this.props.querytext}/>
					<SearchButton searchBooks={this.searchBooks.bind(this)} />
					
				</div>
				<BookListSuggestion/>
			 </div>
		);
	}
}
