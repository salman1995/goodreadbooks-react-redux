import React from "react";


export default (props) => {
  const {src} = props;
    return (
		<img src={src} class="img-responsive" />
    );
};