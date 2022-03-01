const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const api = require('./router/api')
const app = express();
//const cors = require('cors')




app.use(bodyParser.json());
app.use('/api',api)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//app.use(cors());
// app.use(
//   cors({
//     origin:"http://127.0.0.1:5501"
//   })
// )
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Methods','GET,POST,PUT,UPDATE')
//   res.header("Access-Control-Allow-Headers", 'content-Type');
//   next();
// });

app.get('/',function(req,res){
  res.send('hello ')
})


app.listen(PORT,function(){
  console.log('hello'+PORT)
})
