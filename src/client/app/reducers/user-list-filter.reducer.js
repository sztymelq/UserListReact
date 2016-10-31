import actions from '../actions/actions.js'

export default function (state='', action = {}) {
    const merged = [state];
    //console.log('filter reducer', action);

    switch (action.type) {
        case 'FILTER_TABLE':
            console.log('filter table', action);

            break;
        default:
            break;
    }

    return Object.assign({}, ...merged);

    function addToMerged(newState) {
        merged.push(newState);
    }
}