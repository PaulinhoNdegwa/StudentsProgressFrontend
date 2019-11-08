import { combineReducers } from 'redux';
import studentsProgressReducer from  './studentsProgressReducer';

const rootReducer = combineReducers({
    progressReducer: studentsProgressReducer
});

export default rootReducer;