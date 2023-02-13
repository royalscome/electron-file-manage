/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-09-06 17:31:54
 * @LastEditors: weiyang
 * @LastEditTime: 2022-09-07 10:44:51
 */
// const requires = require || window.require;
// const fs = requires("fs");
import fs from "fs";

function writeFile({ path, data, options, resolve, reject }) {
  let newOptions =
    typeof options === "function"
      ? "utf8"
      : typeof options === "undefined"
      ? "utf8"
      : options;
  fs.writeFile(path, data, newOptions, (error, data) => {
    if (error) {
      reject && reject(error);
      return;
    }
    resolve && resolve(data);
  });
}

function appendFile({ path, data, options, resolve, reject }) {
  let newOptions =
    typeof options === "function"
      ? "utf8"
      : typeof options === "undefined"
      ? "utf8"
      : options;
  fs.appendFile(path, data, newOptions, (error, data) => {
    if (error) {
      reject && reject(error);
      return;
    }
    resolve && resolve(data);
  });
}

export { writeFile, appendFile };
