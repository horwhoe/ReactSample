var React = require('react');

var emptyRow = React.createClass({
  render: function() {
    //const height = 'height: ' + this.props.h + 'px';
    var he = {
      height: this.props.h + 'px'
    }

    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12" style={he} />
      </div>
    );
  }
});

module.exports = emptyRow;
