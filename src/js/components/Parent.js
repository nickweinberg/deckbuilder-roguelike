var React = require('React');
var Card = require('./Card');

var Parent = React.createClass({

    render: function() {
        return (
            <div>
              Parent component.
              <Card />
            </div>
        );
    }

});

module.exports = Parent;