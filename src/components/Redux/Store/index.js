import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainReducer,} from "../Reduser";
import {composeWithDevTools} from "redux-devtools-extension";
import {BasketReducer} from "../Reduser/BasketReducer";
import {FavoriteReducer} from "../Reduser/FavoriteReducer";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    main:MainReducer,
    basket:BasketReducer,
    favorite:FavoriteReducer
}),composeWithDevTools(applyMiddleware(thunk)))