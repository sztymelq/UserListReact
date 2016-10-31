import actions from '../actions/actions.js'

export default function (state = [], action = {}) {
    console.log('Reducer: state', state);
    console.log('Reducer: action', action);

    switch (action.type) {
        case actions.constants.NEW_ENTRIES:
            state = [].concat(decorateDates(action.data));
            break;
        case actions.constants.ENTRY_ADDED:
            state = [].concat(action.data).concat(state);
            break;
        default:
            break;
    }

    function decorateDates(data) {
        return data.map((entry) => {
            entry.created = new Date(entry.created).toString();
            return entry;
        })
    }

    return state;
}