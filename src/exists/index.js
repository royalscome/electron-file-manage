/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-09-07 11:19:53
 * @LastEditors: weiyang
 * @LastEditTime: 2022-09-07 11:26:17
 */
const requires = require || window.require;
const fs = requires("fs");

function exists(path, resolve, reject) {
  fs.exists(path, (isHave) => {
    if (isHave) {
      resolve && resolve("目录或文件存在");
    } else {
      reject && reject("目录或文件不存在");
    }
  });
}

export { exists };
