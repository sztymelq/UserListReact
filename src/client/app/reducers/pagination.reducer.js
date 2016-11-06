import actions from '../actions/actions.js';
const defaultPageLimit = 5;

export default function (state, action) {
    if (typeof state === 'undefined') return {
        limitTo: window.localStorage.pageLimit || defaultPageLimit,
        pageNo: 0
    };

    let paginationConfig = {};

    switch (action.type) {
        case actions.constants.PAGE_SELECTED:
            const pageNumberSelected = action.data - 1;
            setPagination({
                pageNo: pageNumberSelected
            });
            //paginationConfig = {
            //    pageNo: pageNumberSelected
            //};
            break;
        case actions.constants.TABLE_LIMIT_CHANGED:
            setPageLimit(action.data);
            setPagination({
                limitTo: action.data,
                pageNo: 0
            });
            //paginationConfig = {
            //    limitTo: action.data,
            //    pageNo: 0
            //};
            break;
        case actions.constants.FILTER_ENTRIES:
            setPagination({
                pageNo: 0
            });
            //paginationConfig = {
            //    pageNo: 0
            //};
            break;
        default:
            break;
    }

    return Object.assign({}, state, paginationConfig);

    function setPagination(config) {
        paginationConfig = config;
    }

    function setPageLimit(limit) {
        window.localStorage.pageLimit = limit;
    }

}