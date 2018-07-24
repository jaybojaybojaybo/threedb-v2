const http = require("https");
const config = require('./config');

$(() => {
    const words = document.querySelector('.words');
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
            let output = [];
            results.forEach(result => {
                output.push(result);
                let gitP = document.createElement('p');
                words.appendChild(gitP);
            });
        });
    });
    
    req.end();
})
