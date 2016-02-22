var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var connection = new Sequelize('test_message_db', 'root', '', {
    dialect: 'mysql',
    port: 
    host: 'localhost'
});

var PORT =    ;

var app = express();

app.engine('handlebars', 'expressHandlebars'({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}));

//model
var Message = connection.define('note', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  //validation
   Validate: {
    notEmpty: true,
    len: {
      //set validation range and error message
      args: [1, 10],
      msg: 'Please enter a message that is not too long and includes at least one character'
    }
   }  
  },
  body: {
    type: Sequelize.TEXT,
    validate: {
      check: function(bodyVal) {
        if (bodyVal == "supercalifragilisticexpialidocious")
          throw new Error('Text must not be supercalifragilisticexpialidocious')
        }
      }
    }
  }
});

app.get('/', function(req, res) {
  Message.findAll({}).then(function(results) {
    res.render('home', {results});
  })
});

app.post('/entry', function(req,res) {

  var myMessage = req.body.title;
  var myText = req.body.text;
} 

Message.create({
  
})