// store.ts
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import contactsReducer from "./reducers/contactsReducer";
import darkModeReducer from "./reducers/darkModeReducer";

import thunk from "redux-thunk";

const rootReducers = combineReducers({
  darkMode: darkModeReducer,
  contacts: contactsReducer,
});
const store = createStore(rootReducers, {}, applyMiddleware(thunk));

export default store;
