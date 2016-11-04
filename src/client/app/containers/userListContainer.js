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

const mapStateToProps = (state) => {
    return {
        usersData: filterTableData(state.usersData, state.filter)
    }
};

const mapDispatchToProps = (dispatch) => {
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
        }
    }
};

const userListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListComponent);

export default userListContainer;