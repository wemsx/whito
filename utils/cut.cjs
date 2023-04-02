//import { readFileSync, writeFile, mkdirSync } from "fs";
const fs = require('fs');

let jsonPath = ['a.json','b.json','c.json','d.json','e.json','f.json','g.json','h.json','i.json','j.json','k.json','l.json']
fs.mkdirSync('sentences/single');
for (let fileNum = 0; fileNum < jsonPath.length; fileNum++) {
  let json_raw = fs.readFileSync(`sentences/raw-lite/${jsonPath[fileNum]}`).toString();
  let json_body = JSON.parse(json_raw);
  let folder = jsonPath[fileNum].split('');
  fs.mkdirSync(`sentences/single/${folder[0]}`);
  for (let i = 0; i < json_body.length - 1; i++) {
    let data = JSON.stringify(json_body[i]);
    fs.writeFile(`sentences/single/${folder[0]}/${i + 1}.json`, data, function (err) {
      if (err) {return console.log(err);}
    });
  }
  console.log(`已完成${jsonPath[fileNum]}文件的分片`)
}
console.log('完成分片')
