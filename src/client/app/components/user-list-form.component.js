import React from 'react';
import store from '../store/store.js';
import constants from '../store/store-constants.js';

class userListForm extends React.Component {
    constructor() {
        super();
        this.send = this.send.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePostTitleChange = this.handlePostTitleChange.bind(this);
        this.state = {
            username: '',
            postTitle: ''
        }
    }

    send() {
        console.log('this.state.postTitle', this.state.postTitle);
        if (!this.state.username || !this.state.postTitle) return;

        store.dispatch({type: constants.events.ENTRY_ADDED, data: this.createRandomEntry()});
    }

    createRandomEntry() {
        return {
            id: randomInt(1000),
            likes: randomInt(1000),
            postTitle: this.state.username,
            username: this.state.postTitle,
            views: randomInt(1000),
            created: new Date().toString()
        };

        function randomInt(boundary) {
            return Math.floor(Math.random() * boundary);
        }
    }

    handleUsernameChange(event) {
        console.log('handle change', event.target);

        this.setState({
            username: event.target.value
        });
    }
    handlePostTitleChange(event) {
        console.log('handle change', event.target);

        this.setState({
            postTitle: event.target.value
        });
    }

    render() {
        return <div>
                    <label>User name<input value={this.state.username} onChange={this.handleUsernameChange} type="text"></input></label>
                    <label>Post title<input value={this.state.postTitle} onChange={this.handlePostTitleChange} type="text"></input></label>
                    <button onClick={this.send}>Add entry</button>
                </div>
    }
}

export default userListForm;