var React = require('react');

var WeatherMessage = ({city, temp}) => {
    return (
        <h3>Fuck, it is {temp} now in {city}</h3>
    );
};

module.exports = WeatherMessage;
