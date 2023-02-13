/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-09-05 14:31:15
 * @LastEditors: weiyang
 * @LastEditTime: 2022-09-06 14:32:42
 */
// const requires = require || window.require;
import { remote } from ("electron");
import path from ("path");
const exePath = path.dirname(remote.app.getPath("exe"));
// const fs = requires("fs");
import fs from "fs";
import { DateFormat } from "@royalscome/format";

const initHasPath = (path, resolve, reject) => {
  fs.exists(path, (hasLog) => {
    if (hasLog) {
      reject && reject("文件夹存在");
    } else {
      fs.mkdir(path, (err) => {
        if (err) {
          reject && reject("文件夹创建失败：" + err);
        } else {
          resolve && resolve("文件夹创建成功");
        }
      });
    }
  });
};
const initNotHasPath = (resolve, reject) => {
  fs.exists(exePath + "/log", (hasLog) => {
    if (hasLog) {
      reject && reject("文件夹存在");
    } else {
      fs.mkdir(exePath + "/log", (err) => {
        if (err) {
          reject && reject("文件夹创建失败：" + err);
        } else {
          resolve && resolve("文件夹创建成功");
        }
      });
    }
  });
};
// 初始化日志文件夹
const initLogger = (resolve, reject, path = "") => {
  path ? initHasPath(path, resolve, reject) : initNotHasPath(resolve, reject);
};

const logHasPath = (path, tag = "", content, resolve, reject) => {
  const newContent = `[${DateFormat.format(
    new Date(),
    "yyyy-MM-dd hh:mm:ss:S"
  )}]：${content}\n`;
  const newPath = `${path}/${DateFormat.format(
    new Date(),
    "yyyyMMdd"
  )}-${tag}.txt`;
  fs.exists(newPath, (isHave) => {
    if (isHave) {
      fs.appendFile(newPath, newContent, (err) => {
        if (err) {
          reject && reject("日志写入失败：" + err);
        } else {
          resolve && resolve("日志写入成功");
        }
      });
    } else {
      fs.writeFile(newPath, newContent, (err) => {
        if (err) {
          reject && reject("日志写入失败：" + err);
        } else {
          resolve && resolve("日志写入成功");
        }
      });
    }
  });
};
const logNotHasPath = (tag = "", content, resolve, reject) => {
  const newContent = `[${DateFormat.format(
    new Date(),
    "yyyy-MM-dd hh:mm:ss:S"
  )}]：${content}\n`;
  const newPath = `${exePath}/log/${DateFormat.format(
    new Date(),
    "yyyyMMdd"
  )}-${tag}.txt`;
  fs.exists(newPath, (isHave) => {
    if (isHave) {
      fs.appendFile(newPath, newContent, (err) => {
        if (err) {
          reject && reject("日志写入失败：" + err);
        } else {
          resolve && resolve("日志写入成功");
        }
      });
    } else {
      fs.writeFile(newPath, newContent, (err) => {
        if (err) {
          reject && reject("日志写入失败：" + err);
        } else {
          resolve && resolve("日志写入成功");
        }
      });
    }
  });
};
// 打日志
const logger = (tag = "", content, resolve, reject, path = "") => {
  path
    ? logHasPath(path, tag, content, resolve, reject)
    : logNotHasPath(tag, content, resolve, reject);
};

export { initLogger, logger };
