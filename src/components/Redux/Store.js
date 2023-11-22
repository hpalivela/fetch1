import { postsReducer } from "./PostReducer"
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

const rootReducer=combineReducers({completePosts:postsReducer})
export const store=createStore(rootReducer,applyMiddleware(thunk));