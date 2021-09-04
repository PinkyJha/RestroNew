import { combineReducers } from "redux"
import zartekReducer from "./zartek/zartekReducer"

const rootReducer = combineReducers({
    zartek :zartekReducer
})
export default rootReducer
