
export default function reducer(state={
    books: [],
	book: null,
    fetching: false,
    fetched: false,
    error: null,
	queryText: "",
	totalResults: 0,
	page: 1,
	nextPage: 1
  }, action) {
	const {type,payload} = action;
    switch (type) {
	  case "HIDE_SUGGESTION":{
		const {showSuggestions} = payload;
		return {...state,showSuggestions}  
	  }
      case "FETCHING_BOOKS": {
		const {queryText,page,nextPage} = payload;
        return {...state,fetching: true,queryText,page,nextPage}
      }
	  case "FETCH_BOOKS_ERROR": {
		const {response} = payload;
        return {...state,fetching: false, error: response,showSuggestions: false}
      }
      case "FETCH_BOOKS_SUCCESS": {
	    const {books,totalResults,page} = payload;
		return {
		  ...state,
          fetching: false,
          fetched: true,
          books: (page == 1)? books:state.books.concat(books),
		  totalResults,
		  page,
		  showSuggestions: (page == 1)?true:false
        }
      }
	  case "EMPTY_QUERY":{
		  const {books,queryText} = payload;
		  return {
		  ...state,
          fetching: false,
          fetched: true,
          books,
		  queryText,
		  showSuggestions: false
        }
	  }
	  
	  case "FETCHING_BOOK_DETAILS": {
        return {...state,fetching: true,showSuggestions: false,book: null}
      }
	  case "FETCH_DETAILS_SUCCESS": {
		const {book} = payload;
		return {
		  ...state,
          fetching: false,
          fetched: true,
          book,
        }
      }
    }

    return state
}
