import {createStore} from 'redux';
import reducers from '../reducers';
import actions from '../actions/actions.js';
import dataService from '../data/data.service.js';

const store = createStore(reducers);

dataService.fetch().then((data) => {
    store.dispatch(actions.addNewEntries(data));
});

export default store;