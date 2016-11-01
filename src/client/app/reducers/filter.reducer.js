import actions from '../actions/actions.js'

export default function (state, action) {
    if (typeof state === 'undefined') return '';
    if (action.type !== actions.constants.FILTER_ENTRIES) return state;

    return action.data;
}