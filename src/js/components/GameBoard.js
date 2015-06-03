var React = require('react');

var GameBoard = React.createClass({
  getInitialState: function() {
    // hold all game state here
    return {
      'playerDeck': [1,2,3],
      'enemyDeck': [1,2,3],
      'playerHand': [1,9,3],
      'enemyHand': [1,2,3]
    }
  },
  render: function() {
    return (
      <div>
      Game Board
      </div>
    );
  }

});

module.exports = GameBoard;