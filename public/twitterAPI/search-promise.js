var Twit = require('twit');

var config = require('./config')

var T = new Twit(config);

var params = {
    f: 'users',
    q: 'portland',
    count: '20'
}

var pages = 6; //set pages to increase amount of results received by increments of 20

function searchedData(err, data, response) {
    return data;
}

console.log('first');

twitters = function (params) {
    return new Promise((resolve, reject) =>
        T.get('users/search', params, function (err, data, response) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    )
}

let multiDataLists = [];

(async function loop() {
    multiDataLists;
    for(let i = 1; i <= pages; i++){
        params.page = i;
        await twitters(params).then((result) => {
            multiDataLists.push(result);
        });
    }
    console.log(multiDataLists.length);
})();

console.log('third');
