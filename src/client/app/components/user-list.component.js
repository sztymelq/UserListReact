import React from 'react';
import TableRow from './user-list-table-row.component.js';
import TableBody from './user-list-table-body.component.js';

class UserList extends React.Component {
    render() {
        return <table className='user-list-table'>
                    <thead>
                        <TableRow tableData={this.props.tableHeaders}></TableRow>
                    </thead>
                        <TableBody tableRows={this.props.tableData}></TableBody>
                </table>
    }
}

export default UserList;