import actions from '../actions/actions.js';

export default function (state, action) {
    if (typeof state === 'undefined') return {
        limitTo: 5,
        pageNo: 0
    };

    switch (action.type) {
        case actions.constants.PAGE_SELECTED:
            const pageNoSelected = action.data - 1;
            return Object.assign({}, state, {
                pageNo: pageNoSelected
            });
        case actions.constants.TABLE_LIMIT_CHANGED:
            console.log('TABLE_LIMIT_CHANGED', action.data);
            return Object.assign({}, state, {
                limitTo: action.data
            });
        default:
            return state;
    }
}