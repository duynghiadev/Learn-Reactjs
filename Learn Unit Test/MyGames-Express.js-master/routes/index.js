var gamesJSON = require('../games.json');


// home
exports.home = function(req, res) {
	
	var games = gamesJSON.games;

	res.render('home', {
		title : "KovDimaY Games",
		games : games
	});
};

// games
exports.games =  function(req, res){
	var game_number = req.params.game_number;
	var games = gamesJSON.games;

	if (game_number >= 1 && game_number <= games.length){
		var game = games[game_number - 1];
		var title = game.title;
		var main_characters = game.main_characters;

		res.render('game_single', {
			games : games,
			title : title,
			game : game,
			main_characters : main_characters
		});

	} else {
		res.render('notFound', {
			title : "Oops! This page does not exist yet.",
			games : games
		});
	}
	
};

// Page Not Found
exports.notFound = function(req, res) {
	var games = gamesJSON.games;
	
	res.render('notFound', {
		title : "Oops! This page does not exist yet.",
		games : games
	});
};
