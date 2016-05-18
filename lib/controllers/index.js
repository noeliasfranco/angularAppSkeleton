/*jslint node: true, stupid: true */
"use strict";
module.exports = function (app, modName) {
  var fs = require('fs'),
    path = require('path'),
    async = require('async'),
    log = app.mcpGlobals.log;

  app.mcpGlobals.controllers = app.mcpGlobals.controllers || [];

  fs.readdirSync(__dirname).forEach(function (fileName) {  // JSLint doesn't like sync methods, hence stupid:true
    if (fileName !== "index.js" && path.extname(fileName) === '.js') {
      var controller = require(path.join(__dirname, fileName))(app, modName);
      if (controller && controller.name) {
        log.info('Loading controller: ' + controller.name);
        app.mcpGlobals.controllers[controller.name] = controller;
        if (typeof controller.initController === 'function') {
          async.series([
            function (callback) {
              controller.initController(callback);
            }],
            function (error) {
              if (error) {
                console.log('error initializing ' + controller.name + ' ' + error);
              }
            });
        }
      }
    }
  });
};
