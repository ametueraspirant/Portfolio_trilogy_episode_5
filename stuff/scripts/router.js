module.exports = function(app) {
	app.get("/", function(req, res)
	{
		res.render("index");
	});

	app.get("/projects", function(req, res)
	{
		res.render("projects");
	});

	app.get("/blog", function(req, res)
	{
		res.render("blog");
	});

	app.get("/blogin", function(req, res)
	{
		res.render("blogin");
	});
}