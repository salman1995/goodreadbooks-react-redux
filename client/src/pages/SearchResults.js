import React from "react";
import { connect } from "react-redux"
import { fetchBooks } from "../actions/booksActions"
import { Link } from "react-router-dom";
@connect((store) => {
  const {books} = store;
  const {page,nextPage,totalResults,queryText} = books;
  return { page, nextPage, books: books.books, totalResults, queryText };
})
export default class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleScroll = this.handleScroll.bind(this);
		this._fetchBooks= this._fetchBooks.bind(this);
		this._fetchBooks(this.props.nextPage);
	}
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	  }

    componentWillUnmount() {
		 
		window.removeEventListener("scroll", this.handleScroll);
    }	

	_fetchBooks(page){
		const {match,dispatch} = this.props;
		const {params} = match;
		const {queryText} = params;
		if(queryText && queryText != ""){
			dispatch(fetchBooks(queryText,page));
		}
		else{
			dispatch({type: "EMPTY_QUERY",payload: { books: [],queryText:""}})
		}
	}
	
	handleScroll() {
		const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
		const body = document.body;
		const html = document.documentElement;
		const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
		const windowBottom = windowHeight + window.pageYOffset;
		if (windowBottom >= docHeight) {
			this._fetchBooks(this.props.nextPage);
		} 
	  }
	render() {
		const {books,totalResults,queryText} = this.props;
		console.log(books);
		if(!books.length){
			return (	
				<div class="row">
					<div class="col-md-12">
						<h1>Search Results</h1>
						<h3>No results found : {queryText}</h3>
					</div>
				</div>
			);
		}
		const mappedBooks = books.map(
								(book,i) => 
									<li key={i}>
										<Link to={`/details/${book.id}`}>
											<img src={book.smallImage} />
											<strong>{book.bookName}</strong>
											<br/>
											<span>{book.authorName}</span>
										</Link>
									</li>
								);
		
		return (
			<div class="row">
				<div class="col-md-12">
					<h1>Search Results:<b>{queryText}</b></h1>
					<h3>{totalResults} Books found.</h3>
					 <ul class="searchResults">
					 {mappedBooks}
					</ul>
				</div>
			</div>
			 
		);
	}
}