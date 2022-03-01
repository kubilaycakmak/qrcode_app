import { combineReducers } from 'redux';
import personReducer from './person.js';

const rootReducer = combineReducers(
    {
        persons: personReducer,
    }
)

export default rootReducer;