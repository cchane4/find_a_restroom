let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let path = require('path');
let express = require('express');



let PORT = process.env.PORT || 3000;

let app = express();

let router = express.Router();


app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, '/')));



app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);


let db = process.env.MONGODB_URI || "mongodb://heroku_39bpd3x9:fpi3vpdtndh576llnefcoktutl@ds227821.mlab.com:27821/heroku_39bpd3x9";

mongoose.connect(db, function(error){
  if (error) {
    console.log(error);
  }
  else{
    console.log("mongoose connection is successful");
  }
});

app.listen(PORT, function(){
  console.log("listening on port:" + PORT);
});

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '/index.html'));
});