import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { textLoadingReducer } from "./reducers/loadingText";
import { inputReducer } from "./reducers/letterInput";

const reducers = combineReducers({ testText: textLoadingReducer, letterInput: inputReducer });

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
