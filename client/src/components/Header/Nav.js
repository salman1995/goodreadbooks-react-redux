import React from "react";

import Title from "./Nav/Title";
import HomeLink from "./Nav/HomeLink";

export default (props) => {
	return (
	    <nav class="navbar navbar-inverse">
		  <div class="container-fluid">
			<div class="navbar-header">
			  <Title />
			</div>
			<ul class="nav navbar-nav navbar-right">
			  <HomeLink />
			</ul>
		  </div>
		</nav>
    );
}