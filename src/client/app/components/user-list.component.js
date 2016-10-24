import React from 'react';

const headers = ['ID', 'User name', 'Post title', 'Views', 'Likes', 'Created at'].map(function(header) {
    return <td key={header}>{header}</td>;
});

class UserList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <table>
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>
                </tbody>
            </table>
    }
}

export default UserList;