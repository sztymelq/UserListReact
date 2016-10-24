import React from 'react';
import {render} from 'react-dom';
import UserList from './components/user-list.component.js';
import storeService from './store.js';

const store = storeService();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.send = this.send.bind(this);
    }

    send() {
        store.dispatch({type: 'niceEvent', data: 'data!'});
        console.log('event sent!');
    }

    render () {
        return <div>
                <p> Hello React!</p>
                <UserList data={store.getState()}></UserList>
                <button onClick={this.send}>Dispatch!</button>
            </div>;
    }
}

render(<App/>, document.getElementById('app'));

