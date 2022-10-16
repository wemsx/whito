const fs = require('fs');
const request = require('request');
const os = require("os");


var rej = function(){request('https://unpkg.com/hito-bundles@1.1.0/sentences/a.json', function(error, response, body){
    if (!error && response.statusCode == 200){
        fs.appendFileSync('./a.json' , body , function(err){if(err){throw err;};});
        fs.appendFileSync('./a.json' , '}' , function(err){if(err){throw err;};});
        return;
    } else {
      throw error;
    }
})};

fs.writeFile('./a.json' , '{\"bundle\":'+os.EOL , {'flag': 'a'} , function(err){if(err){throw err;};});

rej();

//fs.readFile('./a.json' , 'utf-8' , function(err , data){if(err){throw err;};console.log(data);});