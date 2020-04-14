import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import userReducer from './user/userReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    user: userReducer
})

const store = createStore(rootReducer,applyMiddleware(logger, thunk))

export default store