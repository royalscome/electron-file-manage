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

<h4> 参数解析 </h4>
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

<h1> 判断目录是否存在 </h1>

```
import { exists } from "@royalscome/electron-file-manage"
exists(
  path,
  success => {
    console.log(success)
  },
  error => {
    console.log(error)
  }
)

```

<h4> 参数解析 </h4>
<table border="1" cellspacing="0">
  <tr style="background: rgba(0,9,9,.2)">
    <th>函数名</th>
    <th>参数</th>
    <th>介绍</th>
  </tr>
  <tr>
    <td>exists</td>
    <td>exists(path,resolve, reject)</br>path为目录路径，为绝对路径；resolve为目录存在回调函数，reject为目录不存在回调函数</td>
    <td>判断目录是否存在</td>
  </tr>
</table>

<h1> 创建目录（文件夹） </h1>

```
import { mkdir } from "@royalscome/electron-file-manage"

mkdir(
  path,
  success => {
    console.log(success)
  },
  error => {
    console.log(error)
  }
)

```

<h4> 参数解析 </h4>
<table border="1" cellspacing="0">
  <tr style="background: rgba(0,9,9,.2)">
    <th>函数名</th>
    <th>参数</th>
    <th>介绍</th>
  </tr>
  <tr>
    <td>mkdir</td>
    <td>mkdir(path,resolve, reject)</br>path为目录路径，为绝对路径；resolve为目录创建成功回调函数，reject为目录创建失败回调函数</td>
    <td>创建目录（文件夹）</td>
  </tr>
</table>

<h1> 读取文件 </h1>

```
import { readFile } from "@royalscome/electron-file-manage"
readFile({
  path,
  format,
  resolve,
  reject
})

```

<h4> 参数解析 </h4>
<table border="1" cellspacing="0">
  <tr style="background: rgba(0,9,9,.2)">
    <th>函数名</th>
    <th>参数</th>
    <th>介绍</th>
  </tr>
  <tr>
    <td>readFile</td>
    <td>readFile({path,format,resolve,reject})</br>path为文件路径，为绝对路径；
    format为文件流格式，默认为utf8；resolve为文件读取成功回调函数，返回文件内容，reject为文件读取失败回调函数</td>
    <td>读取文件函数</td>
  </tr>
</table>

<h1> 写入文件 </h1>

```
import { writeFile, appendFile  } from "@royalscome/electron-file-manage"

writeFile({
  path,
  data,
  options,
  resolve,
  reject
})

appendFile({
  path,
  data,
  options,
  resolve,
  reject
})

```

<h4> 参数解析 </h4>
<table border="1" cellspacing="0">
  <tr style="background: rgba(0,9,9,.2)">
    <th>函数名</th>
    <th>参数</th>
    <th>介绍</th>
  </tr>
  <tr>
    <td>writeFile</td>
    <td>writeFile({path,data,options,resolve,reject})</br>path为文件路径，为绝对路径；data为写入的内容，options默认utf8，具体可以参考fs可以不传；
    resolve为文件写入成功回调函数；reject为文件写入失败回调函数</td>
    <td>写入文件函数，重复写会覆盖上一次内容</td>
  </tr>
  <tr>
    <td>appendFile</td>
    <td>appendFile({path,data,options,resolve,reject})</br>path为文件路径，为绝对路径；data为写入的内容，options默认utf8，具体可以参考fs可以不传；
    resolve为文件写入成功回调函数；reject为文件写入失败回调函数</td>
    <td>写入文件函数，会插入到文件末尾</td>
  </tr>
</table>
