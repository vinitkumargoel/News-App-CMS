module.exports = {
	welcome: function(req, res){
		let dataset = req.body;
		console.log(dataset);
		res.send("Hello World!(you are using the "+req.method+")");
	},
	test: function(ep){
		return function(req, res, next){
			res.append("Test","End point"+ep+" working!");
			next();
		}
	}
};

