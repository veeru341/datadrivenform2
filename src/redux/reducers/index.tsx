import { combineReducers } from "redux";
import schemaReducer from "./reducer";


const reducers = combineReducers({
    schemaState : schemaReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>