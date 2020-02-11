module.exports = function(app, mongojs) {
	const database = "blog_db";
	var collections = ["posts"];
	var db = mongojs(database, collections);

	db.on("error", function(error) {
	console.log("Database Error:", error);
	});
}
