var data = require('../data.json');

exports.addFriend = function(req, res){

	var newFriend = {
		"name" : req.query.name,
		"occupation" : req.query.occupation,
		"title1" : "NAME",
		"title2" : "OCCUPATION"
	};
	data.friends.push(newFriend);
 	res.render('settings.handlebars', data);
};