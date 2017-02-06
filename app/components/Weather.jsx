var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var apixu = require('apixu');

var Weather  = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  onCityChanged: function (city) {
    this.setState({
      isLoading: true
    });

    var that = this;

    apixu.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp
      })
    }, function (err) {
      alert(err);
    }).then(function() {
      that.setState({
        isLoading: false
      });
    });
  },
  render: function () {
    var {isLoading, city, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Loading ...</h3>;
      } else if (city && temp) {
        return <WeatherMessage city={city} temp={temp} />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onCityChanged={this.onCityChanged}></WeatherForm>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
