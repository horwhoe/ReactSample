var React = require('react');
var EmptyRow = require('../common/emptyRow');

var footer = React.createClass({
  propTypes: {
    prefix: React.PropTypes.string
  },

  render: function() {
    const year = (new Date()).getFullYear();
    const copyRight = '1990 - '+year+' Copyrights';

    return (
      <div className="text-center">
        <h1>This is the header</h1>
      </div>
    );
  }
});

module.exports = footer;
