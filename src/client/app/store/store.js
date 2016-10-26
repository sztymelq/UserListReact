import {createStore} from 'redux';
import UserListReducer from './../reducers/user-list.reducer.js';
import tableHeaders from './../data/table-headers.js';
import dataService from './../data/data.service.js';
import constants from './store-constants.js';

const data = {
    tableHeaders,
    tableData: []
};

const store = createStore(UserListReducer, data);

dataService.getAll().then((data) => {
    store.dispatch({type: constants.events.NEW_ENTRIES, data});
});


export default store;