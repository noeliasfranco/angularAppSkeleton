/**
 * Created with JetBrains WebStorm.
 * Date: 10/22/13
 * Time: 11:49 AM
 */
/*jslint node: true, stupid: true  */
module.exports = function (app, shouldLoadLocalModels) {
  "use strict";
  var fs = require('fs'),
    path = require('path'),
    log = app.mcpGlobals.log;

  app.mcpGlobals.models = app.mcpGlobals.models || [];

  fs.readdirSync(__dirname).forEach(function (fileName) {     // JSLint doesn't like sync methods, hence stupid:true
    if ((fileName !== "index.js" && fileName.charAt(0) !== "_") || (fileName.charAt(0) === "_" && shouldLoadLocalModels)) {
      var model = require(path.join(__dirname, fileName))(app);
      if (model && model.name) {
        log.info('Loading model: ' + model.name);
        app.mcpGlobals.models[model.name] = model;
      }
    }
  });
};
