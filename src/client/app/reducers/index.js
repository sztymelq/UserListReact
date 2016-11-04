import UserListReducer from './userList.reducer.js';
import FilterReducer from './filter.reducer.js';
import PaginationReducer from './pagination.reducer.js';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    usersData: UserListReducer,
    filter: FilterReducer,
    pagination: PaginationReducer
});

export default reducers;