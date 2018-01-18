import React from "react";


export default (props) => {
	const {reviews} = props;
    return (
		<div class="panel panel-default">
		  <div class="panel-heading">Reviews</div>
		  <div class="panel-body"><div dangerouslySetInnerHTML={{__html: reviews}}></div></div>
		</div>
    );
};
