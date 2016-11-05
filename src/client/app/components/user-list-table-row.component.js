import React from 'react';
import moment from 'moment';

function formatDate(data) {
    return moment(data).format('l');
}

class UserListTableRow extends React.Component {
    render() {
        const data = this.props.tableData;

        const tableData = Object.keys(data).map(function(record, index) {
            let cellContent = data[record];
            if (typeof cellContent === 'object') cellContent = formatDate(cellContent);

            return <td key={index}>{cellContent}</td>;
        });

        return <tr>{tableData}</tr>
    }
}

export default UserListTableRow;