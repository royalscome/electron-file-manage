# electron-file-manage

<h1> 用前须知 </h1>
<span> electron中使用了webpack的话，一定要nodejs，让webpack识别nodejs模块，并且应用需要使用管理员权限进行读写 </span>

```
vue.config.js
configureWebpack(config) {
  Object.assign(config, {
      target: "electron-renderer",
    });
}

```

<h1 style="font-weight: bold"> 开始 </h1>

```
npm install @royalscome/electron-file-manage

```

<h1> 日志功能 </h1>

```
import { initLogger, logger } from "@royalscome/electron-file-manage";

initLogger(
  success => {
    console.log(success);
  },
  error => {
    console.log(error);
  }
)

window.logger = logger

logger(
  tag,
  content,
  success => {
    console.log(success);
  },
  error => {
    console.log(error);
  }
)

```

<h2> 参数解析 </h2>
<table border="1" cellspacing="0">
  <tr style="background: rgba(0,9,9,.2)">
    <th>函数名</th>
    <th>参数</th>
    <th>介绍</th>
  </tr>
  <tr>
    <td>initLogger</td>
    <td>initLogger(resolve=>{},reject=>{},path)</br>resolve为成功函数回调；reject为失败函数回调；path为日志文件夹创建路径，为绝对路径如D:xxxx，默认为应用安装目录</td>
    <td>日志初始化方法，一定要在应用开始时先调用该方法保证日志文件夹存在</td>
  </tr>
  <tr>
    <td>logger</td>
    <td>logger(tag,content,resolve=>{},reject=>{},path)</br>tag为日志文件唯一标识，默认为空；conetnt为当条日志内容；resolve为成功函数回调，reject为失败函数回调，path为日志文件创建路径，为绝对路径如D:xxxx，默认为应用安装目录</td>
    <td>写日志方法</td>
  </tr>
</table>
