import { combineReducers } from 'redux';
import auth from './auth_reducers';
import jobs from './job_reducers';

export default combineReducers({
    auth, jobs
})
