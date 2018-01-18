import axios from "axios";
import  {parseString} from 'react-native-xml2js';
export function fetchBooks(queryText,page) {
	  return function(dispatch) {
		
		dispatch({type: "FETCHING_BOOKS",payload: {queryText,page,nextPage: page+1}});
		const params = { format: "json" , q: queryText, search: 'title',page: page,key: "Rc0dvbXtAxvyAG9V7UA"};
		axios.get('http://localhost:5000/api/fetchBooks', {params: params})
		  .then((response) => {
			 const {data} = response;
			 const {books,totalResults} = data;
			 
			 dispatch({type: "FETCH_BOOKS_SUCCESS", payload: {books,totalResults,page}});
		  })
		  .catch((err) => {
			dispatch({type: "FETCH_BOOKS_ERROR",payload: {response: err} })
		  })
		
	  }
}

export function fetchBookDetails(id) {
  return function(dispatch) {
	 
    dispatch({type: "FETCHING_BOOK_DETAILS"});
	const params = {id,key: "Rc0dvbXtAxvyAG9V7UA"};
	axios.get('http://localhost:5000/api/fetchBookDetails', {params: params})
	  .then((response) => {
		 const {data} = response;
		 const {book} = data;
		 
		 dispatch({type: "FETCH_DETAILS_SUCCESS",payload: { book}});
	  })
	  .catch((err) => {
		dispatch({type: "FETCH_BOOKS_ERROR",payload: { response: err}})
	  })
	
    
  }
}