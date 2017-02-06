var React = require('react');

var WeatherForm = React.createClass({
  getDefaultProps: function() {
    return {
      altCity: 'Enter city here'
    }
  },
  onFormSubmit: function () {

      var city = this.refs.city.value;

      if (city.length > 0) {
        this.refs.city.value = '';
        this.props.onCityChanged(city);
      }
  },
  render: function() {
      var altCity = this.props.altCity;

      return (
          <form onSubmit={this.onFormSubmit} >
            <input type="text" ref="city"/>
            <input type="submit" className="button expanded hollow" value="Get Weather"/>
          </form>
      );
  }
});

module.exports = WeatherForm;
