import {createStore, applyMiddleware, combineReducers} from "redux";
import {thunk} from "redux-thunk";
import {onCountReducer} from "../screens/style/styleRedux/Reducers.ts";
import { onMessageReducer } from "../components/feature/message/Reducers.ts";
import {  onWeatherReducer } from "../screens/home/Reducers.ts";


const rootReducer = combineReducers({
  message: onMessageReducer,
  count: onCountReducer, // Add
  weather: onWeatherReducer,
});


export type RootState = ReturnType<typeof rootReducer>;

// @ts-ignore createStore is deprecated but we want to keep using it
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;