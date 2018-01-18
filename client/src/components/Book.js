import React from "react";
import Image from './Book/Image';
import Title from './Book/Title';
import Author from './Book/Author';
import AverageRating from './Book/AverageRating';
import Description from './Book/Description';
import PublicationDate from './Book/PublicationDate';
import ReviewsWidget from './Book/ReviewsWidget';

export default (props) => {
	const { book } = props;
	return (
		 <div class="row">
			<div class="col-md-2">
				<Image src={book.imageUrl}/>
				<Author name={book.authorName}/>
				<AverageRating averageRating={book.averageRating}/>
				<PublicationDate publicationDate={book.publicationDate}/>
			</div>
			<div class="col-md-10 panel-group">
				<Title name={book.name}/>
				<Description description={book.description}/>
				<ReviewsWidget reviews={book.reviewsWidget}/>
			</div>
			
		 </div>
	);
}
