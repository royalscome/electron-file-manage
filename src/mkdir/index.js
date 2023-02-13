/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-09-07 13:48:03
 * @LastEditors: weiyang
 * @LastEditTime: 2022-09-07 14:12:18
 */
// const requires = require || window.require;
// const fs = requires("fs");
import fs from "fs";

function mkdir(path, resolve, reject) {
  fs.mkdir(path, (error) => {
    if (error) {
      reject && reject("目录创建失败：" + error);
    } else {
      resolve && resolve("目录创建成功");
    }
  });
}

export { mkdir };
