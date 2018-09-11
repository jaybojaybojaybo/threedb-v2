const http = require('http').Server();
const io = require('socket.io')(http);
const Twit = require('twit');
const config = require('./src/config/twitter-config');
const T = new Twit(config);


io.on('connection', (socket) => {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
  socket.on('newTweet', (msg) => {
    console.log(msg);
  });
  socket.on('getTwits', () => {
    // start the Twit service to get the twitter feeds for portland.
    let twitterRequest = {};
    twitterRequest.params = {
      f: 'users',
      q: 'portland',
      count: '20'
    }

    let pages = 10; //set pages to increase amount of results received by increments of 20

    function searchedData(err, data, response) {
      return data;
    }

    console.log('first');

    twitters = (params) => {
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

    twitterRequest.multiDataLists = [];

    (async function loop() {
      for (let i = 1; i <= pages; i++) {
        twitterRequest.params.page = i;
        await twitters(twitterRequest.params).then((result) => {
          twitterRequest.multiDataLists.push(result);
          console.log(result[0].name)
        });
      }
      console.log(twitterRequest.multiDataLists[0].length);
      io.emit("twitterResult", twitterRequest.multiDataLists);
    })();

    console.log('third');

  });
});

http.listen(3000, () => {
  console.log('Node server running on port 3000');
});