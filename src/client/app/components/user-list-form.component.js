import React from 'react';

class userListForm extends React.Component {
    constructor() {
        super();
        this.addNewEntry = this.addNewEntry.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.changeTableLimit = this.changeTableLimit.bind(this);
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
            created: new Date()
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

    changeTableLimit(event) {
        const limit = event.target.value;
        console.log('limit', limit);
        this.props.changeTableLimit(limit);
    }

    render() {
        return <div className='user-list-form-root'>
                    <label className='label'>
                        User name
                        <input value={this.state.username} onChange={this.onUsernameChange} className='input' type="text"></input>
                    </label>
                    <label className='label'>
                        Post title
                        <input value={this.state.postTitle} onChange={this.onTitleChange} className='input' type="text"></input>
                    </label>
                    <label className='label'>
                        Limit to
                                <span className='select'>
                                    <select value={this.props.tableLimit}
                                            onChange={this.changeTableLimit}>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select>
                                </span>
                    </label>
                    <button onClick={this.addNewEntry} className='button'>Add entry</button>
                </div>
    }
}

export default userListForm;