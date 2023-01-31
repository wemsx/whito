const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'hito';

var get = async () => {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('l');

  //方法一：获取记录总数x，取随机值y，再用.skip()方法获取第y+1条记录返回。
  /*var hitoRandom = function (minNumber, maxNumber) {
    var range = maxNumber - minNumber;
    var random = Math.random();
    return minNumber + Math.round(random * range);
  };*/
  //const findResult = await collection.countDocuments({});
  //const findResult = await collection.find({}).limit(1).skip(1).toArray();

  //方法二：获取全部记录(返回为数组文件)，再取随机值y，访问 findResult[y] 获取记录。
  //const findResult = await collection.find({}).toArray();

  //(lts采用)方案三：直接使用aggregate文档聚合获取一条随机记录。
  const findResult = collection.aggregate([ { $sample: { size: 1 } } ]).toArray();
  return findResult;
}

console.time('test')
get()
  .then(result => {
    console.log(result[0].hitokoto);
    console.timeEnd('test');
  })
  .catch(console.error)
  .finally(() => client.close());