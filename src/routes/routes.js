'use strict';

//var express = require('express');
var _ = require('lodash');

//var app = express();
//var mongoose = require("mongoose");

//var u = () => {'use strict'; return [1,2,4].map(x => x * x) };

module.exports = function(app) {
    app.get('/', function (req, res, next) {
        res.render('home/index', {
            title: 'My Main Page'
        });
    });

    //app.get('/vege', function (req, res, next) {
    //    res.render('vege/vegeIndex', { title: '素食廣場', loggedIn : getLoginStatus(req) });
    //});

    //app.get('/login', function (req, res, next) {
    //    if (req.user) {
    //        redirectAfterLogin(req, res);
    //    }
    //    res.render('home/login', { title: '登入', loggedIn : getLoginStatus(req) });
    //});

    //app.get('/logout', function(req, res, next) {
    //    req.logout();
    //    console.log('islogout==='+req.isUnauthenticated());
    //    res.redirect('/');
    //});

    //app.post('/authenticate',
    //  passport.authenticate('local', { failureRedirect: '/login' }),
    //  function (req, res) {
    //      if (req.user) {
    //          redirectAfterLogin(req, res);
    //      }
    //  }
    //);

    //app.get('/admin', function (req, res, next) {
    //    if (req.user) {
    //        if (req.user.admin && req.user.admin === 'admin') {
    //            res.render('admin/index', { title: 'Admin Page', loggedIn : getLoginStatus(req) });
    //        } else {
    //            res.redirect('/');
    //        }
    //    } else {
    //        res.redirect('/login');
    //    }
    //});

    app.get('/new', function (req, res) {
        var html = "<html><body>Happy Page</body></html>";
        res.end(html);
    });
};