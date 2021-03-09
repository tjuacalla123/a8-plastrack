var logpageData = require('../logpageData.json');

exports.view = function(req, res){
  res.render('logpage.handlebars', logpageData);
};

