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
      <div>
        <EmptyRow h="30"></EmptyRow>

        <div className="row footer-bg">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="text-center footer-text">
              <span className="text-nowrap">&copy; {copyRight}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = footer;
