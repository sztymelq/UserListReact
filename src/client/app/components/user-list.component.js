import React from 'react';
import TableRow from './user-list-table-row.component.js';
import TableBody from './user-list-table-body.component.js';
import UserListForm from './user-list-form.component.js';

const tableHeaders = ['ID', 'User name', 'Post title', 'Views', 'Likes', 'Created at'];

class UserList extends React.Component {
    constructor() {
        super();
        this.filterByName = this.filterByName.bind(this);
        this.state = {
            filterQuery: ''
        };
    }

    filterByName(event) {
        const filterValue = event.target.value.toLowerCase();
        this.setState({
            filterQuery: filterValue
        });
        this.props.filterTable(filterValue);
    }

    render() {
        return <div>
            <UserListForm addEntry={this.props.addEntry}></UserListForm>
            <table className='user-list-table'>
                <thead>
                <TableRow tableData={tableHeaders}></TableRow>
                </thead>
                <TableBody tableRows={this.props.usersData}></TableBody>
            </table>
            <label>Filter by name
                <input value={this.state.filterQuery} onChange={this.filterByName} type="text"></input>
            </label>
        </div>
    }
}

export default UserList;