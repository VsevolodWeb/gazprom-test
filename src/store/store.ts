import {createStore, combineReducers} from 'redux';

import appReducer from "./app-reducer";

const rootReducer = combineReducers({
	app: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

const store = createStore(rootReducer);

export default store;