import { createStore } from "redux";
import {reducer} from "./reducers"

const enhancer = window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__ ();


export const store = createStore(reducer, enhancer)