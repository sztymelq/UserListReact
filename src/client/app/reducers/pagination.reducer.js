import actions from '../actions/actions.js';

export default function (state, action) {
    if (typeof state === 'undefined') return {
        limitTo: 5,
        pageNo: 0
    };

    let paginationConfig;

    switch (action.type) {
        case actions.constants.PAGE_SELECTED:
            const pageNumberSelected = action.data - 1;
            paginationConfig = {
                pageNo: pageNumberSelected
            };
            break;
        case actions.constants.TABLE_LIMIT_CHANGED:
            paginationConfig = {
                limitTo: action.data
            };
            break;
        case actions.constants.FILTER_ENTRIES:
            paginationConfig = {
                pageNo: 0
            };
            break;
        default:
            return state;
            break;
    }

    return Object.assign({}, state, paginationConfig);
}