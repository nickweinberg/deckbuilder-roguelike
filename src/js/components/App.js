var React = require('React');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Parent = require('./Parent');


var App = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <div className="inner-container">
          <Parent />
          <RouteHandler />
          <div> FOOTER </div>
        </div>
      </div>
    )
  }
});

module.exports = App;