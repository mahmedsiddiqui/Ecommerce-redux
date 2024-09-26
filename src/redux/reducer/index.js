import handleCart from "./handleCart";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    cart: handleCart, // Renamed for better clarity
});

export default rootReducers;
