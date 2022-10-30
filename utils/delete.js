// delete.js
var fs = require('fs'); 
var path = require('path')

jsonPath = ['./sentences/a.json','./sentences/b.json','./sentences/c.json','./sentences/d.json','./sentences/e.json','./sentences/f.json','./sentences/g.json','./sentences/h.json','./sentences/i.json','./sentences/j.json','./sentences/k.json','./sentences/l.json']
for(let fileNum = 1; fileNum < jsonPath.length + 1; fileNum++){

  var json = require(jsonPath[fileNum - 1]);

  var deleteArr = ['id','creator', 'uuid', 'creator_uid', 'reviewer',  'created_at', 
  "length","from_who","commit_from"];

  for(var i = 0; i < json.length; i++){
    for(var j = 0; j < deleteArr.length; j++){
      delete json[i][deleteArr[j]];
    }

  }

  json = JSON.stringify(json);

  let file = path.join(__dirname, 'data/' + fileNum + '.json'); 

  fs.writeFile(file, json, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log('文件创建成功，地址：' + file);
    
  });
}
