import { combineReducers } from "redux"

import books from "./booksReducer"
import app from "./appReducer"
export default combineReducers({
  books,app
})
