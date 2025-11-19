import { combineReducers } from "redux";
import entriesReducer from "../Reducers/enteries.reducers";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import modalReducer from "../Reducers/modal.reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalReducer,
    }),
    undefined,
    composeWithDevTools()
  );
};

export default configureStore;
