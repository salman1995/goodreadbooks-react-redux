import React from "react";
import { connect } from "react-redux"
import { fetchBookDetails } from "../actions/booksActions"
import Book from '../components/Book';

@connect((store) => {
  return {
    book: store.books.book,
  };
})
export default class BookDetails extends React.Component {
	componentWillMount(){
		console.log(this.props);
		const {params} = this.props.match;
		if(params.id){
			this.props.dispatch(fetchBookDetails(params.id));
		}
	}
	render() {
		const {book} = this.props;
		console.log(book);
		if(book == null){
			return (
				<div></div>
			);
		}
		return (
		  <div>
			<h1></h1>
			<div class="row">
				<Book book={book} />
			</div>
		  </div>
		);
	}
}