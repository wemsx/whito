## 开源的重制版Hitokoto Api
其他的之后再说吧。这个Api是源于我自己很喜欢[Hitokoto](https://hitokoto.cn)的服务，但是一直苦于没有自己的服务器，所以经历了千难万险（这是真的，笔记本用空了6管电）做出了一个基于Node.js得重制版本。根据原仓库的要求，因为我对语句库中的几个JSON文件进行了一点点修改，所以本项目依据 AGPL 开源。欢迎二次创作，毕竟是开源让我们聚集在一起的。但请一定遵循条款。
本项目使用了Express框架。
本项目托管于[github](https://github.com/hito)，仓库的master分支是Node版本，wasted分支是一个已经废弃的原生JS版本（无法正常调用）。
本项目部署于[Vercel](https://vercel.com)

## 使用方法
请求地址：https://word.api.wemsx.top?type={type}&code={code}
其中type的用法参考Hitokoto官网，Code表示返回纯文本还是JS脚本。
```javascript
<script type="text/javascript" src="https://word.api.wemsx.top?type=a&code=js"></script>
<div id="hitoNode"><p><script type="text/javascript">hitoNode()</script></p></div>
```
### TO DO List
添加自定义JSON文件支持
支持直接使用Hitokoto原生语句库的文件

### 相关链接
Hitokoto主仓库：[https://github.com/hitokoto-osc/hitokoto-api](https://github.com/hitokoto-osc/hitokoto-api)
Hitokoto语句库：[https://github.com/hitokoto-osc/sentences-bundle](https://github.com/hitokoto-osc/sentences-bundle)
项目Npm地址：[https://www.npmjs.com/package/nodehito](https://www.npmjs.com/package/nodehito)
项目Github：[https://github.com/wemsx/hito](https://github.com/wemsx/hito)