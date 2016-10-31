import React from 'react';
import TableRow from './user-list-table-row.component.js';
import TableBody from './user-list-table-body.component.js';

const tableHeaders = ['ID', 'User name', 'Post title', 'Views', 'Likes', 'Created at'];

class UserList extends React.Component {
    constructor() {
        super();
        this.filterByName = this.filterByName.bind(this);
        this.filterTableData = this.filterTableData.bind(this);
        this.state = {
            filterQuery: ''
        };
    }

    filterByName(event) {
        this.setState({
            filterQuery: event.target.value.toLowerCase()
        });
    }

    filterTableData() {
        return this.props.tableData.filter((entry) => {
            return entry.username.toLowerCase().indexOf(this.state.filterQuery) !== -1;
        });
    }

    render() {
        return <div>
                    <table className='user-list-table'>
                        <thead>
                            <TableRow tableData={tableHeaders}></TableRow>
                        </thead>
                        <TableBody tableRows={this.filterTableData()}></TableBody>
                    </table>
                    <label>Filter by name
                        <input value={this.state.filterQuery} onChange={this.filterByName} type="text"></input>
                    </label>
                </div>
    }
}

export default UserList;