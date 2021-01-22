const fs = require('fs');
const catsData = require('./cats.json');
const cats = catsData.slice();

function add(name) {
    cats.push(name);

    fs.writeFile('./cats.json', JSON.stringify(cats), (err) => {
        if (err) {
            console.log('Some error' + err);
            return;
        }
        console.log('Successful write!!!');
    })
};

function getAll() {
    return cats.slice();
};

module.exports = {
    add,
    getAll,
};