/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-09-06 16:25:56
 * @LastEditors: weiyang
 * @LastEditTime: 2022-09-07 10:36:56
 */
const requires = require || window.require;
const fs = requires("fs");

function readFile({ path, format = undefined, resolve, reject }) {
  const newFormat = typeof format === "string" ? format : "utf-8";
  fs.readFile(path, newFormat, (error, data) => {
    if (error) {
      reject && reject("文件读取失败：" + error);
      return;
    }
    resolve && resolve(data);
  });
}

export { readFile };
