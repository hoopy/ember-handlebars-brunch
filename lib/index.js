// Generated by CoffeeScript 1.4.0
(function() {
  var EmberHandlebarsCompiler, compileHBS, fs, sysPath;

  sysPath = require('path');

  fs = require('fs');

  compileHBS = require('./ember-handlebars-compiler');

  module.exports = EmberHandlebarsCompiler = (function() {

    EmberHandlebarsCompiler.prototype.brunchPlugin = true;

    EmberHandlebarsCompiler.prototype.type = 'template';

    EmberHandlebarsCompiler.prototype.extension = 'hbs';

    EmberHandlebarsCompiler.prototype.precompile = false;

    EmberHandlebarsCompiler.prototype.root = null;

    function EmberHandlebarsCompiler(config) {
      this.config = config;
      if (this.config.files.templates.precompile === true) {
        this.precompile = true;
      }
      if (this.config.files.templates.root != null) {
        this.root = sysPath.normalize(this.config.files.templates.root);
        if (this.root[this.root.length - 1] !== sysPath.sep) {
          this.root += sysPath.sep;
        }
      }
      null;
    }

    EmberHandlebarsCompiler.prototype.compile = function(data, path, callback) {
      var content, error, result, tmplName;
      try {
        tmplName = "Ember.TEMPLATES[module.id.replace('" + this.root + "','')]";
        if (this.precompile === true) {
          content = compileHBS(data.toString());
          return result = "module.exports = " + tmplName + " = Ember.Handlebars.template(" + content + ");";
        } else {
          content = JSON.stringify(data.toString());
          return result = "module.exports = " + tmplName + " = Ember.Handlebars.compile(" + content + ");";
        }
      } catch (err) {
        return error = err;
      } finally {
        callback(error, result);
      }
    };

    return EmberHandlebarsCompiler;

  })();

}).call(this);