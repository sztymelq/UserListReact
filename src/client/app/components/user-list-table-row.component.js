import React from 'react';

class UserListTableRow extends React.Component {
    render() {
        const data = this.props.tableData;

        const tableData = Object.keys(data).map(function(record, index) {
            return <td key={index}>{data[record]}</td>;
        });

        return <tr>{tableData}</tr>
    }
}

export default UserListTableRow;