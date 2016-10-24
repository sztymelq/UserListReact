import {createStore} from 'redux';
import UserListReducer from './reducers/user-list.reducer.js';
import data from './data-provider/data.js';

function initialize() {
    const store = createStore(UserListReducer, data);
    store.subscribe(storeHandler);

    function storeHandler() {
        console.log('store.getState()', store.getState());
    }

    return store;
}

export default initialize;