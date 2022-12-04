const fs = require('fs');
const path = require('path');
const os = require("os");

var name = ['a','b','c','d','e','f','g','h','i','j','k','l'];

var rej = function(name){
  var jsonPath = path.join(__dirname + '/raw-lite/' + name + '.json');
  var body = fs.readFileSync(jsonPath);
  fs.writeFileSync('./hito-alpha/'+name+'.json' , '{\"bundle\":'+os.EOL , {'flag': 'a'} , function(err){if(err){throw err;};});
  fs.appendFileSync('./hito-alpha/'+name+'.json' , body , function(err){if(err){throw err;};});
  fs.appendFileSync('./hito-alpha/'+name+'.json' , '}' , function(err){if(err){throw err;};});
};


for(let fileNum = 1; fileNum < name.length + 1; fileNum++){
  rej(name[fileNum - 1]);
};