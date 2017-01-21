var axios = require('axios');

const URL = 'https://api.apixu.com/v1/current.json?key=f7baec693d7e4cf1bc7193517172001';

module.exports = {
  getTemp: function (city) {
    var encodedCity = encodeURIComponent(city);

    return axios.get(`${URL}&q=${encodedCity}`).then(function (res) {
      if (res.data.error) {
        throw new Error(res.data.error.message);
      }
      return res.data.current.temp_c;
    }, function (err) {
      throw new Error(err.error.message);
    });
  }
};
