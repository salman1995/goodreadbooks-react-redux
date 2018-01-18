import React from "react";


export default (props)  => {
	const {description} = props;
    return (
		<div class="panel panel-default">
		  <div class="panel-heading">Description</div>
		  <div class="panel-body"><p dangerouslySetInnerHTML={{__html: description}}></p></div>
		</div>
    );
};