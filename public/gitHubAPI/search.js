const http = require("https");
const config = require('./config');

export class GitHubAPI {
    getGits() {
        let gits = []
        let options = {
            "protocol": "https:",
            "hostname": "api.github.com",
            "family": '4',
            "path": "/search/users?q=location:portland&per_page=10",
            "headers": {
                "header": "application/vnd.github.v3+json",
                "User-Agent": config
            }
        };

        let req = http.get(options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                var body = Buffer.concat(chunks);
                var results = JSON.parse(body).items;
                console.log(results);
                results.forEach(result => {
                    gits.push(result);
                    console.log(result.login);
                });
            });
        });
        return gits;
        req.end();
    }
}