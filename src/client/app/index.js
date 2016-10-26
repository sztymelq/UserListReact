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
        this.send = this.send.bind(this);
    }

    onNewData() {
        const newData = store.getState();

        this.setState({
            tableData: newData.tableData
        })
    }

    send() {
        store.dispatch({type: constants.events.ENTRY_ADDED, data: {
            id: 555,
            likes: 555,
            postTitle: 'wow',
            username: 'Sztymel',
            views: 10000,
            created: 'Wed Oct 26 2016 08:23:45'
        }});
    }

    render() {
        return <div className='root'>
                    <h1 className='header-root'>User List for Callstack</h1>
                    <div className='toolbar-root'>
                        <UserListForm></UserListForm>
                        <button onClick={this.send}>Add entry</button>
                    </div>
                        <UserList tableHeaders={this.state.tableHeaders} tableData={this.state.tableData}></UserList>
                </div>;
    }
}

render(<App/>, document.getElementById('app'));