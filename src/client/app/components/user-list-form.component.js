import React from 'react';

class userListForm extends React.Component {
    render() {
        return <form>
                    <label>User name<input type="text"></input></label>
                    <label>Post title<input type="text"></input></label>
                </form>
    }
}

export default userListForm;