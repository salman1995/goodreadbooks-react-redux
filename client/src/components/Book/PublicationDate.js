import React from "react";

export default (props)  => {
	const {publicationDate} = props;
    return (
	  <div>Published On: <b>{publicationDate}</b></div>
    );
};
