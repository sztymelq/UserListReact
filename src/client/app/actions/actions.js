const constants = Object.freeze({
    ENTRY_ADDED: 'USER_LIST_ENTRY_ADDED',
    NEW_ENTRIES: 'USER_LIST_NEW_ENTRIES',
    FILTER_ENTRIES: 'FILTER_ENTRIES',
    SORT_TABLE: 'SORT_TABLE'
});

const actions = {
    addNewEntries: (data) => ({type: constants.NEW_ENTRIES, data}),
    addEntry: (data) => ({type: constants.ENTRY_ADDED, data}),
    filterEntries: (data) => ({type: constants.FILTER_ENTRIES, data}),
    sortTable: (data) => ({type: constants.SORT_TABLE, data}),
    constants

};

export default actions;