// require data
var path = require("path");
var answers = require("../data/answers.js");

module.exports = function(app){
  app.get("/api/answers", function(req,res) {
    res.json(answers);
    console.log(answers);
  });

  app.post("/api/new", function(req,res) {
    var newAnswer = req.body;
    var newScore = newAnswer.scores;
    var total;
    var best = 1000;
    var index = -1;

    for (var i = 0; i < answers.length; i++) {
      total = 0;
      for (var j = 0; j < answers[i].length; j++) {
        var diff = Math.abs(parseInt(newScore[j]) - answers[i].scores[j]);
        total+=diff;
      }
      if(total < best) {
        best = total;
        index = i;
      }
    }
    console.log("answer: "+ answers[index]);
    answers.push(newAnswer);
    res.json(answers[index]);
  });
};

