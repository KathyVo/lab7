var projects = require('../projects.json');

/*
 * GET home page.
 */
var myVar;
exports.view = function(req, res){

  	projects['grid'] = false;
  	myVar = projects['grid'];
  	console.log(myVar);
  	res.render('index', projects);
};

exports.viewGrid = function(req, res) {
	projects['grid'] = true;
	myVar = projects['grid'];
  	console.log(myVar);
  	res.render('index', projects);
}