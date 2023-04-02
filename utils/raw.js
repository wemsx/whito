// delete.js
var fs = require('fs'); 
var path = require('path')

jsonPath = ['a.json','b.json','c.json','d.json','e.json','f.json','g.json','h.json','i.json','j.json','k.json','l.json']
for(let fileNum = 1; fileNum < jsonPath.length + 1; fileNum++){

  //var json = require(path.join(__dirname, 'sentences/raw/' + jsonPath[fileNum - 1]));
  var prejson = fs.readFileSync(path.join(__dirname, 'sentences/raw/' + jsonPath[fileNum - 1]));
  var json = JSON.parse(prejson)

  var deleteArr = ['id','creator', 'uuid', 'creator_uid', 'reviewer',  'created_at', 
  'length','from_who','commit_from','type'];

  for(var i = 0; i < json.length; i++){
    for(var j = 0; j < deleteArr.length; j++){
      delete json[i][deleteArr[j]];
    }

  }

  json = JSON.stringify(json,null,'\t');

  let file = path.join(__dirname, 'sentences/raw-lite/' +jsonPath[fileNum - 1]); 

  fs.writeFile(file, json, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log('文件创建成功，地址：' + file);
    
  });
}
