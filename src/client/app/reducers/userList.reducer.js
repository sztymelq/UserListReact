import actions from '../actions/actions.js'
import moment from 'moment';

export default function (state, action) {
    if (typeof state === 'undefined') return [];

    switch (action.type) {
        case actions.constants.NEW_ENTRIES:
            state = [].concat(formatDates(action.data));
            break;
        case actions.constants.ENTRY_ADDED:
            state = [].concat(formatDates([action.data])).concat(state);
            break;
        case actions.constants.SORT_TABLE:
            console.log('action.data', action.data);
            state = sortTable([].concat(state), action.data.by, action.data.desc);
            break;
        default:
            break;
    }

    function sortTable(target, sortedProperty, desc) {
        return target.sort(compareFn);

        function compareFn(a, b) {
            if (desc) return a[sortedProperty] > b[sortedProperty];
            return a[sortedProperty] < b[sortedProperty];
        }
    }

    function formatDates(data) {
        return data.map((entry) => {
            entry.created = moment(entry.created).format('l');
            return entry;
        })
    }

    return state;
}