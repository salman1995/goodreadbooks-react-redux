import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"


@connect((store) => {
  return {
	books : store.books.books,
	queryText : store.books.queryText,
	showSuggestions: store.books.showSuggestions
  };
})
export default class BookListSuggestion extends React.Component {
	
	
	render() {
		const { books,queryText,showSuggestions} = this.props;
		const suggestionListStyle = {
			 position: "static",
			 clear: "both",
			 backgroundColor: "#f3f2f2",
			 listStyleType: "none"
		};
		
		if(!books.length || queryText == "" || !showSuggestions){
			return <ul ></ul>;
		}
		
	const mappedBooks = books.map((book,i) => <li key={i}><Link to={`details/${book.id}`}>{book.bookName}</Link></li>)
		return (
			 <ul style={suggestionListStyle} >
				{mappedBooks}	
			 </ul>
		);
	}
}
