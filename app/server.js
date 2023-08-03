let express = require('express');
let path = require('path');
let fs = require('fs');
const mongoose = require('mongoose');

let bodyParser = require('body-parser');
let app = express();


(async function connectToDB () {
   try {
    await mongoose.connect('mongodb://127.0.0.1:27017/user-account');
   } catch (error) {
    console.log(error);
   }
})();

const User = mongoose.model('Usr', { name: String });


const setUpandStart = () => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());


  app.listen(3000, ()=>{
    console.log("server started");
  })
}


setUpandStart();

