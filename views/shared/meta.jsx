var React = require('react');

var header = React.createClass({
  render: function() {
    const boostrapCss = {
      href: this.props.prefix+"css/bootstrap.css"
    };
    const navBarFixedTopCss = {
      href: this.props.prefix+"css/navbar-fixed-top.css"
    };
    const homeCss = {
      href: this.props.prefix+"css/home.css"
    };
    const jqueryMinJs = {
      src: this.props.prefix+"js/vendor/jquery/jquery.min.js"
    };

    return (
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="FYCD Team" />
        <title>{this.props.title} | Home</title>
        <link rel="icon" href="img/ico.png" />
        <link href={boostrapCss.href} rel="stylesheet" />
        <link href={navBarFixedTopCss.href} rel="stylesheet" />
        <link href={homeCss.href} rel="stylesheet" />
        <script src={jqueryMinJs.src}></script>

      </head>
    );
  }
});

module.exports = header;
