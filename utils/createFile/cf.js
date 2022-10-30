const fs = require('fs');
const request = require('request');
const os = require("os");

var name = ['a','b','c','d','e','f','g','h','i','j','k','l'];

var rej = function(name){request('https://fastly.jsdelivr.net/gh/hitokoto-osc/sentences-bundle@master/sentences/'+name+'.json', function(error, response, body){
    if (!error && response.statusCode == 200){
        fs.writeFileSync('./'+name+'.json' , '{\"bundle\":'+os.EOL , {'flag': 'a'} , function(err){if(err){throw err;};});
        fs.appendFileSync('./'+name+'.json' , body , function(err){if(err){throw err;};});
        fs.appendFileSync('./'+name+'.json' , '}' , function(err){if(err){throw err;};});
        return;
    } else {
      throw error;
    }
})};


for(let fileNum = 1; fileNum < name.length + 1; fileNum++){
  rej(name[fileNum - 1]);
};