This is a sample React Project
====================================================================
This project demonstrate how to use React to build web pages.
In this project, you will find how to render with React on both server side and client side.


About React
----------------

Checkout React here: [https://facebook.github.io/react/](https://facebook.github.io/react/)



How to run the project
----------------------

> Please install Node.js (version 0.12 or above) to run this project.

Steps:

1. After cloning or forking this project, run `npm install` to install dependencies.

2. Run `gulp` to build the project.

3. After building with `gulp`, gulp will watch for code changes.

4. You may now browse to `http://127.0.0.1:8088/`.


This project can be started with `npm start`.



Reference
----------------------

#### Setting defaults
Pre-populates this.state.comments and this.props.name.
```
React.createClass({
  getInitialState: function () {
    return { comments: [] };
  },

  getDefaultProps: function () {
    return { name: "Hello" };
  }
);
```


#### Mounting
Before initial rendering occurs. Add your DOM stuff on didMount (events, timers, etc). See reference.
```
componentWillMount()
componentDidMount()
```


#### Updating
Called when parents change properties and .setState(). These are not called for initial renders. See reference.
```
componentWillReceiveProps(newProps={}) 	            Use setState() here
shouldComponentUpdate(newProps={}, newState={}) 	  Skips render() if returns false
componentWillUpdate(newProps={}, newState={}) 	    Can’t use setState() here
componentDidUpdate(prevProps={}, prevState={}) 	    Operate on the DOM here
```


#### Unmounting
Clear your DOM stuff here (probably done on didMount). See reference.
```
componentWillUnmount() 	Invoked before DOM removal
```


