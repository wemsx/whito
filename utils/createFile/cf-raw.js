const fs = require('fs');
const request = require('request');

var name = ['a','b','c','d','e','f','g','h','i','j','k','l'];

var rej = function(name){request('https://fastly.jsdelivr.net/gh/hitokoto-osc/sentences-bundle@master/sentences/'+name+'.json', function(error, response, body){
    if (!error && response.statusCode == 200){
        fs.appendFileSync('./'+name+'.json' , body , function(err){if(err){throw err;};});
        return;
    } else {
      throw error;
    }
})};


for(let fileNum = 1; fileNum < name.length + 1; fileNum++){
  rej(name[fileNum - 1]);
};
