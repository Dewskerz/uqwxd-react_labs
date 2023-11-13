//reducers
import {combineReducers} from 'redux';

const counter = (state=0, action) => {
    if (action.type === 'INCREMENT') {
        // This action will increase the value of counter by the value passed to the increment method
        return state + action.inc;
    }

    // else, just returns the current value of the ocunter
    return state;
}

const myReducer = combineReducers({counter});

export default myReducer;