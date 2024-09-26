import { createStore } from "redux";
import rootReducers from "./reducer";

// Create store with rootReducers, and enable Redux DevTools
const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Add Redux DevTools
);

export default store;
