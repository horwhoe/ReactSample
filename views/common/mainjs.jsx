var React = require('react');

var mainJs = React.createClass({
  propTypes: {
    prefix: React.PropTypes.string
  },

  render: function() {
    const bootstrapMinJs = {
      src: this.props.prefix+"js/vendor/bootstrap/bootstrap.min.js"
    };
    const homeJs = {
      src: this.props.prefix+"js/home.js"
    };

    return (
      <div>
        <script src="/js/vendor/react/react-0.10.0.min.js"></script>
        <script src={bootstrapMinJs.src}></script>
        <script src={homeJs.src}></script>
        <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script src="/js/bundle.js"></script>
      </div>
    );
  }
});

module.exports = mainJs;
