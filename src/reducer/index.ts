import { quoteTitle } from "./quoteTitle";
import { quote } from "./quote";
import { combineReducers } from "redux";

const reducer = combineReducers({
  quote,
  quoteTitle,
});

export type TReducers = ReturnType<typeof reducer>;

export default reducer;
