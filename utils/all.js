const os = require("os");
const fs = require('fs');
const path = require('path');

jsonPath = ['a.json','b.json','c.json','d.json','e.json','f.json','g.json','h.json','i.json','j.json','k.json','l.json'];

fs.writeFileSync('./hito-alpha/tmp.json' , '{\"bundle\":'+os.EOL , {'flag': 'a'} , (err)=>{if(err){throw err}});

var arr = [];

for(let Num = 0; Num < jsonPath.length ; Num++){
    var raw = require(path.join(__dirname , 'hito-alpha/' , jsonPath[Num]));
    var json = raw.bundle;
    var data = JSON.stringify(json);
    fs.appendFileSync('./hito-alpha/tmp.json' , data , (err)=>{if(err){throw err}});
    arr.push(json);
};

fs.appendFileSync('./hito-alpha/tmp.json' , '}' , (err)=>{if(err){throw err}});

var tmp = fs.readFileSync('./hito-alpha/tmp.json', 'utf-8', (err)=>{if(err){throw err}}).toString();
var replaced = tmp.replace(/\]\[/g, ',');
var paresd = JSON.parse(replaced);
var bundle = paresd.bundle;
var b_l = bundle.length;
var reJson = JSON.stringify(paresd , null , '\t');
fs.writeFileSync('./all.json' , reJson , (err)=>{if(err){throw err}});
fs.unlinkSync('./hito-alpha/tmp.json');


jsonName = ['a','b','c','d','e','f','g','h','i','j','k','l'];

var arrp = new Array();
for(let aNum = 0; aNum < jsonName.length ; aNum++){
    let data = JSON.parse(fs.readFileSync('./raw/'+jsonName[aNum]+'.json', 'utf-8'));
    arrp.push(data.length - 1);
    console.log(data.length - 1);
};
console.log('if (requestType === \'a\') { var hitoNum = randomRangeNum(0,'+arrp[0]+'); } else if (requestType === \'b\') { var hitoNum = randomRangeNum(0,'+arrp[1]+'); } else if (requestType === \'c\') { var hitoNum = randomRangeNum(0,'+arrp[2]+'); } else if (requestType === \'d\') { var hitoNum = randomRangeNum(0,'+arrp[3]+'); } else if (requestType === \'e\') { var hitoNum = randomRangeNum(0,'+arrp[4]+'); } else if (requestType === \'f\') { var hitoNum = randomRangeNum(0,'+arrp[5]+'); } else if (requestType === \'g\') { var hitoNum = randomRangeNum(0,'+arrp[6]+'); } else if (requestType === \'h\') { var hitoNum = randomRangeNum(0,'+arrp[7]+'); } else if (requestType === \'i\') { var hitoNum = randomRangeNum(0,'+arrp[8]+'); } else if (requestType === \'j\') { var hitoNum = randomRangeNum(0,'+arrp[9]+'); } else if (requestType === \'k\') { var hitoNum = randomRangeNum(0,'+arrp[10]+'); } else if (requestType === \'l\') { var hitoNum = randomRangeNum(0,'+arrp[11]+'); } else if (requestType === \'all\') { var hitoNum = randomRangeNum(0,'+b_l+'); } else { var hitoNum = randomRangeNum(0,'+arrp[0]+'); var requestType = \'a\'; };')