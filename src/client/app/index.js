import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import UserList from './components/user-list.component.js';
import UserListForm from './components/user-list-form.component.js';
import actions from './actions/actions.js';
import UserListReducer from './reducers/user-list.reducer.js';
import FilterReducer from './reducers/user-list-filter.reducer.js';
import dataService from './data/data.service.js';
require('./index.less');

const reducers = combineReducers({
    tableData: UserListReducer,
    filterQuery: FilterReducer
});

const store = createStore(reducers);

dataService.fetch().then((data) => {
        store.dispatch(actions.addNewEntries(data));
    });


class App extends React.Component {
    constructor() {
        super();
        store.subscribe(this.onNewData.bind(this));
        this.state = store.getState();
    }

    onNewData() {
        const newData = store.getState();
        this.setState({
            tableData: newData.tableData
        })
    }

    render() {
        return <div className='app-root'>
                    <h1 className='header-root'>User List</h1>
                    <div className='toolbar-root'>
                        <UserListForm addEntry={decorate(actions.addEntry)}></UserListForm>
                    </div>
                        <UserList tableData={this.state.tableData} filterEntries={decorate(actions.filterEntries)}></UserList>
                </div>;
    }
}

function decorate(action) {
    return (data) => {
        store.dispatch(action(data));
    }
}

render(<App/>, document.getElementById('app'));