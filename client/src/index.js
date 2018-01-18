import React from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router, Route, IndexRoute, hashHistory,Switch,HashRouter  } from "react-router-dom";

import Search from "./pages/Search";
import SearchResults from "./pages/SearchResults";
import BookDetails from "./pages/BookDetails";
import Layout from "./components/Layout";

import { Provider } from "react-redux"
import store from "./store"
const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<HashRouter  >
			<Layout>
				<Route name="home" history={hashHistory} path='/' exact component={Search}/>
				<Route name="results" path='/results/:queryText' component={SearchResults} />
				<Route name="details" path='/details/:id' exact component={BookDetails} />
			</Layout>
		</HashRouter >
	</Provider>
	,
app);