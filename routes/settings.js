var settingsData = require('../data.json');

exports.view = function(req, res){
  res.render('settings.handlebars', settingsData);
};

