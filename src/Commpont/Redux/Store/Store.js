import { createStore } from "redux";
import counterReducer from "../Services/Reducers/CounterReducer";

const store = createStore(counterReducer)
 export default store