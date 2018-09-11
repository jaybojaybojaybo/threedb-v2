const Twit = require('twit');
const twitterConfig = require('../config/twitter-config');
const T = new Twit(twitterConfig);

export default class TwitterAPI {
    getTwits() {
    const output = []

    const params = {
        f: 'users',
        q: 'portland',
        count: '10'
    }

    let pages = 1; //set pages to increase amount of results received by increments of 20

    function searchedData(err, data, response) {
        return data;
    }

    console.log('first');

    let twitters = function (params) {
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
        for (let i = 1; i <= pages; i++) {
            params.page = i;
            await twitters(params).then((result) => {
                multiDataLists.push(result);
                console.log(result[0].name)
            });
        }
        console.log(multiDataLists.length);
        this.output = await multiDataLists;
        return this.output;
    })();


    console.log('third');
    }
}
// getTwits();
