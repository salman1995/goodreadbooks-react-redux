import React from "react";
import { connect } from "react-redux"
import ReactLoading from 'react-loading';
@connect((store) => {
  return {
    fetching: store.books.fetching
  };
})

export default class Footer extends React.Component {
  render() {
	const {fetching } = this.props;
	const type = "balls";
	const color = "#2780e3";
	const loading = (fetching)?<ReactLoading type={type} color={color} height='100px' width='100px' className="loading" />:'';
    return (
      <footer>
		eMumba&copy; All rights reserved - Developed By <i>Salman Malik</i>
	   	{loading}
	  </footer>
    );
  }
}
