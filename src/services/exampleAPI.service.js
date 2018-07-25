const axios = require('axios')

export default class Example {
    getExamples() {
        let result = []
        return axios.get('https://jsonplaceholder.typicode.com/users')
          .then(function (response) {
            result = response.data
            // console.log(result)
            return result
          })
          .catch(function(error) {
            console.log(error)
          })
    }
}