import React from "react";
import Book from './Book';
import { connect } from "react-redux"


@connect((store) => {
  return {
	books : store.books
  };
})
export default class BookList extends React.Component {
	render() {
		const { books} = this.props;
		const mappedBooks = books.map(book => <Book key={book.id} book={book} />)
		return (
			 <div class="col-md-12">
				{mappedBooks}	
			 </div>
		);
	}
}
