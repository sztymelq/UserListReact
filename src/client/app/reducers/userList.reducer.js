import actions from '../actions/actions.js'


export default function (state, action) {
    console.log(action, state);

    if (typeof state === 'undefined') return [];

    switch (action.type) {
        case actions.constants.NEW_ENTRIES:
            state = [].concat(convertDates(action.data));
            break;
        case actions.constants.ENTRY_ADDED:
            state = [].concat(action.data).concat(state);
            break;
        case actions.constants.SORT_TABLE:
            state = sortTable([].concat(state), action.data.by, action.data.desc);
            break;
        default:
            break;
    }

    function sortTable(target, sortedProperty, desc) {
        return target.sort(compare);

        function compare(a, b) {
            const result = a[sortedProperty] < b[sortedProperty] ? 1 : -1;

            if (desc) return result;
            else return -result;
        }
    }

    function convertDates(data) {
        return data.map((entry) => {
            entry.created = new Date(entry.created);
            return entry;
        })
    }

    return state;
}