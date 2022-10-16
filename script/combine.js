// delete.js
var fs = require('fs'); 
var path = require('path')

jsonPath = ['./a.json','./b.json','./c.json','./d.json','./e.json','./f.json','./g.json','./h.json','./i.json','./j.json','./k.json','./l.json']


var arr = JSON.stringify(require(jsonPath[0]));
var arr1 = JSON.stringify(require(jsonPath[1]));
var arr2 = JSON.stringify(require(jsonPath[2]));
var arr3 = JSON.stringify(require(jsonPath[3]));
var arr4 = JSON.stringify(require(jsonPath[4]));
var arr5 = JSON.stringify(require(jsonPath[5]));
var arr6 = JSON.stringify(require(jsonPath[6]));
var arr7 = JSON.stringify(require(jsonPath[7]));
var arr8 = JSON.stringify(require(jsonPath[8]));
var arr9 = JSON.stringify(require(jsonPath[9]));
var arr10 = JSON.stringify(require(jsonPath[10]));
var arr11 = JSON.stringify(require(jsonPath[11]));
arr = arr.concat(arr1);
arr = arr.concat(arr2);
arr = arr.concat(arr3);
arr = arr.concat(arr4);
arr = arr.concat(arr5);
arr = arr.concat(arr6);
arr = arr.concat(arr7);
arr = arr.concat(arr8);
arr = arr.concat(arr9);
arr = arr.concat(arr10);
arr = arr.concat(arr11);

var json = arr;

let file = path.join(__dirname, 'all.json'); 

fs.writeFile(file, json, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log('文件创建成功，地址：' + file);
});