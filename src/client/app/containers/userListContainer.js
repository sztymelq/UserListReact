import React from 'react';
import { connect } from 'react-redux'
import actions from '../actions/actions'
import UserListComponent from '../components/user-list.component.js';


function filterTableData(userData, filterQuery) {
    if (!filterQuery) return userData;

    return userData.filter((entry) => {
        return entry.username.toLowerCase().indexOf(filterQuery) > -1;
    });
}

function reduceDataToPage(data, limitTo, pageNo) {
    const limit = Number(limitTo);
    const start = Number(pageNo) * limit;
    return data.slice(start, start + limit);
}

function computePaginationConfig(tableData, pagination) {
    return {
        activePage: pagination.pageNo + 1,
        pagesQuantity: Math.ceil(tableData.length / pagination.limitTo),
        limitTo: pagination.limitTo
    }
}

const stateProps = (state) => {
    const filteredData = filterTableData(state.usersData, state.filter);

    return {
        usersData: reduceDataToPage(filteredData, state.pagination.limitTo, state.pagination.pageNo),
        pagination: computePaginationConfig(filteredData, state.pagination),
        activeUser: state.activeUser
    }
};

const methodsProps = (dispatch) => {
    return {
        addEntry: (entry) => {
            dispatch(actions.addEntry(entry));
        },
        filterTable: (query) => {
            dispatch(actions.filterEntries(query))
        },
        sortTable: (by, desc) => {
            dispatch(actions.sortTable({
                by: by,
                desc: desc
            }))
        },
        selectPage: (number) => {
            dispatch(actions.selectPage(number))
        },
        changeTableLimit: (limit) => {
            dispatch(actions.changeTableLimit(limit))
        }
    }
};

const userListContainer = connect(
    stateProps,
    methodsProps
)(UserListComponent);

export default userListContainer;