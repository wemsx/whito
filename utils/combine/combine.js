var fs = require('fs'); 

jsonName = ['a','b','c','d','e','f','g','h','i','j','k','l'];

arr = fs.readFileSync(jsonName[0]+'.json').toString();
arr = arr.concat(fs.readFileSync(jsonName[1]+'.json').toString());
arr = arr.concat(fs.readFileSync(jsonName[2]+'.json').toString());
arr = arr.concat(fs.readFileSync(jsonName[3]+'.json').toString());
arr = arr.concat(fs.readFileSync(jsonName[4]+'.json').toString());
arr = arr.concat(fs.readFileSync(jsonName[5]+'.json').toString());
arr = arr.concat(fs.readFileSync(jsonName[6]+'.json').toString());
arr = arr.concat(fs.readFileSync(jsonName[7]+'.json').toString());
arr = arr.concat(fs.readFileSync(jsonName[8]+'.json').toString());
arr = arr.concat(fs.readFileSync(jsonName[9]+'.json').toString());
arr = arr.concat(fs.readFileSync(jsonName[10]+'.json').toString());
arr = arr.concat(fs.readFileSync(jsonName[11]+'.json').toString());

fs.writeFileSync('all.json' , arr , function(err){if(err){throw err;};});