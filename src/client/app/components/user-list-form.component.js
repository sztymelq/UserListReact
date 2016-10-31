import React from 'react';

class userListForm extends React.Component {
    constructor() {
        super();
        this.addNewEntry = this.addNewEntry.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.state = {
            username: '',
            postTitle: ''
        };
    }

    addNewEntry() {
        if (!this.state.username || !this.state.postTitle) return;

        this.props.addEntry(this.createRandomEntry());
    }

    createRandomEntry() {
        return {
            id: randomInt(1000),
            username: this.state.username,
            postTitle: this.state.postTitle,
            views: randomInt(1000),
            likes: randomInt(1000),
            created: new Date().toString()
        };

        function randomInt(boundary) {
            return Math.floor(Math.random() * boundary);
        }
    }

    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    onTitleChange(event) {
        this.setState({
            postTitle: event.target.value
        });
    }

    render() {
        console.log('this.props', this.props);

        return <div>
                    <label>User name
                        <input value={this.state.username} onChange={this.onUsernameChange} type="text"></input>
                    </label>
                    <label>Post title
                        <input value={this.state.postTitle} onChange={this.onTitleChange} type="text"></input>
                    </label>
                    <button onClick={this.addNewEntry}>Add entry</button>
                </div>
    }
}

export default userListForm;