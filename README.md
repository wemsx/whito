## 开源的重制版Hitokoto Api
其他的之后再说吧。这个Api是源于我自己很喜欢[Hitokoto](https://hitokoto.cn)的服务，但是一直苦于没有自己的服务器，所以经历了千难万险（这是真的，笔记本用空了6管电）做出了一个基于Node.js得重制版本。根据原仓库的要求，因为我对语句库中的几个JSON文件进行了一点点修改，所以本项目依据 AGPL 开源。欢迎二次创作，毕竟是开源让我们聚集在一起的。但请一定遵循条款。
本项目使用了axios。
本项目部署于[Vercel](https://vercel.com)

## 使用方法
只有一个函数get
```javascript
//作为CommonJS引入
const hito = require('whito');

//调用函数
hito.get("eleme", "l", (error, sentence) => {
    if (error) {throw error}
    console.log(sentence); //输出hito内容
});
```
### TO DO List
添加自定义JSON文件支持
支持直接使用Hitokoto原生语句库的文件

### 相关链接
Hitokoto主仓库：[https://github.com/hitokoto-osc/hitokoto-api](https://github.com/hitokoto-osc/hitokoto-api)
Hitokoto语句库：[https://github.com/hitokoto-osc/sentences-bundle](https://github.com/hitokoto-osc/sentences-bundle)
项目Npm地址：[https://www.npmjs.com/package/whito](https://www.npmjs.com/package/whito)
项目Github：[https://github.com/wemsx/whito](https://github.com/wemsx/whito)