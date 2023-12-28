import { combineReducers } from "redux"

import counterReducer from "./counterStore"
import userReducer from "./userReducer"

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
})
