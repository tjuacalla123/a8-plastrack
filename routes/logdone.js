var logpageData = require('../logpageData.json');

exports.view = function(req, res){
  res.render('logdone.handlebars', logpageData);
};
