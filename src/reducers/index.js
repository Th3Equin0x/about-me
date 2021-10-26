import counterReducer from './counter';
import activeTabReducer from './activeTab';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    activeTab: activeTabReducer
})
export default allReducers;