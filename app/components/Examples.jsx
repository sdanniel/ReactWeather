var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are few examples to try out:</p>
        <ol>
          <li>
            <Link to="/?location=Ramat-Gan">Ramat-Gan</Link>
          </li>
          <li>
            <Link to="/?location=Moscow">Moscow</Link>
          </li>
        </ol>
      </div>
    );
};

module.exports = Examples;
