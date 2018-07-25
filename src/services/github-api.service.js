import axios from 'axios';
import gitHubConfig from '../config/git-hub-config'

export default class GitHub {
    getGits() {

        axios.options({
            "protocol": "https:",
            "hostname": "api.github.com",
            "family": '4',
            "path": "/search/users?q=location:portland&per_page=10",
            "headers": {
                "header": "application/vnd.github.v3+json",
                "User-Agent": gitHubConfig
            }
        });

        return axios.get('https://api.github.com/search/users?q=location:portland&per_page=10')
          .then(function (response) {
            let result = response.data
            // console.log(result)
            return result
          })
          .catch(function(error) {
            console.log(error)
          })
    }
}
