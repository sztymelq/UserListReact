import tableData from './table-data.js';

const dataService = {
    getAll
};


function getAll() {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(tableData), 2000);
    });
}

export default dataService;