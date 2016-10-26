import React from 'react';
import TableRow from './user-list-table-row.component.js';

class UserListTableBody extends React.Component {
    render() {
        const tableRows = this.props.tableRows.map(function(record, index) {
            return <TableRow key={index} tableData={record}></TableRow>;
        });

        return <tbody key={'UserListTableBody'}>{tableRows}</tbody>
    }
}

export default UserListTableBody;