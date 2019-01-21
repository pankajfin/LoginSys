import { combineReducers } from 'redux';
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
    data : dataReducer,
    //loginreq : loginreducer
    });
    
    export default rootReducer;
    