var React = require('react');
var Meta = require('./../shared/meta');
var Header = require('./../shared/header');
var Footer = require('./../shared/footer');
var MainJs = require('./../common/mainjs');
var EmptyRow = require('../common/emptyRow');
//var Table = require('../common/table');
import  Table  from '../common/table';

var Layout = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    const prefix = '';
    return (
        <html lang='en-us'>

          <Meta prefix={prefix} title={this.props.title}></Meta>

          <body>

            <Header />

            <EmptyRow h="30"></EmptyRow>

            <div className="text-center">
              <h3>There is nothing here!</h3>
            </div>

            <EmptyRow h="30"></EmptyRow>

            <Footer prefix={prefix}></Footer>

            <script src="/js/vendor/react/react-0.10.0.min.js"></script>

            <MainJs prefix={prefix}></MainJs>

          </body>
        </html>
    );
  }
});

module.exports = Layout;
