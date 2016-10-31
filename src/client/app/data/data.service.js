import tableData from './table-data.js';

const dataService = {
    fetch
};

function fetch() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(tableData), 2000);
    });
}

export default dataService;