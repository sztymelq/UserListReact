import actions from '../actions/actions.js';

export default function (state, action) {
    if (typeof state === 'undefined') return {
        limitTo: 5,
        pageNo: 0
    };

    if (action.type !== actions.constants.PAGE_SELECTED) return state;

    const pageNoSelected = action.data - 1;
    return Object.assign({}, state, {
        pageNo: pageNoSelected
    });
}