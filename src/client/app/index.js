import React from 'react';
import {render} from 'react-dom';
import UserList from './components/user-list.component.js';
import UserListForm from './components/user-list-form.component.js';
import store from './store/store.js';
import constants from './store/store-constants.js';
require('./index.less');

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
        return <div className='root'>
                    <h1 className='header-root'>User List</h1>
                    <div className='toolbar-root'>
                        <UserListForm></UserListForm>
                    </div>
                        <UserList tableHeaders={this.state.tableHeaders} tableData={this.state.tableData}></UserList>
                </div>;
    }
}

render(<App/>, document.getElementById('app'));