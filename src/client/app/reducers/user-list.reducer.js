import actions from '../actions/actions.js'
import moment from 'moment';

export default function (state = [], action = {}) {
    console.log('Reducer: state', state);
    console.log('Reducer: action', action);

    switch (action.type) {
        case actions.constants.NEW_ENTRIES:
            state = [].concat(formatDates(action.data));
            break;
        case actions.constants.ENTRY_ADDED:
            state = [].concat(formatDates([action.data])).concat(state);
            break;
        default:
            break;
    }

    function formatDates(data) {
        return data.map((entry) => {
            entry.created = moment(entry.created).format('l');
            return entry;
        })
    }

    return state;
}