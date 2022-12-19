const os = require("os");
const fs = require('fs');
const path = require('path');

jsonPath = ['a.json', 'b.json', 'c.json', 'd.json', 'e.json', 'f.json', 'g.json', 'h.json', 'i.json', 'j.json', 'k.json', 'l.json'];

fs.writeFileSync('./hito-alpha/tmp.json', '{\"bundle\":' + os.EOL, { 'flag': 'a' }, (err) => { if (err) { throw err } });

var arr = [];

for (let Num = 0; Num < jsonPath.length; Num++) {
    var raw = require(path.join(__dirname, 'hito-alpha/', jsonPath[Num]));
    var json = raw.bundle;
    var data = JSON.stringify(json);
    fs.appendFileSync('./hito-alpha/tmp.json', data, (err) => { if (err) { throw err } });
    arr.push(json);
};

fs.appendFileSync('./hito-alpha/tmp.json', '}', (err) => { if (err) { throw err } });

var tmp = fs.readFileSync('./hito-alpha/tmp.json', 'utf-8', (err) => { if (err) { throw err } }).toString();
var replaced = tmp.replace(/\]\[/g, ',');
var paresd = JSON.parse(replaced);
var bundle = paresd.bundle;
var b_l = bundle.length;
var reJson = JSON.stringify(paresd, null, '\t');
fs.writeFileSync('./all.json', reJson, (err) => { if (err) { throw err } });
fs.unlinkSync('./hito-alpha/tmp.json');


jsonName = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

var arrp = new Array();
for (let aNum = 0; aNum < jsonName.length; aNum++) {
    let data = JSON.parse(fs.readFileSync('./raw/' + jsonName[aNum] + '.json', 'utf-8'));
    arrp.push(data.length - 1);
    console.log(data.length - 1);
};
console.log(`switch (type) { case 'a': var num = hitoRandom(0, ${arrp[0]}); break; case 'b': var num = hitoRandom(0, ${arrp[1]}); break; case 'c': var num = hitoRandom(0, ${arrp[2]}); break; case 'd': var num = hitoRandom(0, ${arrp[3]}); break; case 'e': var num = hitoRandom(0, ${arrp[4]}); break; case 'f': var num = hitoRandom(0, ${arrp[5]}); break; case 'g': var num = hitoRandom(0, ${arrp[6]}); break; case 'h': var num = hitoRandom(0, ${arrp[7]}); break; case '1': var num = hitoRandom(0, ${arrp[8]}); break; case 'j': var num = hitoRandom(0, ${arrp[9]}); break; case 'k': var num = hitoRandom(0, ${arrp[10]}); break; case 'l': var num = hitoRandom(0, ${arrp[11]}); break; case 'all': var num = hitoRandom(0, ${b_l}); break; }`)