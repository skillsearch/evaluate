var express = require('express');
const bodyParser = require('body-parser')
var compression = require('compression');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(express.static('dist'));

app.get('/api/testdata',function(req, res) {
    res.json([
        {'id': 1, 'name': 'qwe1'},
        {'id': 2, 'name': 'qwe2'},
    ]);
});

app.get("/api/questions", (req, res) => {	

    const questionAnswerList = require("./questions.json").questionAnswerList;
	
	// future feature to filter by front end back end sql etc..
	var filteredQuestionList = [];	

	for (var i = 0; i < questionAnswerList.length; i++){	
		
		var questionAnswerItem = {
			questionType : questionAnswerList[i].questionType, 
			questionList : []
		};				

		for(var j = 0; j < questionAnswerList[i].questionList.length; j++ ){
			
			questionAnswerItem.questionList[j] = questionAnswerList[i].questionList[j];
			delete questionAnswerItem.questionList[j].correctAnswer;
			
		}
		
		filteredQuestionList.push(questionAnswerItem);
		
	}
	
    res.send(filteredQuestionList);  
});

app.post("/api/invite", (req, res) => {
    console.log("invite api", req.body);

    const { recruiterEmail, candidateEmail } = req.body;
    const base64Emails = new Buffer(`${recruiterEmail}/${candidateEmail}`).toString("base64");

    //console.log(new Buffer(base64Emails, 'base64').toString("ascii"));
    res.send(base64Emails);
});

app.post('/api/save-answers', function (req, res) {
    let { invitationCode, answers } = req.body;
    let joinedEmails = Buffer.from(invitationCode, 'base64').toString();
    let emails = joinedEmails.split('/');
    let recruiterEmail = emails[0];
    let candidateEmail = emails[1];
    console.log(recruiterEmail, candidateEmail, answers);
});

// For all GET requests, send back index.html so that Angular's PathLocationStrategy can be used.
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
    if (!err) {
        console.log('Express server is running on port ' + port);
    } else {
        console.log(err);
    }
});