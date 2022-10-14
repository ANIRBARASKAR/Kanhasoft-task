import{applyMiddleware, combineReducers, createStore}from"redux"
import thunk from"redux-thunk"
import{composeWithDevTools} from "redux-devtools-extension"
import { eventReducer } from "./reducer/eventReducer"


const rootreducer=combineReducers({
    allEvents:eventReducer
})

 const store = createStore(
    rootreducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)


export default store;