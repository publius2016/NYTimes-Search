module.exports = (app, bodyParser, logger, Article) => {

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  }); // END GET FOR INDEX

  app.get("/api", (req, res) => {

    Article.find({}).sort([
      ["date", "descending"]
    ]).limit(10).exec(function(err, saved) {
      if (err) {
        console.log(err);
      } else {
        res.send(saved);
      }
    });
  }); // END GET FOR SAVED ARTICLES

}; // END MODULE.EXPORTS
