import constants from '../store/store-constants.js';

function userListBodyReducer(state, action) {
    console.log('Reducer: state', state);
    console.log('Reducer: action', action);

    const merged = [state];

    switch (action.type) {
        case constants.events.NEW_ENTRIES:
            add({tableData: action.data});
            break;
        case constants.events.ENTRY_ADDED:
            const newTableData = state.tableData.slice();
            newTableData.push(action.data);
            add({tableData: newTableData});
            break;
        default:
            break;
    }

    return Object.assign({}, ...merged);

    function add(newState) {
        merged.push(newState);
    }
}

export default userListBodyReducer;