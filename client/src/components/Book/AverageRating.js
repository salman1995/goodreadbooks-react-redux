import React from "react";
import StarRatingComponent from 'react-star-rating-component';


export default (props) => {
	const {averageRating}  = props;
    return (
		<div>
			<StarRatingComponent 
				name="averageRating" 
				starCount={5}
				value={parseInt(averageRating)}
				editing={false}
            />
		</div>
    );
};
